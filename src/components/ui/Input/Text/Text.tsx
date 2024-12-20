import { tw } from "typewind";
import { forwardRef } from 'react';
import { cx } from "class-variance-authority";
import { TextProps } from "./types";

export const Text = forwardRef<HTMLInputElement, TextProps>(({ title, errorText, className = '', value, children, ...props }, ref) => {
  return (
    <div className={cx(tw.relative.w_full.flex.flex_col, className)}>
      {
        (!!value?.length || !!errorText?.length) &&
        <span className={
          tw.absolute.top_['-24px'].left_3.text_gray_normal.text_["12px"].leading_["24px"]
        }>
          { title }
        </span>
      }

      <input
        type="text"
        placeholder={title}
        ref={ref}
        className={
          cx(
            tw.w_full.text_["18px"].leading_["24px"].border_solid.border.px_["20px"].h_['52px'].rounded_["20px"].focus(tw.outline_none), 

            !!errorText?.length ? tw.border_red_normal.border_2 : tw.border_pink_dark
          )
        }
        {...props}
      />

      { children }

      <div className={tw.absolute.bottom_['-23px'].left_3}>
        <span className={tw.text_["12px"].leading_["24px"].text_red_normal}>
          { errorText }
        </span>
      </div>
    </div>
  )
})