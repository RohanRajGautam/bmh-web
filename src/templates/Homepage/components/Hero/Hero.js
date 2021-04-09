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
              <br /> through medical care & wellness education
            </HeroP>
          </HeroTextContainer>
          <Hidden smDown>
            <ButtonContainer>
              <ButtonPrimary
                primary="true"
                round="true"
                to="https://www.beautifulmindsmedical.com/"
                hover
              >
                Medical
              </ButtonPrimary>
              <ButtonPrimary
                round="true"
                primary="true"
                to="https://beautifulmindswellness.org/"
                hover
              >
                Wellness
              </ButtonPrimary>
            </ButtonContainer>
          </Hidden>
          <Hidden mdUp>
            <ButtonContainer>
              <MobileButtonPrimary primary="true" round="true" to="/">
                Beautiful Minds Medical
              </MobileButtonPrimary>
              <Button round="true" to="/">
                Beautiful Minds Wellness
              </Button>
            </ButtonContainer>
          </Hidden>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}
