import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../lib/s3Client";

// styles
import styles from "../../styles/page.module.css";
import media from "../../styles/page-media.module.css";

const Photos = ({ photos }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [numOfItems, setNumOfItems] = useState(10);

  const [loading, setLoading] = useState(true);

  const photoData = JSON.parse(photos);

  const allofThese = (keyword) => {
    return photoData.filter((i) => {
      const album = i.Key.split("/")[0];
      if (album.includes(keyword)) {
        return i;
      }
    });
  };

  function handleClick() {
    setNumOfItems((prev) => prev + 10);
  }

  const summer = allofThese("summer");
  console.log(summer);
  const fall = allofThese("fall");
  const rad = allofThese("radhastami");
  const cleaning = allofThese("cleaning");
  const varsana = allofThese("varsana");
  const devi = allofThese("vrinda");

  return (
    <div className={styles.container}>
      <header>
        <h2 className={`${styles.title} ${media.title} green`}>Photo Albums</h2>
      </header>

      <section className="page-content">
        <div className="inner-mw mobile-pd">
          <div>
            <h3>One Summer on Govardhan</h3>
            <section className="grid">
              {summer.slice(0, numOfItems).map((item) => {
                return (
                  <div className="gallery" key={item.Key}>
                    <Image
                      src={`https://varsana-photos.nyc3.digitaloceanspaces.com/${item.Key}`}
                      alt={item.Key}
                      key={item.Key}
                      layout="fill"
                      objectFit="cover"
                      className="gallery-photo"
                    />
                  </div>
                );
              })}
            </section>
            <button onClick={handleClick} className="gallery-btn">Load More</button>
          </div>
          {/* <div>
            <h3>Fall on Govardhan</h3>
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
        </div>
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
