import React, { useState } from "react";
import "./PhotoGallery.css";
import Carousel, { Modal, ModalGateway } from "react-images";

const PhotoGallery = ({ photos }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleLightbox = (index) => {
    setLightboxIsOpen(!lightboxIsOpen);
    setSelectedIndex(index);
  };

  const images = photos.map((photo) => ({ src: photo.thumbnail }));

  return (
    <div className="gallery-container">
      <div className="gallery-row">
        {photos.map((photo, index) => (
          <div
            className="gallery-col"
            key={index}
            onClick={() => toggleLightbox(index)}
          >
            <img
              src={photo.fullsize}
              alt={`Thumbnail ${index}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={toggleLightbox}>
            <Carousel
              currentIndex={selectedIndex}
              views={images.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;
