import { tw } from "typewind";
import SuccessBox from '@icons/success-box.png';
import { InfoItem } from "./InfoItem";
import { Link } from "@components/ui/Text/Link";
import { Title } from "@components/ui/Text/Title";


export const Success = () => {
  return (
    <>
      <div>
          <div className={tw.absolute.top_0.left_['46px']}>
            <img src={SuccessBox} />
          </div>

          <div className={tw.max_w_["428px"].mt_['102px']}>
            <Title>
              Ваша заявка принята              
            </Title>
          </div>
        </div>

        <div>
          <div className={tw.flex.flex_col.gap_y_['20px']}>
            <InfoItem number={1}>
              В течение 3 рабочих дней вы получите подтверждение о присоединении к оферте на электронную почту
            </InfoItem>

            <InfoItem number={2}>
              В течение 5 рабочих дней с вами свяжутся наши специалисты для заключения прямого договора 
            </InfoItem>

            <InfoItem number={3}>
              Заполните <Link>карточку организации</Link> и направьте на почту <Link href="mailto:2222@vk.ru">2222@vk.ru</Link>, это ускорит процесс заключения договора
            </InfoItem>

            <InfoItem number={4}>
              Поздравляем!<br/>
              Договор заключен, вы готовы к работе! 
            </InfoItem>
          </div>

          <div className={tw.mt_['40px']}>
            <p className={tw.text_['20px'].leading_['24px'].text_gray_normal}>Остались вопросы? звоните 2222222 или пишите <Link href="mailto:2222@vk.ru">222@vk.ru </Link></p>
          </div>
      </div>
    </> 
  )    
}