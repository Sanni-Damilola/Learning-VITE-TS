import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const Register = () => {
  return (
    <Container>
      <Card
        onClick={() => {
          console.log("Sanni");
        }}
        buttonTitle="Sign In"
        title="Sign In"
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
