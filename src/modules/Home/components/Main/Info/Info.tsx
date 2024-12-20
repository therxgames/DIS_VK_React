import { tw } from "typewind";
import { Fragment, useState } from "react";
import { Button } from "@components/ui/Button";
import Alert from "@icons/alert.svg";
import { Card } from "../Card";
import { CardsRow } from "../CardsRow";
import { InfoProps } from "./types";
import { TypeConnect } from "@/types";
import { Link } from "@/components/ui/Text/Link";

export const Info = ({ typeConnect, setTypeConnect }: InfoProps) => {
  const setButtonIndent = (type: TypeConnect) => {
    return typeConnect === type ? "white" : "white_transparent";
  };

  return (
    <div className={tw.relative.bg_blue_light.p_["80px"].rounded_t_["80px"]}>
      <div className={tw.flex.justify_between}>
        <p
          className={tw.text_white.font_semibold.text_["52px"].leading_["60px"]}
        >
          Как присоединиться к ДИС VK
        </p>

        <div className={tw.flex.gap_5}>
          <Button
            intent={setButtonIndent("culture")}
            onClick={() => setTypeConnect("culture")}
          >
            Организация культуры
          </Button>
          <Button
            intent={setButtonIndent("ticket")}
            onClick={() => setTypeConnect("ticket")}
          >
            Билетная система
          </Button>
        </div>
      </div>

      <div className={tw.mt_["60px"]}>
        {typeConnect === "culture" && (
          <div>
            <CardsRow columns="3">
              <Card counter="01" icon="ears">
                Убедитесь, что ваша билетная
                <br /> система интегрирована с ДИС VK{" "}
              </Card>
              <Card counter="02" icon="cube">
                Ознакомьтесь с офертой
              </Card>
              <Card counter="03" icon="rect">
                Заполните <Link href="#request" intent="white">заявку</Link> на бланке организации
              </Card>
            </CardsRow>

            <CardsRow columns="2" className={tw.mt_["40px"]}>
              <Card counter="04" icon="circle">
                Заполните форму и прикрепите заполненную заявку
              </Card>
              <Card counter="05" icon="flower">
                Получите на электронную почту подтверждение о при-соединении и
                информацию для заключения договора
              </Card>
            </CardsRow>

            <div
              className={
                tw.flex.gap_x_5.mt_["80px"].p_["40px"].bg_gray_light.rounded_[
                  "40px"
                ]
              }
            >
              <div className={tw.px_["8px"].py_["10px"]}>
                <Alert />
              </div>

              <p className={tw.text_2xl.text_blue_dark}>
                Если ваша билетная система не интегрирована с ДИС VK, необходимо
                поставить задачу на интеграцию или сменить билетную систему, на
                любую другую у которой есть интеграция. В соответствии с
                Постановление Правительства РФ от 8 сентября 2021 г. N 1521 иные
                условия работы с Программой “Пушкинская карта” недопустимы.
              </p>
            </div>
          </div>
        )}

        {typeConnect === "ticket" && (
          <Fragment>
            <CardsRow columns="4">
              <Card counter="01" icon="ears" size="big">
                Ознакомьтесь с офертой
              </Card>
              <Card counter="02" icon="cube" size="big">
                Заполните <Link href="#request" intent="white">заявку</Link> на бланке организации
              </Card>
              <Card counter="03" icon="rect" size="big">
                Заполните форму и прикрепите заполненную заявку
              </Card>
              <Card counter="04" icon="circle" size="big">
                Получите на электронную почту инструкцию и документацию для
                подключения к API ДИС
              </Card>
            </CardsRow>
          </Fragment>
        )}
      </div>
    </div>
  );
};
