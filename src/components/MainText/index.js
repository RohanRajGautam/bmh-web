import React from "react";
import styled, { keyframes } from "styled-components";

const changeText = keyframes`
  0% {
    content: 'wholistic'
  }
  30% {
    content: 'healthy'
  }
  60% {
    content: 'happy'
  }
  90% {
    content: 'coming'
  }
  100% {
    content: 'wholistic'
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.h1`
  font-family: Merriweather;
  font-size: 6.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 8.2rem;
  letter-spacing: -0.02em;
  text-align: center;
  color: #ffffff;

  span {
    font-family: Smiley;
    font-size: 6.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 8.2rem;
    letter-spacing: -0.02em;
    transition: all 0.3s ease-in-out;

    &::before {
      content: "";
      transition: all 0.3s ease-in-out;
      animation: ${changeText} infinite 8s ease-in-out;
    }
  }
`;

const MainText = () => {
  return (
    <Wrapper>
      <Text>
        The future is <span></span>
      </Text>
    </Wrapper>
  );
};

export default MainText;
