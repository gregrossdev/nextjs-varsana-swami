import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../lib/s3Client";

import Gallery from "../../components/gallery";

// styles
import styles from "../../styles/page.module.css";

const Photos = ({ allPhotos, allFolders }) => {
  const [photoItems, setPhotoItems] = useState(allPhotos);
  const [folders, setFolders] = useState(allFolders);

  const [numOfItems, setNumOfItems] = useState(4);
  const [loading, setLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const filterItems = (folder, index) => {
    const updatedItems = allPhotos.filter((file) => {
      return file.Key.split("/")[0] === folder;
    });
    setPhotoItems(updatedItems);

    if (showInfo === index) {
      return setShowInfo(null);
    }

    setShowInfo(index);
  };

  function handleClick() {
    setNumOfItems((prev) => prev + 1);
  }

  return (
    <div className="page-container">
      <header>
        <h2 className="page-title">Photo Albums</h2>
      </header>

      <section className="page-section">
        {folders.map((category, index) => {
          return (
            <div className="accordion" key={index}>
              <header className={styles.mediaHeader}>
                <h3 className={styles.mediaFolder}>{category}</h3>
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
                <div className="grid">
                  {photoItems.slice(0, numOfItems).map((item) => {
                    return <Gallery gallery={item.Key} />;
                  })}
                </div>
                <button onClick={handleClick} className="gallery-btn">
                  Load More
                </button>
              </>
              )}
            </div>
          );
        })}

      </section>
    </div>
  );
};

export default Photos;

export async function getStaticProps() {
  const bucketParams = { Bucket: "varsana-photos" };
  const data = await s3Client.send(new ListObjectsCommand(bucketParams));
  const stringify = JSON.stringify(data.Contents);
  const allPhotos = JSON.parse(stringify);
  const allFolders = [...new Set(allPhotos.map((i) => i.Key.split("/")[0]))];

  return {
    props: {
      allPhotos,
      allFolders,
    },
  };
}
