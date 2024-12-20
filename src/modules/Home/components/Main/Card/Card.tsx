import { tw } from "typewind";
import { cva } from "class-variance-authority";
import { CardProps } from "./types";

export const card = cva("card", {
  variants: {
    intent: {
      primary: [
        tw.border_solid.border_2.border_white.rounded_["40px"].p_["40px"],
      ],
    },
    size: {
      medium: [tw.h_["220px"]],
      big: [tw.h_["320px"]],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export const Card = ({ children, counter, icon, intent, size }: CardProps) => {
  return (
    <div className={card({ intent, size, class: tw.relative.overflow_hidden })}>
      <div className={tw.relative.z_20.h_full.flex.flex_col.justify_between}>
        <p
          className={tw.text_white.font_semibold.text_["60px"].leading_["0.8"]}
        >
          {counter}
        </p>

        <p className={tw.text_white.font_medium.text_2xl}>{children}</p>
      </div>

      <div className={tw.absolute.z_10.bottom_0.left_0}>
        <img src={`/images/${icon}.svg`} />
      </div>
    </div>
  );
};
