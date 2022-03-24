import React from 'react';
import Image from "next/image";
import styles from "./gallery.module.css";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

export default function Gallery({ gallery }) {
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <div className={styles.item} key={gallery}>
          <Image
            src={`https://varsana-photos.nyc3.digitaloceanspaces.com/${gallery}`}
            alt={gallery}
            key={gallery}
            layout="fill"
            objectFit="cover"
            className={styles.img}
          />
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}
