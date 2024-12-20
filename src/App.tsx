import { useState } from 'react';
import Home from "@modules/Home/Home";
import "./index.css";
import { ModalContext } from './hooks/useModalContext/useModalContext';

export default function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value= {{ showModal, setShowModal }}>
      <Home />
    </ModalContext.Provider>
  );
}
