import { tw } from "typewind";
import { Title } from "@components/ui/Text/Title";
import { Form } from "./Form";
import Close from '@icons/close.svg';
import { Modal } from "@components/ui/Modal";
import { AskQuestionProps } from "./types";
import { useState } from "react";
import { Result } from "./Result";

export const AskQuestion = ({ active, setActive }: AskQuestionProps) => {
  const [isFormSend, setIsFormSend] = useState<boolean>(false);

  return (
    <Modal>
      <div className={tw.relative.p_['80px'].bg_gray_light.rounded_['80px'].w_['728px'].h_['845px']}>
        {
          !isFormSend 
          ?
          <>
            <Title>Задать вопрос</Title>
            <Form setModalActve={setActive} setIsFormSend={setIsFormSend} />
          </>
          :
          <Result success={true} />
        }

        <div className={tw.absolute.top_['50px'].right_['50px'].cursor_pointer} onClick={() => setActive(false)}>
          <Close />
        </div>
      </div>
    </Modal>
  );
}