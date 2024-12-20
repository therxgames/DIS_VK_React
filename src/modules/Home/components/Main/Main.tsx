import { tw } from "typewind";
import { Info } from "./Info";
import { Request } from "./Request";
import { useState } from "react";
import { TypeConnect } from "@/types";

export const Main = () => {
  const [typeConnect, setTypeConnect] = useState<TypeConnect>(
    "culture"
  );

  return (
    <div className={tw.px_["80px"]}>
      <Info typeConnect={typeConnect} setTypeConnect={setTypeConnect} />
      <Request typeConnect={typeConnect} setTypeConnect={setTypeConnect} />
    </div>
  );
};
