import Head from "next/head";
import Image from "next/image";
import catImg from "../public/categories/govardhan-katha.jpg";
import wave3 from "../public/static/wave3.svg";

import { drops } from '../data/drops'

import writings from "../styles/page.module.css";

export default function Drops() {
  const title = "Drops of Wisdom";
  const cover = "";

  return (
    <div className={writings.writings}>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta property="description" content={title} />
        <meta property="og:description" content={title} />
        <meta name="twitter:description" content={title} />
        <meta property="og:image" content={cover} />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image" content={cover} />
        <meta name="twitter:image" content={cover} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="" />
      </Head>

      <header>
        <figure className={writings.banner}>
          <Image src={catImg} alt={"title"} layout="fill" />
        </figure>
        <div
          className={writings.wrapper}
          style={{ backgroundColor: `#b7cb5c` }}
        >
          <div className={writings.category} style={{ paddingBottom: `3rem`, paddingTop: `2rem`}}>
            <h1 className={writings.title}>Drops of Wisdom</h1>
            <ul className={writings.list}></ul>
          </div>
        </div>
        <figure className={writings.wave3}>
          <Image src={wave3} layout="fill" objectFit="cover" />
        </figure>
      </header>
      <section className="drops">
        {drops.map(drop => {
            return (
              <figure>
                <img src={drop} className="drop"/> 
              </figure>
            )
          })}
      </section>
    </div>
  );
}
