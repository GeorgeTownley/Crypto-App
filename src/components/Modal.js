// Modal.js

import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`info-button ${isOpen ? "expanded" : ""}`}
        onClick={openModal}
      >
        <span className="info-text">i</span>
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Content of your modal goes here */}
            <p>Modal is open!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
