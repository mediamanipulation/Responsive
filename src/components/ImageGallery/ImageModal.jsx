import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function ImageModal({ image, onClose, in: inProp }) {
  return (
    <CSSTransition in={inProp} timeout={300} classNames="fade">
      <div className="modal" onClick={onClose}>
        <img src={image.large} alt="" />

        <style jsx>{`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .modal img {
            max-width: 90%;
            max-height: 90%;
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
    </CSSTransition>
  );
}
