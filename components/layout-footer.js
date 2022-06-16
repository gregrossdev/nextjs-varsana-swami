import React from "react";
import Image from 'next/image'
import { AiFillFacebook, AiFillMail, AiOutlineInstagram } from "react-icons/ai";
import { FaMapMarkerAlt, FaYoutube, FaSoundcloud } from "react-icons/fa";
import footer from './layout-footer.module.css'

// images
import wave from "../public/static/wave-2.svg"
import dhamImg from '../public/images/dham-logo.png'

const Footer = () => {
  return (
    <footer >
      <Image src={wave} className="wave" alt="wave styling" />
      <div className={footer.wrapper}>
        <div className="inner">
          <section className={footer.info}>
            <div className={footer.col1}>
              <a href="mailto:moontowerbooks@gmail.com" className={footer.icons}>
                <AiFillMail className={footer.icon} />
                <p>Email Us</p>
              </a>
              <div className={footer.icons}>
                <FaMapMarkerAlt className={footer.icon} />
                <div>
                  <p>3759 McCreary`&#39;`s Ridge Rd</p>
                  <p>NBU 31</p>
                  <p>Moundsville, WV 26041</p>
                </div>
              </div>
            </div>
            <div className={footer.col3}>
              <p> Varsana Swami</p>
              <div className={footer.icons}>
                <a
                  href="https://www.facebook.com/varsanaswami"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook className={footer.icon} />
                </a>
                <a
                  href="https://www.facebook.com/varsanaswami"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram className={footer.icon} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCRU2uERYaKK3rnO32GOfqlA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className={footer.icon} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCRU2uERYaKK3rnO32GOfqlA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSoundcloud className={footer.icon} />
                </a>
              </div>
              <p>Dham Seva Inc.</p>
              <div className={footer.icons}>
                <a
                  href="https://www.facebook.com/DhamSevaInc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook className={footer.icon} />
                </a>
              </div>
            </div>
            <div className={footer.col2}>
              <figure className={footer.moontower}>
              <Image 
                src={dhamImg}
                alt="dham seva"
                layout='fill'
             />

              </figure>
            </div>
          </section>
        </div>

        <section className={footer.copyright}>
          <p>&copy; {new Date().getFullYear()} Varsana Swami</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

