import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// components
import {
  MainContainer,
  ButtonContainer,
  // ButtonPrimary,
  Divider,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroTextContainer,
  ImageBg,
  MobileButtonPrimary,
  ImageVector,
} from "./Hero.styles";

import { Heading, HeadingPrimary, HeadingSecondary } from "@components/Heading";

// images
import BackgroundImage from "@images/home/banner-bg.jpg";
import BannerVector from "@images/home/banner-vector.png";
import HomepageLogo from "@components/SvgComponent/homepage-logo";
import ButtonPrimary from "@components/SvgComponent/btn-primary";

const HeroHeading = styled(Heading)`
  height: 20vh;
  justify-content: flex-end;
`;

export default function Hero() {
  return (
    <MainContainer>
      <HeroContainer>
        <HeroBg>
          <ImageBg>
            <ImageVector src={BannerVector} type="image/png" />
          </ImageBg>
        </HeroBg>
        <HeroContent>
          <HeroItems>
            <HomepageLogo />
            <HeroTextContainer>
              <HeroH1>
                Get Your <br />
                Life <span>Back</span>
              </HeroH1>
              <HeroP>
                We treat and prevent mental illness through wholistic medical
                care & wellness education
              </HeroP>
            </HeroTextContainer>
            <ButtonPrimary to="#medical-wellness" />
          </HeroItems>
        </HeroContent>
      </HeroContainer>
      <HeroHeading>
        <HeadingSecondary>OUR WHOLISTIC APPROACH</HeadingSecondary>
        <HeadingPrimary>
          Treating <span>and</span> Preventing
        </HeadingPrimary>
      </HeroHeading>
    </MainContainer>
  );
}
