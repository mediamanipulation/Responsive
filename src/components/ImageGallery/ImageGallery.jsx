import React, { useState, Suspense, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
const ImageModal = React.lazy(() => import('./ImageModal'));

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const lastFocusedElement = useRef(null);

  const openImage = (image) => {
    lastFocusedElement.current = document.activeElement;
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
    if (lastFocusedElement.current) {
      lastFocusedElement.current.focus();
    }
  };

  return (
    <div className="gallery">
      {images.map((image, idx) => (
        <GalleryItem key={idx} image={image} onSelect={() => openImage(image)} />
      ))}

      <Suspense fallback={<div>Loading...</div>}>
        <CSSTransition
          in={!!selectedImage}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <ImageModal image={selectedImage} onClose={closeModal} />
        </CSSTransition>
      </Suspense>

      <style jsx>{`
        .gallery {
          display: grid;
          grid-gap: 16px;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
        .gallery-item img {
          width: 100%;
          height: auto;
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .gallery {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
        }
        .fade-enter {
          opacity: 0.01;
        }
        .fade-enter-active {
          opacity: 1;
          transition: opacity 300ms ease-in;
        }
        .fade-exit {
          opacity: 1;
        }
        .fade-exit-active {
          opacity: 0.01;
          transition: opacity 300ms ease-in;
        }
      `}</style>
    </div>
  );
}

function GalleryItem({ image, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="gallery-item"
      onClick={onSelect}
      tabIndex="0"
      role="button"
      aria-label="Open image in a modal"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === 'Space') {
          onSelect();
        }
      }}
    >
      {!imgError ? (
        <img src={image.thumbnail} alt="Gallery thumbnail" loading="lazy" onError={() => setImgError(true)} />
      ) : (
        <span>Error loading image</span>
      )}
    </div>
  );
}
