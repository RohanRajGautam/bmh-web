import React from "react";
import {
  Content,
  TextWrapper,
  StoryContainer,
  ButtonWrapper,
  HeadingWrapper,
  ContentWrapper,
  Thumbnail,
} from "./StoryPage.styles";

const StoryPage = () => {
  return (
    <StoryContainer id="our-story" data-aos="fade-up">
      <ContentWrapper>
        <Content>
          <HeadingWrapper big>
            Our Story
            <br /> Meets Yours
          </HeadingWrapper>
          <TextWrapper>
            You are a whole person, not a mental illness. At Beautiful Minds
            Medical, we design custom treatment plans based on the individual
            needs and backgrounds of each patient. Mental health is influenced
            by physical, psychological, social, and spiritual factors. In
            addition to improving your mental health, our goal is to help you
            enhance every aspect of who you are.
          </TextWrapper>
          <ButtonWrapper
            primary="true"
            md="true"
            to="https://beautifulmindswellness.org/donate/"
            target="_blank"
          >
            Donate
          </ButtonWrapper>
        </Content>
        <Thumbnail />
      </ContentWrapper>
    </StoryContainer>
  );
};

export default StoryPage;
