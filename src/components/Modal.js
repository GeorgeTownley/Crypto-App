import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`info-button ${isOpen ? "expanded" : ""}`}
        onClick={toggleModal}
      >
        {isOpen ? "" : "i"} {/* Render 'i' only when not expanded */}
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content">
            <p>Modal is open!</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
