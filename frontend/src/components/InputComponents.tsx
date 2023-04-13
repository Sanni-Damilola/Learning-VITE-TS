import React from "react";
import styled from "styled-components";
import { IInput } from "../types";

const InputComponents: React.FC<IInput> = ({ title, sign, req }) => {
  // const [sign, setSign] = React.useState(true);
  // const [req, setReq] = React.useState(false);

  return (
    <div>
      <Input placeholder={title} />
      {sign ? <Input placeholder={title} /> : null}
      {req ? <Input placeholder={title} /> : null}
    </div>
  );
};

export default InputComponents;

const Input = styled.input`
  outline: none;
  border: 1px solid rgb(0, 0, 0, 0.6);
  width: 300px;
  height: 30px;
  margin: 7px;
  padding-left: 10px;
  border-radius: 4px;

  ::placeholder {
    font-size: 16px;
  }
`;
