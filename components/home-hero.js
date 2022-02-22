import Image from "next/image";
// styles
import hero from "./home-hero.module.css";

// images
import heroImg from "../public/images/hero.jpg";

const Hero = () => {
  return (
    <figure className={hero.banner}>
      <Image src={heroImg} alt="pond" className={hero.img} placeholder="blur" layout="fill" objectFit='cover' />
    </figure>
  );
};

export default Hero;
