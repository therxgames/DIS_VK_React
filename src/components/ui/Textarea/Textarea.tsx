import { tw } from "typewind";
import { forwardRef, useState } from 'react';
import { TextareaProps } from "./types";
import { cx } from "class-variance-authority";

export const Textarea =  forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, value, title, errorText, maxLength, ...props }, ref) => {
  return (
    <div className={tw.relative}>
      {
        (!!value?.length || !!errorText?.length) &&
        <span className={
          tw.absolute.top_['-24px'].left_3.text_gray_normal.text_["12px"].leading_["24px"]
        }>
          { title }
        </span>
      }

      <textarea 
        placeholder={title} 
        ref={ref} 
        className={
          cx(
            tw.resize_none.w_full.text_['18px'].leading_['24px'].rounded_['20px'].py_4.px_5.border_solid.border.focus(tw.outline_none),
            !!errorText?.length ? tw.border_red_normal.border_2 : tw.border_pink_dark,
            className
          )
        }
        {...props}
      />


      <div className={tw.absolute.bottom_['-23px'].left_3}>
        <span className={tw.text_["12px"].leading_["24px"].text_red_normal}>
          { errorText }
        </span>
      </div>

      <div className={tw.absolute.bottom_['16px'].right_5}>
        <span className={tw.text_["12px"].leading_["24px"].text_red_normal}>
          { value?.length || 0 }/{ maxLength }
        </span>
      </div>
    </div>
  )
})