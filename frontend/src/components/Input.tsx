import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../Global/shareState";
import { iGlobal, iInput } from "../types";

const InputData: React.FC<iInput> = ({
  inputTitle,
  inputTitle1,
  inputTitle2,
  sign,
  request,
  //   password,
  //   userName,
  //   setUserName,
  //   setPassword,
  //   onChange,
}) => {
  const {
    email,
    password,
    userName,
    setEmail,
    setUserName,
    setPassword,
  }: iGlobal | any = useContext(GlobalContext);

  console.log(email);

  return (
    <div>
      <Field>
        <Form>
          <Input
            placeholder={inputTitle}
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          {sign ? (
            <Input
              placeholder={inputTitle1}
              value={password}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
          ) : null}
          {request ? (
            <Input
              placeholder={inputTitle2}
              value={userName}
              onChange={(e: any) => {
                setUserName(e.target.value);
              }}
            />
          ) : null}
        </Form>
      </Field>
    </div>
  );
};

export default InputData;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid gray;
  height: 50px;
  width: 300px;
  margin: 5px 0;
  padding-left: 10px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;
