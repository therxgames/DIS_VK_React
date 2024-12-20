import { tw } from "typewind";
import { forwardRef } from 'react';
import { CheckboxProps } from "./types";
import { cx } from "class-variance-authority";
import './style.css';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ children, errorText, ...props }, ref) => {
  return (
    <label className={cx('custom-checkbox', !!errorText?.length && 'checkbox-error')}>
      <input type="checkbox" ref={ref} {...props} />
      
      { children }

      <div>
        <span className={tw.text_["12px"].leading_["24px"].text_red_normal}>
          { errorText }
        </span>
      </div>
    </label>
  );
});
