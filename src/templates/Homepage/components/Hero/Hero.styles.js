import styled from "styled-components";
import { Button } from "@components/Button";
import { Container } from "@components/Container";
import bgimg from "@images/home/banner-bg.jpg";
import { HeadingSecondary } from "@components/Heading";

export const MainContainer = styled(Container)`
  height: 100vh;
`;

export const HeroContainer = styled.div`
  background: #0c0c0c;
  height: 80vh;
  position: relative;
  /* margin-top: -80px; */
  color: #fff;
  width: 100%;
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
    ),
    url(${bgimg});
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;
  position: relative;
`;

export const ImageVector = styled.img`
  position: absolute;
  bottom: -7rem;
  width: 100vw;

  @media (max-width: 600px) {
    width: 115%;
    bottom: -1.5rem;
  }

  @media (min-width: 1600px) {
    bottom: -10rem;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  padding: 5rem 0 0 11.2rem;
  height: 100%;

  @media (max-width: 600px) {
    padding: 0 5vw;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 4;

  height: 100%;
`;

export const ButtonContainer = styled.div`
  /* @media (max-width: 860px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
`;

export const ButtonPrimary = styled(Button)`
  height: 9.6rem;
  width: 27.1rem;
  border-radius: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: "Merriweather";
    font-size: 2.1rem;
  }

  span {
    margin-left: 2rem;
    align-self: flex-end;
    font-size: 3rem;
  }

  &:hover {
    span {
    svg {
      path {
        transform: translateX(1rem);
        transition: all 0.4s;
      }
      circle {
        opacity: 0;
        fill: #fff;
      }
    }
    }
`;

export const HeroTextContainer = styled.div`
  width: 40rem;
  /* margin: 8rem 0; */

  @media (max-width: 600px) {
    width: 32rem;
    margin: 7rem 0;
  }
`;

export const HeroH1 = styled.h1`
  /* font-size: clamp(2rem, 6vw, 4rem); */
  /* margin-bottom: 1.5rem; */
  font-family: Merriweather;
  font-style: normal;
  font-weight: 700;
  /* font-size: clamp(3rem, 6vw, 6rem); */
  font-size: 6.8rem;
  line-height: 8.2rem;
  letter-spacing: -0.02em;
  color: #fff;
  user-select: none;
  margin-bottom: 3.2rem;

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
`;

export const HeroP = styled.p`
  font-family: Mulish;
  line-height: 3.2rem;
  /* font-size: clamp(1.8rem, 3vw, 3rem); */
  font-size: 2.4rem;
  padding-bottom: 3rem;
  font-weight: 400;
  color: #fff;
  user-select: none;
  opacity: 0.9;
`;

export const Subtitle = styled(HeadingSecondary)`
  margin-bottom: 1.2rem;
`;
