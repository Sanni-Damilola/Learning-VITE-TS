import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const ResetPassword = () => {
  return (
    <Container>
      <Card
        req={false}
        sign={false}
        inputTitle="email"
        inputTitle1="password"
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

export default ResetPassword;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
