import { tw } from "typewind";
import { ChangeEvent } from "react";
import { forwardRef, useState } from 'react';
import { cx } from "class-variance-authority";
import { FileProps } from "./types";
import { formatBytes } from "@/utils";
import FileIcon from '@icons/file.svg';
import Close from '@icons/close.svg';
import Clip from '@icons/clip.svg';

export const File = forwardRef<HTMLInputElement, FileProps>(({ onChange, errorText, className = '', value, ...props }, ref) => {
  const [files, setFiles] = useState<File[] | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if ( files === null ) {
      setFiles([])
    }

    if (selectedFiles && selectedFiles.length > 0) {
      setFiles((prev) => {
        return [selectedFiles[0], ...prev]
      });
    }
  };

  const handleFileDelete = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
  }

  return (
    <div className={cx(tw.relative.w_full.flex.flex_col.p_5.bg_white.rounded_['20px'], (files && !files?.length) ? tw.border_red_normal.border_2 : tw.border_none, className)}>
      <div className={tw.flex.justify_between}>
        <p className={tw.text_['18px'].leading_['24px'].text_gray_normal.max_w_['540px']}>
          Скачайте <a href="#" className={tw.text_blue_light.border_b.border_blue_normal2.border_opacity_40}>заявку на присоединение</a> 
          ,заполните ее на бланке организации и добавьте прикрепленным файлом
        </p>

        <div>
          <label htmlFor="files" className={tw.bg_gray_normal2.flex.items_center.gap_['15px'].rounded_['20px'].h_['54px'].pl_['18px'].pr_['20px']}>
            <Clip />
            
            <p className={tw.text_['18px'].leading_['24px'].text_white.text_opacity_80}>Прикрепить файлы</p>
          </label>

          <input
            className={tw.hidden}
            id="files"
            type="file"
            disabled={files?.length === 5}
            ref={ref}
            {...props}
            onChange={(e) => handleFileChange(e)}
          />
        </div>
      </div>

      <p className={tw.text_['12px'].leading_['24px'].text_gray_light2.mt_5}>Можно прикрепить не более 5-ти файлов, форматов: doc; docx; txt; jpg; png; pdf, не более 50 Мб</p>

      {
        files && files.length > 0 && 
          <div className={tw.flex.flex_col.gap_y_5.mt_5}>
            {
              files.map((item, index) => {
                return (
                  <div key={item.lastModified}>
                    {
                      index !== 0 && <div className={tw.w_full.h_px.bg_gray_light3.mb_5}></div>
                    }

                    <div className={tw.flex.items_center.justify_between}>
                      <div className={tw.flex.items_center}>
                        <div className={tw.mr_['18px']}>
                          <FileIcon />
                        </div>
                        
                        <div className={tw.flex.flex_col.justify_center}>
                          <p className={tw.text_['24px'].leading_['24px'].font_medium}>{ item.name.split('.')[0] }</p>
                          
                          <div className={tw.flex.items_center.gap_2.text_['14px'].leading_['24px'].text_gray_normal}>
                            <span>{ item.name.split('.').slice(-1) }</span> 
                            <div className={tw.w_px.h_['10px'].bg_gray_normal}></div>
                            <span>{ formatBytes(item.size) }</span>
                          </div>
                        </div>
                      </div>

                      <div onClick={() => handleFileDelete(index)} className={tw.cursor_pointer}>
                        <Close />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
      }

      {
        files && !files?.length &&
          <span className={tw.text_["12px"].leading_none.text_red_normal}>
            Необходима заполненная заявка на присоединение
          </span>
      }
    </div>
  )
})