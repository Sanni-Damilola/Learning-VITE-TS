import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const SignIn = () => {
  return (
    <div>
      <Main>
        <Card
          buttonTitle="Sign in"
          title="Sign in"
          inputTitle="Email"
          inputTitle1="Password"
          inputTitle2="Confirm"
          sign={true}
          request={false}
          onClick={() => {
            console.log(" I am");
          }}
          text="Don't have an Account"
          route="Create on Now"
          path="/register"
          call={true}
          text1="Forget your Password"
          route1="Request change Here"
          path1="/reset"
        />
      </Main>
    </div>
  );
};

export default SignIn;

const Main = styled.div`
  display: flex;
  height: calc(100vh - 270px);
  width: 100%;
  justify-content: center;
  align-items: center;
`;
