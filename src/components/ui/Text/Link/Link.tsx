import { tw } from "typewind";
import { LinkProps } from "./types";
import { cva } from "class-variance-authority";

export const link = cva("link", {
  variants: {
    intent: {
        blue: [
          tw.text_blue_light.border_b.border_blue_normal2.border_opacity_40,
        ],
        white: [
          tw.text_white.border_b,
        ],
    },
    size: {
      sm: [tw.text_['12px'].leading_none],
      medium: [tw.leading_normal],
      big: [tw.leading_normal.text_2xl],
    },
  },
  defaultVariants: {
    intent: "blue",
    size: "medium",
  },
});

export const Link = ({ className, intent, size, children, ...props }: LinkProps) => {
  return (
    <a className={link({ intent, size, className })} { ...props }>
      { children }
    </a>
  );
};
