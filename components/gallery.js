import React from "react";
import GalleryPhoto from "./GalleryPhoto";

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Gallery = ({ gallery }) => {
  return (
    <Wrapper>
      <div className="gallery">
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="image-grid">
              {gallery.map((photo, index) => {
                return <GalleryPhoto key={photo.id} index={index} {...photo} />;
              })}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </Wrapper>
  );
};

export default Gallery;

const Wrapper = styled.div`
  
  .gallery:first-child {
    margin-top: 0;
  }

  .gallery {
    margin-top: 3rem;
  }

  .image-grid {
    display: grid;
    grid-gap: 0.5rem;
    grid-auto-rows: minmax(50px, auto);
  }
  .image-grid .image-item:nth-child(5n) {
    grid-column-end: span 2;
  }
  .image-grid img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 900px) {
    .gallery {
      margin-top: 8rem;
    }

    .gallery .folder-title {
      margin-bottom: 1em;
    }

    .image-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;
