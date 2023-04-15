import styled from "styled-components";
import Card from "../../components/Card";
import { GlobalContext } from "../../Global/shareState";
import React, { useContext } from "react";
import { register } from "../../utils/API/api";

const Register = () => {
  const { email, password, userName } = useContext(GlobalContext);
  return (
    <div>
      <Main>
        <Card
          buttonTitle="Sign up"
          title="Register"
          inputTitle="Email"
          inputTitle1="Password"
          inputTitle2="User Name"
          sign={true}
          request={true}
          onClick={() => {
            console.log(" I am");
            console.log(" I am: ", email, password, userName);
            register("company/create", { email, password, userName });
          }}
          text="Aleady have an Account"
          route="Sign in Now"
          path="/signin"
        />
      </Main>
    </div>
  );
};

export default Register;

const Main = styled.div`
  display: flex;
  height: calc(100vh - 270px);
  width: 100%;
  justify-content: center;
  align-items: center;
`;
