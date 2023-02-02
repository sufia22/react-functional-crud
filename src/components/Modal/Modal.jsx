import React from "react";
import "./Modal.css";

const Modal = ({ children, title, hide }) => {
  return (
    <>
      <div className="modal-blur">
        <div className="modal-wraper">
          <div className="modal-main">
            <div className="modal-head">
              <span className="modal-title">{title}</span>
              <button onClick={() => hide(false)}>
                <i class="bx bx-x"></i>
              </button>
            </div>
            <div className="modal-body-part">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
