import React from "react";
import styled from "styled-components";

import { Heading, HeadingSecondary } from "@components/Heading";
import wellnessBg from "@images/wellness-campus.png";
import { SPACING } from "@components/constants";
import { Container } from "@components/Container";
import { mediaQueries } from "@components/MediaQueries";

import ExploreSvg from "./explore";
import arrow from "./Arrow.svg";

const Wrapper = styled(Container)`
  margin-top: ${SPACING.xl};
  background: url(${wellnessBg});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  text-align: center;

  ${mediaQueries("sm")`
    background-attachment: inherit;
    padding: 5vh 10vw 0 10vw;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: ${SPACING.md};

  ${mediaQueries("sm")`
      margin-top: 2.5rem;
  `}
`;

const Subtitle = styled(HeadingSecondary)`
  opacity: 1;
  color: #fff;
`;

const Title = styled.h3`
  font-family: Smiley;
  font-style: normal;
  font-weight: normal;
  font-size: 6.8rem;
  line-height: 6rem;

  color: #fff;

  span {
    font: inherit;
    position: relative;

    &::after {
      content: url(${arrow});
      position: absolute;
      bottom: 5%;
      left: -5%;
      width: 20px;
      height: 20px;

      ${mediaQueries("sm")`
        content: none;    
      `}
    }
  }
`;

const WellnessCampus = () => {
  return (
    <Wrapper>
      <Content data-aos="fade-up">
        <Heading center>
          <Subtitle>Wellness campus</Subtitle>
          <Title>
            The <span>future</span> of mental health care
          </Title>
        </Heading>
        <ButtonWrapper data-aos="fade-up">
          <ExploreSvg to="/wellness-campus" />
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default WellnessCampus;
