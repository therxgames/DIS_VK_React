import { tw } from "typewind";
import { TitleProps } from "./types";
import { cx } from "class-variance-authority";

export const Title = ({ children, className }: TitleProps) => {
  return (
    <p className={cx(tw.font_semibold.text_["52px"].leading_["60px"], className)}>
      { children }
    </p>
  );
};
