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
            When I went to medical school I had the dream of becoming a surgeon.
            Little did I know where my journey would lead me. During my fourth
            year of medical school I went through a transformative process where
            I grew tremendously emotionally, spiritually and relationally. As a
            result I found a peace and joy I had never had before. One beautiful
            Saturday morning as I hiked up a Southern California mountainside it
            hit me - <ButtonWrapper to="/our-story">Read More</ButtonWrapper>
          </TextWrapper>
        </Content>
        <Thumbnail />
      </ContentWrapper>
    </StoryContainer>
  );
};

export default StoryPage;
