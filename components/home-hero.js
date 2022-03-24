import Image from 'next/image';
// images
import heroImg from "../public/images/hero.jpg";

const Hero = () => {
  return (
    <figure className="banner">
      <Image src={heroImg} alt="pond"  placeholder="blur" layout="fill" objectFit='cover' />
    </figure>
  );
};

export default Hero;
