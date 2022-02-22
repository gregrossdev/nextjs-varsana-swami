import Image from "next/image";

// styles
import welcome from "./home-welcome.module.css";

// images
import wave1 from "../public/static/wave-1.svg";
import signature from "../public/static/signature.svg";
import welcomeImg from "../public/images/welcome.jpg";

export default function Welcome() {
  return (
    <header className={welcome.header}>
      <Image src={wave1} alt="wave" className="wave wave-up" />

      <div className={welcome.wrap}>
        <div className={`inner`}>
          <section className={welcome.content}>
            <article className={welcome.article}>
              <h3>Welcome</h3>
              <p>
                With her every breath, our Mother Earth beckons us “listen,
                awaken, experience, and behold the magnificence of our Lord’s
                creation”.
              </p>
              <p>
                We hope and pray that by visiting this site you feel more
                personally connected to the Earth, our Mother, more deeply
                rooted in Sri Dhama, our Home, and more committed to Sri Nama,
                our Shelter.
              </p>
              <p>
                May you find inspiration to journey into deeper realms of the
                heart, as revealed in devotee relationships, to attain Goloka
                Vrindavan, our final cherished destination.
              </p>
              <figure className={welcome.signature}>
                <Image
                  src={signature}
                  alt="signature"
                  width={200}
                  height={70}
                />
              </figure>
            </article>

            <figure className={`${welcome.portrait} imgRadius`}>
              <Image
                alt="portrait"
                src={welcomeImg}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </figure>
          </section>
        </div>
      </div>
    </header>
  );
};
