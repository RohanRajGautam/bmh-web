import React from "react";
import styled from "styled-components";

import { HeadingPrimary } from "@components/Heading";
import { SPACING, COLORS } from "@components/constants";
import Button from "@components/Button";

const Container = styled.div`
  padding-top: ${SPACING.xxl};
  padding-bottom: ${SPACING.xl};

  @media (max-width: 960px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Heading = styled.div`
  margin-right: 8rem;
  span {
    color: ${COLORS.primary};
  }

  @media (max-width: 600px) {
    margin-bottom: 5.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 47.5rem;
`;

const Paragraph = styled.p`
  font-family: Mulish;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem;
  letter-spacing: 0em;
`;

const ButtonWrapper = styled.div`
  margin-top: ${SPACING.lg};
`;

export const FutureSectionWholistic = () => {
  return (
    <Container>
      <TextWrapper>
        <Heading>
          <HeadingPrimary>
            The future <br />
            is <span>wholistic</span>
          </HeadingPrimary>
        </Heading>
        <Content>
          <Paragraph>
            Since opening our pilot wellness center in February 2021, we have
            begun to see how effective mental health care can be when wholistic
            and traditional treatements are combined. This revolutionary healing
            model is both curative and preventative. Finally, a place where
            mental health treatment is both deeply scientific and lovingly
            wholistic.
          </Paragraph>
          <ButtonWrapper>
            <Button to="/" text="Wellness Treatments" />
          </ButtonWrapper>
        </Content>
      </TextWrapper>
    </Container>
  );
};

export const FutureSectionHealthy = () => {
  return (
    <Container>
      <TextWrapper>
        <Heading>
          <HeadingPrimary>
            The future <br />
            is <span>healthy</span>
          </HeadingPrimary>
        </Heading>
        <Content>
          <Paragraph>
            Healthy healing principles will not only be learned, but experienced
            through access to walking paths, a whole-foods café, life & health
            coaching, spiritual growth groups and an acknowledgment that the
            creator God is the true source of wisdom and healing.
          </Paragraph>
          <ButtonWrapper>
            <Button to="/" text="Read more" />
          </ButtonWrapper>
        </Content>
      </TextWrapper>
    </Container>
  );
};
