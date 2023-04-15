import React from "react";
import styled from "styled-components";
import { iText } from "../../types";

const TestField: React.FC<any> = ({ textTitle, message, remake }) => {
  return (
    <div>
      <Main>
        <Text1>{textTitle}</Text1>
        <Text2>{message}</Text2>
        <Text3>{remake}</Text3>
      </Main>
    </div>
  );
};

export default TestField;

const Text3 = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const Text2 = styled.div``;

const Text1 = styled.div`
  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
`;

const Main = styled.div`
  width: 90%;
  margin: 20px;
`;
