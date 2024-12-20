import { createContext, useContext } from "react";
import { ModalContextTypes } from "./types";

export const ModalContext = createContext<ModalContextTypes>({
  showModal: false,
  setShowModal: () => {},
})

export const useModalContext = () => useContext(ModalContext);