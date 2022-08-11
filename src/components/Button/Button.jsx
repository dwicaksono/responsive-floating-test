import { memo } from "react";
import { Btn } from "./_ButtonStyle";

const Button = ({ mTop, mRight, buttonClick, children }) => {
  return (
    <Btn mTop={mTop} mRight={mRight} onClick={buttonClick}>
      {children}
    </Btn>
  );
};

export default memo(Button);
