import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

// styled-components
import {
  MainContainer,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroTextContainer,
  ImageBg,
  ImageVector,
  Subtitle,
  BackgroundVector,
  FadingDiv,
  HeroHeading,
  LogoContainer,
} from "./Hero.styles";

// component style import
import { HeadingPrimary } from "@components/Heading";

// images
import BannerVector from "@images/home/banner-vector.png";
import HomepageLogo from "@components/SvgComponent/homepage-logo";
import ButtonPrimary from "@components/SvgComponent/btn-primary";
import Dots from "@components/SvgComponent/dots";

export default function Hero() {
  return (
    <MainContainer>
      <HeroContainer>
        <HeroBg>
          <ImageBg>
            <ImageVector
              src={BannerVector}
              type="image/png"
              draggable="false"
            />
          </ImageBg>
        </HeroBg>
        <HeroContent>
          <HeroItems>
            <FadingDiv>
              <LogoContainer>
                <HomepageLogo />
              </LogoContainer>
            </FadingDiv>
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
            <FadingDiv>
              <ButtonPrimary to="#medical-wellness" />
            </FadingDiv>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
      <HeroHeading center data-aos="fade-up">
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
    </MainContainer>
  );
}
