import React, { ReactNode } from "react";
import ModalCloseIcon from "../../atoms/vectors/ModalCloseIcon";
import "./modalStyles.scss";
import clsx from "clsx";

interface ModalProps {
  children: ReactNode;
  openModal: boolean;
  closeModal: (val: boolean) => void;
}
const Modal = ({ children, openModal, closeModal }: ModalProps) => {
  return (
    <div className={clsx(openModal ? "modal-overlay" : "hide-modal")}>
      <div className="modal-inner-card">
        <div className="modal-icon-cont">
          <ModalCloseIcon onClick={() => closeModal(false)} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
