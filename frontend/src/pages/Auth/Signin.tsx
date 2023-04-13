import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const Signin = () => {
  return (
    <Container>
      <Card
        req={false}
        sign={false}
        path="/register"
        route="Create One"
        text="Don't Have an Account"
        inputTitle="email"
        inputTitle1="password"
        inputTitle2="confirm password"
        onClick={() => {
          console.log("Sanni");
        }}
        buttonTitle="Sign In"
        title="Sign In"
      />
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
