import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

import {
  MainContainer,
  Header,
  Cta,
  People,
  BackgroundVector,
  // ContentWrapper,
} from "./styles";
import { HeadingPrimary, HeadingSecondary } from "@components/Heading";
import PlayButton from "@components/SvgComponent/play-button";
import Dots from "@components/SvgComponent/dots";

const Testimonials = () => {
  return (
    <MainContainer>
      {/* <ContentWrapper > */}
      <BackgroundVector>
        <RellaxWrapper speed={5} percentage={0.3}>
          <Dots />
        </RellaxWrapper>
      </BackgroundVector>
      <Header data-aos="fade-up">
        <HeadingSecondary>TESTIMONIALS</HeadingSecondary>
        <HeadingPrimary>
          Stories of <span> true</span> <br />
          hope and healing
        </HeadingPrimary>
      </Header>
      <Cta>
        <PlayButton />
      </Cta>
      <People></People>
      {/* </ContentWrapper> */}
    </MainContainer>
  );
};

export default Testimonials;
