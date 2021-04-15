import React from "react";
import { Hidden } from "@material-ui/core";

// components
import { Button } from "@components/Button";
import {
  ButtonContainer,
  ButtonPrimary,
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
} from "./Hero.styles";

// images
import BackgroundImage from "@images/background-img-hero.jpg";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={BackgroundImage} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroTextContainer>
            <HeroH1>Get Your Life Back</HeroH1>
            <Divider />
            <HeroP>
              We treat and prevent mental illness
              <span> through medical care & wellness education</span>
            </HeroP>
          </HeroTextContainer>
          <ButtonContainer>
            <ButtonPrimary
              primary="true"
              round="true"
              target="_blank"
              to="https://www.beautifulmindsmedical.com/"
            >
              Medical
            </ButtonPrimary>
            <ButtonPrimary
              primary="true"
              round="true"
              to="https://beautifulmindswellness.org/"
              target="_blank"
            >
              Wellness
            </ButtonPrimary>
          </ButtonContainer>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}
