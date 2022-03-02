
import React, { useState, useEffect } from "react";
import Gallery from "../../components/gallery";
import Accordion from "../../components/accordion";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../lib/s3Client";

// styles
import page from "../../styles/page.module.css";
import media from "../../styles/page-media.module.css";

const Photos = ({ data }) => {
  const [photos, setPhotos] = useState([]);
  const [next, setNext] = useState(10);

  const info = JSON.parse(data);

  const allofThese = (keyword) => {
    return (
      info.filter((i) => {
        const album = i.Key.split("/")[0];
        if (album.includes(keyword)) {
          return i;
        }
      })
    )
  }

  const totalImages = 10;
  let currentPhotos = [];

  const summer = allofThese("summer")
  const fall = allofThese("fall")
  const rad = allofThese("radhastami")
  const cleaning = allofThese("cleaning")
  const varsana = allofThese("varsana")
  const devi = allofThese("vrinda")


  const loopWithSlice = (start, end) => {
    const slicedPhotos = summer.slice(start, end);
    currentPhotos = [...currentPhotos, ...slicedPhotos];
    setPhotos(currentPhotos);
  };

  useEffect(() => {
    loopWithSlice(0, totalImages);
  }, []);

  const handleShowMorePhotos = () => {
    loopWithSlice(next, next + totalImages);
    setNext(next + totalImages);
  };


  return (
    <div className={page.container}>
      <header>
        <h2 className={`${page.title} ${media.title} green`}>Photo Albums</h2>
      </header>

      <section className="page-content">
        <div className="inner-mw mobile-pd">
          <div>
            <h3>One Summer on Govardhan</h3>
            <Gallery gallery={photos} />
            <button onClick={handleShowMorePhotos}>
              Load More
            </button>
          </div>
          {/* <div>
            <h3>Fall on Govardhan</h3>
            <Gallery gallery={photos} />
          </div>
          <div>
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
      data: JSON.stringify(data.Contents),
    },
  };
}
