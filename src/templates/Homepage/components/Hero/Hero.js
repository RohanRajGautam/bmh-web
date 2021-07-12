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
  HeroHeading,
  LogoContainer,
  ButtonContainer,
} from "./Hero.styles";

// component style import
import { HeadingPrimary } from "@components/Heading";
import Image from "@components/Image";

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
            <Image src="home/banner-bg.jpg" style={{ height: "100%" }} />
            <ImageVector
              src={BannerVector}
              type="image/png"
              draggable="false"
            />
          </ImageBg>
        </HeroBg>
        <HeroContent>
          <HeroItems>
            <LogoContainer>
              <HomepageLogo />
            </LogoContainer>
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
            <ButtonContainer>
              <ButtonPrimary to="#medical-wellness" />
            </ButtonContainer>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
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
    </MainContainer>
  );
}
