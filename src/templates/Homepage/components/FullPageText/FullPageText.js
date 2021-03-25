import React from "react";
import styled from "styled-components";

const FullPageText = () => {
  return (
    <TextContainer>
      <Message>
        Leading
        <br />
        in Wholistic Mental Health
      </Message>
    </TextContainer>
  );
};

export default FullPageText;

const TextContainer = styled.div`
  background: #2c3336;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Message = styled.h1`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 7rem;
  line-height: 140.5%;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  user-select: none;
`;
