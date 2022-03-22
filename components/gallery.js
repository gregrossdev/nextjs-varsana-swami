import React from "react";
import Image from "next/image";
import styles from "./gallery.module.css";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

export default function Gallery({ gallery }) {
  return (
    <div className={styles.gallery}>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className={styles.grid}>
            {gallery.map((photo, index) => {
              const {Key} = photo 
              return (
                <div className={styles.item} key={Key} index={index}>
                  <Image
                    src={`https://varsana-photos.nyc3.digitaloceanspaces.com/${Key}`}
                    alt={Key}
                    key={Key}
                    layout="fill"
                    objectFit="cover"
                    className={styles.img}
                  />
                </div>
              );
            })}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
}
