import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <Text>Sign Up</Text>
      <Field>
        <Form>
          <Input />
        </Form>
      </Field>
    </Container>
  );
};

export default Card;

const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  outline: none;
  border: 1px solid rgb(0, 0, 0, 0.6);
  width: 300px;
  height: 30px;
  border-left: 10px;

  border-radius: 4px;
`;

const Container = styled.div`
  width: 500px;
  min-height: 600px;
  border-radius: 10px;
  border-color: silver;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  text-transform: uppercase;
  margin-top: 40px;
  font-size: 40px;
  font-weight: 500;
`;
const Field = styled.div`
  flex-direction: column;
  display: flex;
`;
