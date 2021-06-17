import React from "react";
import styled from "styled-components";
import { Heading, HeadingSecondary } from "@components/Heading";
import ExploreSvg from "./explore";
import wellnessBg from "@images/wellness-campus.png";
import { SPACING } from "@components/constants";
import { Container } from "@components/Container";
import arrow from "./Arrow.svg";

const Wrapper = styled(Container)`
  margin-top: ${SPACING.xl};
  background: url(${wellnessBg});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  text-align: center;
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
    }
  }
`;

const WellnessCampus = () => {
  return (
    <Wrapper>
      <Content data-aos="fade-up">
        <Heading>
          <Subtitle>Wellness campus</Subtitle>
          <Title>
            The <span>future</span> of mental health care
          </Title>
        </Heading>
        <ButtonWrapper data-aos="fade-up">
          <ExploreSvg to="https://brojure.com/bmw/overview/" />
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default WellnessCampus;
