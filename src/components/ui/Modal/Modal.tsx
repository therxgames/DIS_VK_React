import { tw } from "typewind";
import { ModalProps } from "./types";

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className={tw.h_screen.w_screen.bg_black.bg_opacity_40.fixed.z_50.top_0.left_0.flex.items_center.justify_center}>
      { children }
    </div>
  );
}