import { ButtonProps } from "./types";
import { cva } from "class-variance-authority";
import { tw } from "typewind";

export const button = cva("button", {
  variants: {
    intent: {
      primary: [
        tw.bg_blue_light.font_medium.text_white,
      ],
      primary_transparent: [
        tw.font_medium.text_black.border.border_solid.border_blue_light,
      ],
      secondary: [
        tw.border_2.border_solid.border_gray_dark.font_medium,
      ],
      white: [
        tw.bg_white.border_transparent.font_medium.text_blue_light,
      ],
      white_transparent: [
        tw.border_transparent.font_medium.text_white.text_opacity_60.bg_white.bg_opacity_30,
      ],
      pink: [
        tw.border_transparent.font_medium.text_white.bg_pink_normal,
      ],
    },
    size: {
      small: [tw.rounded_["20px"].px_["35px"].h_["48px"]],
      medium: [tw.px_["28px"].h_["60px"].rounded_["20px"].text_2xl],
    },
  },
  defaultVariants: {
    intent: "secondary",
    size: "medium",
  },
});

export const Button = ({ className, intent, size, onClick, ...props }: ButtonProps) => {
  return <button onClick={onClick} className={button({ intent, size, className })} {...props} />;
};
