import React from "react";

import Image from "next/image";
import founder from './home-founder.module.css'


// images
import founderImg from "../public/images/founder.jpg";


export default function Founder() {
  return (
    <section className={founder.section}>
      <div className="inner">
        <div className={founder.info}>
          <figure className={`${founder.founder}  imgRadius`}>
            <Image
              src={founderImg}
              alt="founder"
              layout="fill"
            />
          </figure>
          <article className={founder.article}>
            <h3>His Divine Grace</h3>
            <h2>A.C. Bhaktivedanta Swami Prabhupada</h2>
            <h4>
              Founder Acharya of the International Society for Krishna
              Consciousness
            </h4>
            <div className={founder.links}>
              <a
                href="https://prabhupada.krishna.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://prabhupada.krishna.com/
              </a>
              <a
                href="https://prabhupadavani.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://prabhupadavani.org/
              </a>
              <a
                href="https://en.wikipedia.org/wiki/A._C._Bhaktivedanta_Swami_Prabhupada"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://en.wikipedia.org/wiki/A._C._Bhaktivedanta_Swami_Prabhupada
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};


