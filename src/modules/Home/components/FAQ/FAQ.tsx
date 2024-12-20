import { tw } from "typewind";
import { Title } from "@components/ui/Text/Title";
import { FAQItem } from "./FAQItem";
import { questions } from './questions';

export const FAQ = () => {
  return (
    <div className={tw.px_["80px"].mt_['160px'].mb_['60px'].max_w_['1160px']}>
      <Title>
        Вопросы и ответы
      </Title>

      <div className={tw.mt_['40px']}>
        {
          questions.map(item => (
            <FAQItem 
              key={item.id}
              question={item.question} 
              answer={item.answer} 
              isLastItem={item.id === questions.length} />
          ))
        }
      </div>
    </div>
  )
}