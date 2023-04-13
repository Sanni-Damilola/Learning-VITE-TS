import React from "react";
import styled from "styled-components";
import { IInput } from "../types";

const InputComponents: React.FC<IInput> = ({ title }) => {
  return (
    <div>
      <Input placeholder={title} />
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
