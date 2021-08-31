import React from "react";
import "./Modal.css";

function Modal({ setIsOpen }) {
  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="close-icon" onClick={() => setIsOpen(false)}>
          <i class="fas fa-times"></i>
        </div>
        <div className="title">
          <h1>Modal</h1>
        </div>
        <div className="body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            laborum!
          </p>
        </div>
        <div className="footer">
          <button id="cancel-btn" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
