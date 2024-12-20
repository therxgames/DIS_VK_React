import { tw } from "typewind";
import { AskQuestion } from "@modules/Home/components/AskQuestion/AskQuestion";
import VkIcon from "@icons/vk.png";
import HeaderTitleIcon from "@icons/header-title.png";
import { useModalContext } from "@/hooks/useModalContext/useModalContext";

export const Header = () => {
  const { showModal, setShowModal } = useModalContext();

  return (
    <header className={tw.flex.justify_between.items_center}>
      <div className={tw.flex.items_center}>
        <div className={tw.mr_["40px"]}>
          <img src={VkIcon} />
        </div>

        <div>
          <img src={HeaderTitleIcon} />
        </div>
      </div>

      <div className="">
        <p
          className={
            tw.font_semibold.text_["28px"].leading_["32px"].border_solid
              .border_b.border_white.border_opacity_40
          }
        >
          <a href="#" className={tw.text_white} onClick={() => setShowModal(true)}>
            Задать вопрос
          </a>
        </p>
      </div>
  
      {
        showModal && <AskQuestion active={true} setActive={setShowModal} />
      }
    </header>
  );
};
