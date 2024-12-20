import { Button } from "@components/ui/Button";
import FileCheck from "@icons/file-check.svg";
import { tw } from "typewind";

export const Reviews = () => {
  return (
    <div className={tw.relative.px_["80px"].pt_["120px"].pb_["140px"]}>
      <p className={tw.text_["58px"].leading_["73px"].font_semibold}>
        Все отзывы и оценки
        <br />
        на культурные события столицы
        <br />в одном месте
      </p>

      <div className={tw.mt_["26px"].ml_auto.max_w_["1096px"]}>
        <p className={tw.text_["32px"].leading_["48px"]}>
          В соответствии с постановлением Правительства Российской Федерации в
          целях установления порядка предоставления сведений из реестра сведений
          о проданных билетах необходимо присоединиться к доверенной
          информационной системе для возможности участия в Программе «Пушкинская
          карта»
        </p>

        <div className={tw.flex.gap_5.mt_["60px"]}>
          <Button className={tw.flex.items_center.gap_["10px"]}>
            <FileCheck />
            <p>ПП РФ №1521</p>
          </Button>

          <Button className={tw.flex.items_center.gap_["10px"]}>
            <FileCheck />
            <p>Оферта</p>
          </Button>
        </div>
      </div>

      <div className={tw.absolute.bottom_["-260px"].left_0}>
        <picture>
          <img src="/images/arrows.svg" />
        </picture>
      </div>
    </div>
  );
};
