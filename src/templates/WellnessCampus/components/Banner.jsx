import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import wellnessBanner from "@images/wellness-campus/banner.png";
import LogoWithText from "@components/LogoWithText";
import MainText from "@components/MainText";
import { BackArrw } from "@components/SvgComponent/back-arrow.js";

const ImageContainer = styled.div`
  min-height: 100vh;
  height: 100vh;

  @media (max-width: 960px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const ImageBg = styled.div`
  background: linear-gradient(
      112.4deg,
      rgba(0, 0, 0, 0.2) 3.01%,
      rgba(0, 0, 0, 0) 87.33%
    ),
    url(${wellnessBanner}), #6ca448;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;
  position: relative;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const GoBack = styled(Link)`
  position: absolute;
  left: 5rem;
  top: 5rem;
`;

export const HeroContent = styled.div`
  height: 100%;
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  height: 80%;
`;

const TextContainer = styled.div`
  margin-top: 3.2rem;
`;

const Banner = () => {
  return (
    <ImageContainer>
      <HeroBg>
        <ImageBg />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <LogoWithText />
          <TextContainer>
            <MainText />
          </TextContainer>
        </HeroItems>
      </HeroContent>
      <GoBack to="/">
        <BackArrw />
      </GoBack>
    </ImageContainer>
  );
};

export default Banner;
