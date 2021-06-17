import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

import {
  MainContainer,
  Header,
  CTA,
  People,
  Background,
  ContentWrapper,
  BackgroundVector,
  Parallax,
  Image,
} from "./styles";
import { Heading, HeadingPrimary, HeadingSecondary } from "@components/Heading";
import PlayButton from "@components/SvgComponent/play-button";
import Dots from "@components/SvgComponent/dots";

const Testimonials = () => {
  return (
    <MainContainer>
      {/* <Background /> */}
      {/* <ContentWrapper> */}
      <BackgroundVector>
        <RellaxWrapper speed={5} percentage={0.3}>
          <Dots />
        </RellaxWrapper>
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
      <People></People>
      {/* </ContentWrapper> */}
    </MainContainer>
  );
};

export default Testimonials;
