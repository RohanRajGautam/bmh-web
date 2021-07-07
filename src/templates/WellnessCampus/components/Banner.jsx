// import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import wellnessBanner from "@images/wellness-campus/banner.jpg";
import LogoWithText from "@components/LogoWithText";
import MainText from "@components/MainText";

// import { BackArrw } from "@components/SvgComponent/back-arrow.js";
import HomepageLogo from "@components/SvgComponent/homepage-logo";

const ImageContainer = styled.div`
  min-height: 100vh;
  height: 100vh;

  @media (max-width: 960px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const ImageBg = styled.div`
  background: linear-gradient(0deg, rgba(38, 8, 8, 0.24), rgba(38, 8, 8, 0.24)),
    url(${wellnessBanner});
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

// const GoBack = styled(Link)`
//   position: absolute;
//   left: 5rem;
//   top: 5rem;
// `;

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

  @media (max-width: 600px) {
    height: 100%;
  }
`;

const TextContainer = styled.div`
  margin-top: 3.2rem;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 5.2rem;
  left: 11.3rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

const Banner = () => {
  return (
    <ImageContainer>
      <HeroBg>
        <ImageBg />
      </HeroBg>

      <HeroContent>
        <HeroItems>
          <LogoWithText text="wellness campus" />
          <TextContainer>
            <MainText />
          </TextContainer>
        </HeroItems>
      </HeroContent>
      {/* <GoBack to="/">
        <BackArrw />
      </GoBack> */}
      <LogoContainer>
        <HomepageLogo />
      </LogoContainer>
    </ImageContainer>
  );
};

export default Banner;
