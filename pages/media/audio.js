import React, { useState } from "react";
import Playlist from "../../components/playlist";
import Accordion from "../../components/accordion";

// styles
import page from "../../styles/page.module.css";
import media from "../../styles/page-media.module.css";

const Audio = ({ data }) => {
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

  // const festivals = data.festivals.nodes;
  // const various = data.various.nodes;
  // const srimad = data.srimad.nodes;
  // const chaitanya = data.chaitanya.nodes;
  // const bhagavad = data.bhagavad.nodes;
  // const kirtans = data.kirtans.nodes;

  return (
    <div className={page.container}>
      <header>
        <h2 className={`${page.title} ${media.title} yellow`}>Audio</h2>
      </header>
      {/* <section className="page-content">
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
              <div className="yearly">
                {isOpen && (
                  <Accordion>
                    <div label="2021">
                      <Playlist playlist={twentyone} />
                    </div>
                    <div label="2020">
                      <Playlist playlist={twenty} />
                    </div>
                    <div label="2019">
                      <Playlist playlist={nineteen} />
                    </div>
                    <div label="2018">
                      <Playlist playlist={eighteen} />
                    </div>
                    <div label="2017">
                      <Playlist playlist={seventeen} />
                    </div>
                    <div label="2016">
                      <Playlist playlist={sixteen} />
                    </div>
                    <div label="2015">
                      <Playlist playlist={fifteen} />
                    </div>
                    <div label="2014">
                      <Playlist playlist={fourteen} />
                    </div>
                    <div label="2012">
                      <Playlist playlist={twelve} />
                    </div>
                    <div label="2011">
                      <Playlist playlist={eleven} />
                    </div>
                  </Accordion>
                )}
              </div>
            </div>

            <Accordion>
              <div label="Festivals">
                <Playlist playlist={festivals} />
              </div>
              <div label="Various">
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
              </div>
            </Accordion>
          </section> */}
    </div>
  );
};

export default Audio;

// const Wrapper = styled.div`
//   .page-title {
//     margin-bottom: 1em;
//   }

//   .folder-title {
//     background-color: var(--clr-green);
//     margin-bottom: 1em;
//   }

//   .yearly .folder-title {
//     background-color: var(--clr-grey-10);
//   }

//   .folder-margin-bottom {
//     margin-bottom: 0;
//   }

//   @media screen and (min-width: 900px) {
//     .accordion > div {
//       margin-bottom: 1em;
//     }
//   }
// `;

// export const query = graphql`
//   {
//     yearly: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/yearly/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     twentyone: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2021/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     twenty: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2020/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     nineteen: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2019/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     eighteen: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2018/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     seventeen: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2017/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     sixteen: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2016/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     fifteen: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2015/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     fourteen: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2014/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     twelve: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2012/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     eleven: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/2011/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     festivals: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/festivals/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     various: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/various/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     srimad: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/srimad-bhagavatam/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     chaitanya: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/chaitanya-caritamrta/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     bhagavad: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/chaitanya-caritamrta/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     kirtans: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "video" }
//         public_id: { regex: "Audio/bhajans-and-kirtans/" }
//       }
//       sort: { order: DESC, fields: public_id }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//   }
// `;
