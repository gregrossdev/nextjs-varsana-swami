// import Galleries from "../../components/Gallery";
// import Accordion from "../../components/Accordion";

// styles
import page from "../../styles/page.module.css";
import media from "../../styles/page-media.module.css";

const Photos = ({ data }) => {
  // const summer = data.summer.nodes;
  // const fall = data.fall.nodes;
  // const rad = data.rad.nodes;
  // const cleaning = data.cleaning.nodes;
  // const varsana = data.varsana.nodes;
  // const devi = data.devi.nodes;

  return (
    <div className={page.container}>
      <header>
        <h2 className={`${page.title} ${media.title} green`}>Photo Albums</h2>
      </header>

      {/* <section className="page-content">
          <div className="inner-mw mobile-pd">
            <Accordion>
              <div label="One Summer on Govardhan">
                <Galleries gallery={summer} />
              </div>
              <div label="Fall on Govardhan">
                <Galleries gallery={fall} />
              </div>
              <div label="Radhastami 2017">
                <Galleries gallery={rad} />
              </div>
              <div label="Cleaning Syama Kunda">
                <Galleries gallery={cleaning} />
              </div>
              <div label="Varsana Maharaj and Jananivas Prabhu">
                <Galleries gallery={varsana} />
              </div>
              <div label="Vrinda-Devi and her birthday cake">
                <Galleries gallery={devi} />
              </div>
            </Accordion>
          </div>
        </section>
       */}
    </div>
  );
};

export default Photos;

// export const query = graphql`
//   {
//     summer: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "image" }
//         public_id: { regex: "Gallery/one-summer-on-govardhan/" }
//       }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     fall: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "image" }
//         public_id: { regex: "Gallery/fall-on-govardhan/" }
//       }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     rad: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "image" }
//         public_id: { regex: "Gallery/radhastami-2017/" }
//       }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     cleaning: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "image" }
//         public_id: { regex: "Gallery/cleaning-syama-kunda/" }
//       }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     varsana: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "image" }
//         public_id: { regex: "Gallery/varsana-maharaj/" }
//       }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//     devi: allCloudinaryMedia(
//       filter: {
//         resource_type: { eq: "image" }
//         public_id: { regex: "Gallery/vrinda-devi/" }
//       }
//     ) {
//       nodes {
//         id
//         public_id
//         secure_url
//       }
//     }
//   }
// `;
