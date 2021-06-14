import React from "react";

import {
  MainContainer,
  Header,
  CTA,
  People,
  Background,
  ContentWrapper,
  BackgroundVector,
  Parallax,
} from "./styles";
import { Heading, HeadingPrimary, HeadingSecondary } from "@components/Heading";
import PlayButton from "@components/SvgComponent/play-button";
import Dots from "@components/SvgComponent/dots";
import person from "@images/testimonial.png";

const Testimonials = () => {
  return (
    <MainContainer>
      {/* <Background /> */}
      {/* <ContentWrapper> */}
      <BackgroundVector>
        <Dots />
      </BackgroundVector>
      <Header>
        <HeadingSecondary>TESTIMONIALS</HeadingSecondary>
        <HeadingPrimary>
          Stories of <span> true</span> <br />
          hope and healing
        </HeadingPrimary>
      </Header>
      <CTA>
        <PlayButton />
      </CTA>
      <People>
        <img src={person} alt="testimonial" />
      </People>
      {/* </ContentWrapper> */}
    </MainContainer>
  );
};

export default Testimonials;
