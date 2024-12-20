import { tw } from "typewind";
import { cx } from "class-variance-authority";
import { FAQItemProps } from "./types";
import { Button } from "@components/ui/Button";
import Plus from '@icons/plus.svg';
import Minus from '@icons/minus.svg';
import { useState } from "react";

export const FAQItem = ({ question, answer, isLastItem }: FAQItemProps) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={cx(tw.py_["50px"].border_t.border_black.border_opacity_20, isLastItem && tw.border_b)}>
      <div className={tw.flex.justify_between.items_center}>
        <p className={cx(tw.font_medium.text_['40px'].leading_['65px'], active ? tw.black : tw.text_gray_dark2)}>
          { question }
        </p>

        {
          active && 
          <Button intent={"primary"} size={"small"} onClick={() => setActive(false)}>
            <Minus />
          </Button>
        }

        {
          !active && 
          <Button intent={"primary_transparent"} size={"small"} onClick={() => setActive(true)}>
            <Plus />
          </Button>
        }
      </div>

      {
        active && 
        <p className={tw.mt_['40px'].text_2xl.text_gray_dark2}>
          { answer }
        </p>
      }
    </div>
  )
}