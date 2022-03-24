import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import AudioFile from "../../components/playlist-file";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../lib/s3Client";

// styles
import styles from "../../styles/page-media.module.css";

const Audio = ({ data }) => {
  const [numOfItems, setNumOfItems] = useState(4);
  const [loading, setLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const allAudio = JSON.parse(data);
  const folders = [...new Set(allAudio.map((i) => i.Key.split("/")[0]))];

  function handleClick() {
    setNumOfItems((prev) => prev + 1);
  }

  return (
    <div className="page-container">
      <header>
        <h2 className={styles.title}>Audio</h2>
      </header>
      <section className="page-content">
        {folders.map((folder) => {
          return (
            <header className={styles.header}>
              <h3 className={styles.folder}>{folder}</h3>
              <button onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </header>
          );
        })}

        

        {/* <div label="Various">
                <Playlist playlist={various} />
              </div>
              <div label="Srimad Bhagavatam">
                <Playlist playlist={srimad} />
              </div>
              <div label="Chaitanya-caritamrta">
                <Playlist playlist={chaitanya} />
              </div>
              <div label="Bhagavad-gita">
                <Playlist playlist={bhagavad} />
              </div>
              <div label="Bhajans & Kirtans">
                <Playlist playlist={kirtans} />
              </div> */}
      </section>
    </div>
  );
};

export default Audio;

export async function getStaticProps() {
  const bucketParams = { Bucket: "varsana-audio" };
  const data = await s3Client.send(new ListObjectsCommand(bucketParams));

  return {
    props: {
      data: JSON.stringify(data.Contents),
    },
  };
}
