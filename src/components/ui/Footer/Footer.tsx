import { tw } from "typewind";
import { Link } from "../Text/Link";
import { FooterProps } from "./types";
import HeaderTitleIcon from "@icons/header-title.png";
import Vk from "@icons/vk_2.png";
import Ministr from "@icons/ministr.png";
import MinCult from "@icons/min_cult.png";
import { useModalContext } from "@/hooks/useModalContext/useModalContext";

const currYear = new Date().getFullYear();

export const Footer = ({ }: FooterProps) => {
  const { setShowModal } = useModalContext();

  return (
    <footer className={tw.px_["80px"].mt_['80px'].mb_['84px'].flex.justify_between.items_center}>
      <div className={tw.flex.items_center.gap_['52px']}>
        <img src={Vk} />
        <img src={HeaderTitleIcon} />
        <img src={Ministr} />
        <img src={MinCult} />
      </div>

      <div className={tw.flex.flex_col.gap_y_['12px']}>
        <p><Link className={tw.cursor_pointer} size={"big"} onClick={() => setShowModal(true)}>Написать в техподдержку</Link></p>
        <p className={tw.text_['20px'].leading_['24px'].text_gray_normal3}>© { currYear } Доверенная информационная система VK</p>
      </div>
    </footer>
  );
};
