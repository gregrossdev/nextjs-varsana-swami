import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Playlist from "../../components/playlist";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../lib/s3Client";

// styles
import styles from "../../styles/page-media.module.css";

const Audio = ({ allAudio, allFolders }) => {
  const [audioItems, setAudioItems] = useState(allAudio);
  const [folders, setFolders] = useState(allFolders);
  const [showInfo, setShowInfo] = useState(false);

  const [loading, setLoading] = useState(true);

  const filterItems = (folder, index) => {
    const updatedItems = allAudio.filter((file) => {
      return file.Key.split("/")[0] === folder;
    });
    setAudioItems(updatedItems);

    if (showInfo === index) {
      return setShowInfo(null);
    }

    setShowInfo(index);
  };


  return (
    <div className="page-container">
      <header>
        <h2 className="page-title">Audio</h2>
      </header>
      <section className="page-section">
        {folders.map((category, index) => {
          return (
            <div className="accordion" key={index}>
              <header className={styles.header}>
                <h3 className={styles.folder}>{category}</h3>
                <button
                  type="button"
                  className="filter-btn"
                  onClick={() => filterItems(category, index)}
                >
                  {showInfo === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </header>
              {showInfo === index && (
                <>
                  <ul>
                    <Playlist playlist={audioItems} />
                  </ul>
                </>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Audio;

export async function getStaticProps() {
  const bucketParams = { Bucket: "varsana-audio" };
  const data = await s3Client.send(new ListObjectsCommand(bucketParams));
  const stringify = JSON.stringify(data.Contents);
  const allAudio = JSON.parse(stringify);
  const allFolders = [...new Set(allAudio.map((i) => i.Key.split("/")[0]))];

  return {
    props: {
      allAudio,
      allFolders,
    },
  };
}
