import React from "react";
import MedicalPage from "./MedicalPage";
import WellnessPage from "./WellnessPage";
import { MainContainer, Medical, Wellness } from "./DualPage.styles";

import RellaxWrapper from "react-rellax-wrapper";
import { Subtitle, BackgroundVector, HeroHeading } from "../Hero/Hero.styles";
import { HeadingPrimary } from "@components/Heading";
import Dots from "@components/SvgComponent/dots";

const DualPage = () => {
  return (
    <MainContainer>
      <HeroHeading center data-aos="fade-up" id="medical-wellness">
        <Subtitle>OUR WHOLISTIC APPROACH</Subtitle>
        <HeadingPrimary>
          Treating <span>and</span> Preventing
        </HeadingPrimary>
      </HeroHeading>
      <BackgroundVector>
        <RellaxWrapper speed={3} percentage={0.4}>
          <Dots />
        </RellaxWrapper>
      </BackgroundVector>
      <Medical>
        <MedicalPage />
      </Medical>
      <Wellness>
        <WellnessPage />
      </Wellness>
    </MainContainer>
  );
};

export default DualPage;
