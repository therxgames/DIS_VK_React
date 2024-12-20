import { tw } from "typewind";
import { ResultContentProps, ResultProps } from "./types"
import MarkBox from '@icons/mark_box.png';
import CloseBox from '@icons/close_box.png';
import { Title } from "@components/ui/Text/Title";
import { Button } from "@components/ui/Button";

const ResultContent = ({ title, subtitle, imgSrc, children }: ResultContentProps) => {
  return (
    <div>
      <img src={imgSrc} />

      <Title className={tw.mt_['80px']}>
        { title }
      </Title>

      <p className={tw.mt_['40px'].text_['32px'].leading_['40px'].opacity_70}>
        { subtitle }
      </p>

      { children }
    </div>
  );
}

const ResultSuccess = () => {
  return (
    <ResultContent
      title="Ваш вопрос отправлен!"
      subtitle="Ответ поступит на вашу электронную почту"
      imgSrc={MarkBox}
    />
  )
}

const ResultError = () => {
  return (
    <ResultContent
      title="Ваш вопрос не отправлен!"
      subtitle="Произошла ошибка, попробуйте продублировать вопрос"
      imgSrc={CloseBox}
    >
      <Button intent="primary">Задать вопрос</Button>
    </ResultContent>
  )
}

export const Result = ({ success }: ResultProps) => (
  success ? <ResultSuccess /> : <ResultError/>
);