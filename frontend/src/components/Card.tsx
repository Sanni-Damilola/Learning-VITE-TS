import React from "react";
import styled from "styled-components";
import { ICard } from "../types";
import InputComponents from "./InputComponents";
import ButtonComponents from "./ButtonComponents";
import { Link } from "react-router-dom";

const Card: React.FC<ICard> = ({
  title,
  buttonTitle,
  onClick,
  inputTitle1,
  inputTitle,
  inputTitle2,
  req,
  sign,
  route,
  text,
  path,
}) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Form>
        <InputComponents
          title1={inputTitle1}
          title2={inputTitle2}
          sign={sign}
          req={req}
          title={inputTitle}
        />
        <ButtonComponents
          onClick={onClick}
          bg="purple"
          color="white"
          buttonTitle={buttonTitle}
        />

        <Content>
          {text},<Span to={`${path}`}>Create One</Span>
        </Content>
      </Form>
    </Container>
  );
};

export default Card;

const Content = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Span = styled(Link)`
  text-decoration: none;
  margin-left: 5px;
  font-weight: bolder;
  transition: all 360ms;

  cursor: pointer;
  :hover {
    transform: scale(1.007);
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 500px;
  min-height: 400px;
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
