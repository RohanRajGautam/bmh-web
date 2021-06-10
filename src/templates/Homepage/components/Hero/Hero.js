import React, { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";

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
  Message,
  MessagePrimary,
  MessageSecondary,
} from "./Hero.styles";

// images
import BackgroundImage from "@images/home/banner-bg.jpg";
import BannerVector from "@images/home/banner-vector.png";
import HomepageLogo from "@components/SvgComponent/homepage-logo";
import ButtonPrimary from "@components/SvgComponent/btn-primary";

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
      <Message>
        <MessageSecondary>OUR WHOLISTIC APPROACH</MessageSecondary>
        <MessagePrimary>
          Treating <span>and</span> Preventing
        </MessagePrimary>
      </Message>
    </MainContainer>
  );
}
