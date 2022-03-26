import Image from "next/image";

// styles
import styles from "../../styles/page.module.css";

// images 
import ytImg from '../../public/images/yt.jpg';

const Video = () => {
  return (
    <div className="page-container">
      <header>
        <h2 className="page-title">Videos</h2>
      </header>
      <section className="page-section">
       
          <a
            href="https://www.youtube.com/channel/UCRU2uERYaKK3rnO32GOfqlA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mediaYT}
          >
            <Image
              src={ytImg}
              alt="about"
              layout="responsive"
              className="image"
            />
          </a>
      </section>
    </div>
  );
};

export default Video;
