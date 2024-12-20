import { tw } from "typewind";
import { InfoItemProps } from "./types"

export const InfoItem = ({ children, number }: InfoItemProps) => {
  return (
    <div className={tw.flex.items_center.gap_['30px'].mr_['200px']}>
      <div className={tw.flex.items_center.justify_center.min_w_['100px'].h_['100px'].border_2.border_solid.border_blue_light.rounded_['100px']}>
        <span className={tw.font_semibold.text_['40px'].leading_['60px'].text_blue_light}>{ number }</span>
      </div>

      <p className={tw.font_medium.text_['28px'].leading_['36px']}>{ children }</p>
    </div>
  )
}