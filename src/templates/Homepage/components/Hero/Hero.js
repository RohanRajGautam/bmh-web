import React from "react";

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
  LogoContainer,
  ButtonContainer,
} from "./Hero.styles";

// component style import
import Image from "@components/Image";

// images
import BannerVector from "@images/home/banner-vector.png";
import HomepageLogo from "@components/SvgComponent/homepage-logo";
import ButtonPrimary from "@components/SvgComponent/btn-primary";

export default function Hero() {
  return (
    <MainContainer>
      <HeroContainer>
        <HeroBg>
          <ImageBg>
            <Image
              src="home/banner-bg.jpg"
              style={{ height: "100%", filter: "brightness(0.8)" }}
            />
            <ImageVector
              src={BannerVector}
              type="image/png"
              draggable="false"
              alt="background-vector"
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
    </MainContainer>
  );
}
