import React, { useState } from "react";
import Playlist from "../../components/playlist";
import Accordion from "../../components/accordion";
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../lib/s3Client";

// styles
import page from "../../styles/page.module.css";
import media from "../../styles/page-media.module.css";

const Audio = ({ data }) => {
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


  const [isOpen, setIsOpen] = useState(false);

  // const twentyone = data.twentyone.nodes;
  // const twenty = data.twenty.nodes;
  // const nineteen = data.nineteen.nodes;
  // const eighteen = data.eighteen.nodes;
  // const seventeen = data.seventeen.nodes;
  // const sixteen = data.sixteen.nodes;
  // const fifteen = data.fifteen.nodes;
  // const fourteen = data.fourteen.nodes;
  // const twelve = data.twelve.nodes;
  // const eleven = data.eleven.nodes;

  // const various = data.various.nodes;
  // const srimad = data.srimad.nodes;
  // const chaitanya = data.chaitanya.nodes;
  // const bhagavad = data.bhagavad.nodes;
  // const kirtans = data.kirtans.nodes;

  const festivals = allofThese("festivals")

  return (
    <div className={page.container}>
      <header>
        <h2 className={`${page.title} ${media.title} yellow`}>Audio</h2>
      </header>
      <section className="page-content">
            <div className="accordion">
              <header
                onClick={() => setIsOpen(!isOpen)}
                className="folder-title"
              >
                Yearly
                <div style={{ float: "right" }}>
                  {!isOpen && <span>&#9650;</span>}
                  {isOpen && <span>&#9660;</span>}
                </div>
              </header>
          
            </div>

            
              <div label="Festivals">
                <Playlist playlist={festivals} />
              </div>
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
