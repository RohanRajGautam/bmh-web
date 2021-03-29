import React from "react";
import { Hidden } from "@material-ui/core";
import {
  Content,
  GrayBackground,
  TextWrapper,
  StoryContainer,
  ButtonWrapper,
  HeadingWrapper,
} from "./StoryPage.styles";

const StoryPage = () => {
  return (
    <StoryContainer>
      <Content data-aos="zoom-out-right">
        <HeadingWrapper big>
          Our Story
          <br /> meets yours
        </HeadingWrapper>
        <TextWrapper>
          You are a whole person, not a mental illness. At Beautiful Minds
          Medical, we design a custom treatment plans based on the individual
          needs and backgrounds of each patient. Mental health is influenced by
          physical, psychological, social, and spiritual factors. In addition to
          improving your mental health, our goal is to help you enhance every
          aspect of who you are.
        </TextWrapper>
        <ButtonWrapper primary md>
          Donate
        </ButtonWrapper>
      </Content>
      <Hidden xsDown>
        <GrayBackground data-aos="fade-left" />
      </Hidden>
    </StoryContainer>
  );
};

export default StoryPage;
