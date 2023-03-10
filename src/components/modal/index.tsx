import { useState } from "react";
import Button from "../button";
import { ModalContent } from "./modal";
import "./styles.css";

export type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  const [isModalOpen, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!isModalOpen);
  }
  return (
    <main>
        {isModalOpen && <ModalContent onRequestClose={toggleModal}/>}
        <h1>React Modal</h1>
        <Button label="Show the Modal" onClick={toggleModal}/>
    </main>
  );
};

export default Modal;
