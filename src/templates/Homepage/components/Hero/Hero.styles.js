import styled, { keyframes } from "styled-components";
import { Container } from "@components/Container";
import bgimg from "@images/home/banner-bg.jpg";
import { Heading, HeadingSecondary } from "@components/Heading";
import { mediaQueries } from "@components/MediaQueries";
import { SPACING } from "@components/constants";

/* Animation */

const slideFromBottom = (type, x) => keyframes`
  0% {
    transform: translateY(${x}%)
  }

  ${type === "title" ? `50% { transform: translateY(${x})%}` : ""}

  100% {
    transform: translateY(0%)
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FadingDiv = styled.div`
  animation: ${fadeIn} 300ms linear;
`;

export const MainContainer = styled(Container)`
  height: 100%;

  @media (min-width: 1280px) {
    padding-bottom: 85px;
  }

  ${mediaQueries("md")`
    margin-top: 5.2rem;
    height: 80%;
  `}
`;

export const LogoContainer = styled.div`
  ${mediaQueries("md")`
    opacity: 0;
  `}
`;

export const HeroContainer = styled.div`
  background: #0c0c0c;
  height: 90vh;
  position: relative;
  /* margin-top: -80px; */
  color: #fff;
  width: 100%;
  max-height: 90rem;

  ${mediaQueries("md")`
    height: 80vh;
  `}
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
export const ImageBg = styled.div`
  background: linear-gradient(
    112.4deg,
    rgba(0, 0, 0, 0.2) 3.01%,
    rgba(0, 0, 0, 0) 87.33%
  );
  /* url(${bgimg}); */
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;
  position: relative;

  @media (max-width: 600px) {
    background: linear-gradient(
        173.86deg,
        #2c3336 -10.11%,
        rgba(44, 51, 54, 0) 73.68%
      ),
      linear-gradient(11.06deg, #2c3336 -15.64%, rgba(44, 51, 54, 0) 75.3%);
    /* url(${bgimg}); */
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -o-object-fit: cover;
    object-fit: cover;
    position: relative;
  }
`;

export const ImageVector = styled.img`
  position: absolute;
  bottom: -8rem;
  width: 100vw;

  ${mediaQueries("lg")`
    bottom: -5rem;
  `}

  ${mediaQueries("md")`
    bottom: -3rem;
  `}

  ${mediaQueries("sm")`
    width: 115%;
    bottom: -6%;
    transform: rotate(1deg);
    height: 10%;
    left: -5%;
  `}

  @media (min-width: 1600px) {
    bottom: -10rem;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  padding: 5.2rem 0 0 11.2rem;
  height: 100%;

  ${mediaQueries("lg")`
    padding-top: 5vh;
    padding-left: 5vw;
  `}
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  /* z-index: 4; */

  height: 100%;
`;

export const HeroTextContainer = styled.div`
  max-width: 40rem;
  /* margin: 8rem 0; */

  @media (min-width: 1600px) {
    max-width: 60rem;
  }
`;

export const HeroH1 = styled.h1`
  /* font-size: clamp(2rem, 6vw, 4rem); */
  font-family: Merriweather;
  font-style: normal;
  font-weight: 700;
  font-size: 6.8rem;
  line-height: 8.2rem;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 3.2rem;

  animation: ${slideFromBottom("title", 80)} 500ms ease-in-out;

  span {
    font-family: "Smiley";
    font-weight: 400;
    font-size: 6.8rem;
    line-height: 8.2rem;
  }

  @media (max-width: 600px) {
    font-size: 5rem;

    span {
      font-size: 5rem;
      line-height: 6rem;
    }
  }

  @media (min-width: 1600px) {
    br {
      display: none;
    }
  }
`;

export const HeroP = styled.p`
  font-family: Mulish;
  line-height: 3.2rem;
  /* font-size: clamp(1.8rem, 3vw, 3rem); */
  font-size: 2.4rem;
  font-weight: 400;
  color: #fff;
  opacity: 0.9;
  padding-bottom: 3rem;

  animation: ${slideFromBottom("title", 80)} 600ms ease-in-out;

  @media (min-width: 1600px) {
    max-width: 50rem;
  }

  @media (max-width: 600px) {
    max-width: 30rem;
  }
`;

export const ButtonContainer = styled.div`
  animation: ${slideFromBottom("title", 80)} 700ms ease-in-out;

  @media (max-width: 600px) {
    transform: translate(-3rem, 2rem) scale(0.8);
  }
`;

export const Subtitle = styled(HeadingSecondary)`
  margin-bottom: 1.2rem;

  ${mediaQueries("md")`
    margin-bottom: 2rem;
  `}
`;

export const HeroHeading = styled(Heading)`
  /* margin-top: ${SPACING.md}; */
  padding-top: ${SPACING.md};

  ${mediaQueries("md")`
     padding-top: 13.6rem;
  `}
`;

export const BackgroundVector = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  z-index: -5;

  ${mediaQueries("md")`
    display: none;
  `}
`;
