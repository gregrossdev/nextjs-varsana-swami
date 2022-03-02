import Image from "next/image";

// styles
import page from "../../styles/page.module.css";
import media from "../../styles/page-media.module.css";

// images 
// import ytImg from '../images/yt.jpg'

const Video = () => {
  return (
    <div className={page.container}>
      <header>
        <h2 className={page.title}>Videos</h2>
      </header>
      {/* <section className={`inner ${page.content}`}>
       
          <a
            href="https://www.youtube.com/channel/UCRU2uERYaKK3rnO32GOfqlA"
            target="_blank"
            rel="noopener noreferrer"
            className={media.yt}
          >
            <Image
              src={ytImg}
              alt="about"
              layout="responsive"
              className="image"
            />
          </a>
      </section> */}
    </div>
  );
};

export default Video;
