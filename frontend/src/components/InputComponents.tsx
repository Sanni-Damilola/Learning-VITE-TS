import React from "react";
import styled from "styled-components";
import { IInput } from "../types";

const InputComponents: React.FC<IInput> = ({
  title,
  sign,
  req,
  title1,
  title2,
}) => {
  return (
    <Container>
      <Input placeholder={title} />
      {sign ? <Input placeholder={title1} /> : null}
      {req ? <Input placeholder={title2} /> : null}
    </Container>
  );
};

export default InputComponents;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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
