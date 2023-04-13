import React from "react";
import styled from "styled-components";
import { IButton } from "../types";

const ButtonComponents: React.FC<IButton> = ({ title, bg, color }) => {
  return (
    <Button bg={bg} color={color}>
      <Text>{title}</Text>
    </Button>
  );
};

export default ButtonComponents;

const Button = styled.div<{ bg: string; color: string }>`
  width: 120px;
  height: 50px;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 3pc;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  cursor: pointer;
  :hover {
    transform: scale(0.97);
  }
`;

const Text = styled.div`
  font-weight: bold;
`;
