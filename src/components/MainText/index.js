import React from "react";
import styled from "styled-components";

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
  }
`;

const MainText = () => {
  return (
    <Wrapper>
      <Text>
        The future is <span>wholistic</span>
      </Text>
    </Wrapper>
  );
};

export default MainText;
