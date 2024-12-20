import { tw } from "typewind";
import { Form } from "./Form";
import { Success } from "./Success";
import { useState } from "react";
import { RequestProps } from "./types";

export const Request = ({ typeConnect, setTypeConnect }: RequestProps) => {
  const [succesForm, setSuccessForm] = useState<boolean>(false);

  return (
    <a id="request">
      <div className={tw.relative.bg_gray_light.p_["80px"].rounded_b_["80px"].flex.gap_['40px']}>
        <Form typeConnect={typeConnect} setSuccessForm={setSuccessForm} setTypeConnect={setTypeConnect} />
        
        {/* <Success /> */}
      </div>
    </a>
  );
};
