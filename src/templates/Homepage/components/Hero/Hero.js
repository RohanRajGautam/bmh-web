import React from "react"
import styled from "styled-components"
import { Button } from "../../../../components/Button"
import BackgroundImage from "../../../../images/background-img-hero.jpg"

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={BackgroundImage} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Get Your Life Back</HeroH1>
          <Divider />
          <HeroP>
            We treat and prevent mental illness
            <br /> through medical care & wellness education
          </HeroP>
          <ButtonContainer>
            <Button primary="true" round="true" to="/">
              Medical
            </Button>
            <Button round="true" to="/">
              Wellness
            </Button>
          </ButtonContainer>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-top: -80px;
  color: #fff;

  // add overlay to the background image

  /* :before {
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
  } */
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  /* padding: 0rem calc((100vw - 1300px) / 2); */
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 75vh;
  width: 90vw;
  max-height: 100%;
  padding: 3rem 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  transform: translateY(25vh);
`

const ButtonContainer = styled.div``

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  /* margin-bottom: 1.5rem; */
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: clamp(2rem, 6vw, 6rem);
  letter-spacing: 0.3px;
  user-select: none;
  padding-bottom: 3rem;
`

const Divider = styled.div`
  width: 11rem;
  background: #fff;
  margin-bottom: 4rem;
  border: 3px solid #ffffff;
`

const HeroP = styled.p`
  font-family: Mulish;
  font-weight: 400;
  line-height: 160%;
  font-size: clamp(1rem, 3vw, 3rem);
  padding-bottom: 3rem;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
`
