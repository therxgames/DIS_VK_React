import { Button } from "@components/ui/Button";
import { Header } from "@components/ui/Header";
import BannerBg from "@icons/banner.png";
import { tw } from "typewind";

export const Banner = () => {
  return (
    <div className={`${tw.relative.rounded_b_["80px"]} banner`}>
      <div className={tw.container.mx_auto.pt_["40px"].pb_["80px"]}>
        <Header />

        <div className={tw.mr_["232px"].mt_["182px"].max_w_["808px"].ml_auto}>
          <h1
            className={
              tw.text_white.font_expanded.font_bold.text_["64px"].leading_[
                "80px"
              ]
            }
          >
            Доверенная информационная система VK
          </h1>

          <p
            className={
              tw.text_white.mt_["20px"].font_text.text_["32px"].leading_["38px"]
            }
          >
            для участников программы «Пушкинская карта»
          </p>

          <a href="#request">
            <Button intent="pink" className={tw.mt_["80px"]}>
              Присоединиться
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
