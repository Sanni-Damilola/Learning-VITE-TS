import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const Register = () => {
  return (
    <Container>
      <Card
        req={true}
        call={false}
        sign={true}
        inputTitle="email"
        inputTitle1="password"
        path="/signin"
        route="Sign In"
        text="Already Have an Account"
        inputTitle2="confirm password"
        onClick={() => {
          console.log("Sanni");
        }}
        buttonTitle="Sign Up"
        title="Sign Up"
      />
    </Container>
  );
};

export default Register;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
