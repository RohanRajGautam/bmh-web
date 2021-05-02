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
    <StoryContainer id="our-story">
      <ContentWrapper>
        <Content data-aos="fade-down-right" data-aos-delay="200">
          <HeadingWrapper big>
            Our Story
            <br /> meets yours
          </HeadingWrapper>
          <TextWrapper>
            You are a whole person, not a mental illness. At Beautiful Minds
            Medical, we design a custom treatment plans based on the individual
            needs and backgrounds of each patient. Mental health is influenced
            by physical, psychological, social, and spiritual factors. In
            addition to improving your mental health, our goal is to help you
            enhance every aspect of who you are.
          </TextWrapper>
          <ButtonWrapper
            primary="true"
            md="true"
            to="https://quickclick.com/cart/cart.php?action=show_information&internal_key=b891033e3f[…]nal_timestamp=1617969086&tid=c2d5699d8721a1f3f7bf3b7a6a46ba5c"
          >
            Donate
          </ButtonWrapper>
        </Content>
        <Thumbnail data-aos="fade-down-left" data-aos-delay="200" />
      </ContentWrapper>
    </StoryContainer>
  );
};

export default StoryPage;
