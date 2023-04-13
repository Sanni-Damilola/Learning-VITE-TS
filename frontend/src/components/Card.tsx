import React from "react";
import styled from "styled-components";
import { ICard } from "../types";
import InputComponents from "./InputComponents";
import ButtonComponents from "./ButtonComponents";

const Card: React.FC<ICard> = ({ title, buttonTitle }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Field>
        <Form>
          <InputComponents title="name" />
          <InputComponents title="email" />
          <InputComponents title="password" />
          <ButtonComponents
            bg="purple"
            color="white"
            buttonTitle={buttonTitle}
          />
        </Form>
      </Field>
    </Container>
  );
};

export default Card;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 500px;
  min-height: 600px;
  border-radius: 10px;
  border-color: silver;
  display: flex;
  border: 1px solid rgb(0, 0, 0, 0.6);
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  text-transform: uppercase;
  margin-top: 40px;
  font-size: 40px;
  font-weight: 500;
`;
const Field = styled.div`
  flex-direction: column;
  display: flex;
`;
