import React from "react";
import styled from "styled-components";
import { iButton, iCard } from "../types";
import Button from "./Button";
import InputData from "./Input";
import { Link } from "react-router-dom";
import TestField from "./Static/TestField";

const Card: React.FC<iCard> = ({
  title,
  buttonTitle,
  onClick,
  inputTitle,
  inputTitle1,
  inputTitle2,
  sign,
  request,
  route,
  text,
  path,
  route1,
  text1,
  path1,
  call,

  setEmail,
  setPassword,
  setUserName,

  onChange,
  email,
  userName,
  password,

  textTitle,
  message,
  remake,
  reg,
  tex,
}) => {
  return (
    <div>
      <Main>
        {tex ? (
          <TestField textTitle={textTitle} message={message} remake={remake} />
        ) : null}

        <div>
          {reg ? (
            <Field>
              <Text>{title}</Text>
              <InputData
                inputTitle={inputTitle}
                inputTitle1={inputTitle1}
                inputTitle2={inputTitle2}
                sign={sign}
                request={request}
                email={email}
                userName={userName}
                password={password}
                onChange={onChange}
                setEmail={setEmail}
                setPassword={setPassword}
                setUserName={setUserName}
              />
              <Button
                buttonTitle={buttonTitle}
                bg="#000269"
                c="white"
                onClick={onClick}
              />
              <Content>
                {text}, <Span to={`${path}`}>{route}</Span>
              </Content>
              {call ? (
                <Content>
                  {text1}, <Span to={`${path1}`}>{route1}</Span>
                </Content>
              ) : null}
            </Field>
          ) : null}
        </div>
      </Main>
    </div>
  );
};

export default Card;

const Span = styled(Link)`
  margin-left: 5px;
  font-weight: bolder;
  transition: all 360ms;
  text-decoration: none;
  :hover {
    cursor: pointer;
    transform: scale(1.007);
  }
`;

const Content = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid gray;
  height: 50px;
  width: 300px;

  padding-left: 10px;
`;

const Form = styled.form`
  width: 100%;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  margin-top: 40px;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 40px;
`;

const Main = styled.div`
  width: 400px;
  min-height: 400px;
  border-radius: 10px;
  border: 1px solid gray;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
