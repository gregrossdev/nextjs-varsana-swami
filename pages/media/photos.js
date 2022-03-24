import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../lib/s3Client";

import Gallery from "../../components/gallery";

// styles
import styles from "../../styles/page-media.module.css";

const Photos = ({ photos }) => {
  
  const [numOfItems, setNumOfItems] = useState(4);
  const [loading, setLoading] = useState(true);
  const photoData = JSON.parse(photos);

  const [showInfo, setShowInfo] = useState(false);

  const allofThese = (keyword) => {
    return photoData.filter((i) => {
      const album = i.Key.split("/")[0];
      if (album.includes(keyword)) {
        return i;
      }
    });
  };

  function handleClick() {
    setNumOfItems((prev) => prev + 1);
  }

  const summer = allofThese("summer");
  const fall = allofThese("fall");
  const rad = allofThese("radhastami");
  const cleaning = allofThese("cleaning");
  const varsana = allofThese("varsana");
  const devi = allofThese("vrinda");

  return (
    <div className="page-container">
      <header>
        <h2 className={styles.title}>Photo Albums</h2>
      </header>

      <section className="page-section">
        
        <div className="accordion">
          <header className={styles.header}>
            <h3 className={styles.folder}>One Summer on Govardhan</h3>
            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </header>
          {showInfo && (
            <>
              <div className="grid">
                {summer.slice(0, numOfItems).map((item) => {
                  return <Gallery gallery={item.Key} />;
                })}
              </div>
              <button onClick={handleClick} className="gallery-btn">
                Load More
              </button>
            </>
          )}
        </div>
        
        <div className="accordion">
          <header className={styles.header}>
            <h3 className={styles.folder}>Fall on Govardhan</h3>
            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </header>
          {showInfo && (
            <>
              <div className="grid">
                {fall.slice(0, numOfItems).map((item) => {
                  return <Gallery gallery={item.Key} />;
                })}
              </div>
              <button onClick={handleClick} className="gallery-btn">
                Load More
              </button>
            </>
          )}
        </div>

        {/* <div>
            
            <Gallery gallery={items} />
          </div> */}
        {/* <div>
            <h3>Radhastami 2017</h3>
            <Gallery gallery={photos} />
          </div>
          <div>
            <h3>Cleaning Syama Kunda</h3>
            <Gallery gallery={photos} />
          </div>
          <div>
            <h3>Varsana Maharaj and Jananivas Prabhu</h3>
            <Gallery gallery={photos} />
          </div>
          <div>
            <h3>Vrinda-Devi and her birthday cake</h3>
            <Gallery gallery={photos} />
          </div> */}
      </section>
    </div>
  );
};

export default Photos;

export async function getStaticProps() {
  const bucketParams = { Bucket: "varsana-photos" };
  const data = await s3Client.send(new ListObjectsCommand(bucketParams));

  return {
    props: {
      photos: JSON.stringify(data.Contents),
    },
  };
}
