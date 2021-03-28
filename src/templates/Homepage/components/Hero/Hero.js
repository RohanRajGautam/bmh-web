import React from "react";
import styled from "styled-components";
import { Hidden } from "@material-ui/core";
import { Button } from "../../../../components/Button";
import BackgroundImage from "../../../../images/background-img-hero.jpg";

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
              <ButtonPrimary primary="true" round="true" to="/">
                Medical
              </ButtonPrimary>
              <Button round="true" to="/">
                Wellness
              </Button>
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

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-top: -80px;
  color: #fff;
  padding-left: 5vw

  // add overlay to the background image

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  /* padding: 0rem calc((100vw - 1300px) / 2); */
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 75vh;
  width: 100%;
  max-height: 100%;
  padding: 3rem 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  transform: translateY(25vh);
`;

const HeroTextContainer = styled.div`
  width: 100%;

  padding: 1.5rem;
`;

const ButtonContainer = styled.div`
  @media screen and (max-width: 860px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonPrimary = styled(Button)`
  margin-right: 2rem;
`;

const MobileButtonPrimary = styled(Button)`
  margin-bottom: 1rem;
`;

const HeroH1 = styled.h1`
  /* font-size: clamp(2rem, 6vw, 4rem); */
  /* margin-bottom: 1.5rem; */
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(3rem, 6vw, 6rem);
  letter-spacing: 0.3px;
  user-select: none;
  padding-bottom: 3rem;
`;

const Divider = styled.div`
  width: 11rem;
  height: 0px;
  background: #fff;
  margin-bottom: 4rem;
  border: 2px solid #ffffff;

  @media screen and (max-width: 860px) {
    width: 5rem;
  }
`;

const HeroP = styled.p`
  font-family: Mulish;
  font-weight: 300;
  line-height: 160%;
  font-size: clamp(1.8rem, 3vw, 3rem);
  padding-bottom: 3rem;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
`;
