import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const ResetPassword = () => {
  return (
    <Container>
      <Card
        call={true}
        req={false}
        sign={false}
        inputTitle="email"
        inputTitle1="password"
        inputTitle2="confirm password"
        onClick={() => {
          console.log("Sanni");
        }}
        buttonTitle="Reset Password"
        title="Sign Up"
        path1="/signin"
        route1="Sign In"
        text1="remember? go back to sign in"
      />
    </Container>
  );
};

export default ResetPassword;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
