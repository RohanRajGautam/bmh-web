import styled from "styled-components";
import hoverImg from "@images/home/hover-img.png";
import { SPACING } from "@components/constants";
import { Container } from "@components/Container";
import { mediaQueries } from "@components/MediaQueries";

export const MainContainer = styled(Container)`
  /* padding-top: ${SPACING.lg}; */
  padding: 0 11.3rem;
  margin-top: 30rem;

  ${mediaQueries("lg")`
    padding: 0 5vw;
  `}
`;

export const Medical = styled.div``;
export const Wellness = styled.div``;

/* ========================================
========================= */

export const Wrapper = styled.div`
  display: flex;
  max-width: 140rem;
  min-height: 35vh;
  margin-top: 10rem;

  ${mediaQueries("sm")`
    flex-direction: column;
  `}
`;

export const HeadingWrapper = styled.div`
  width: 20%;
`;

export const Title = styled.h3`
  font-family: Merriweather;
  font-size: 3.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.4rem;
  letter-spacing: -0.02em;
  text-align: left;
`;
export const Subtitle = styled.p`
  font-family: Mulish;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: 0em;
  text-align: left;

  margin-top: 1.2rem;
`;

export const ServicesWrapper = styled.div`
  width: 100%;
`;

export const ServicesItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: space-around;

  height: 100%;
  margin-top: 5.3rem;
`;

export const ServicesItems = styled.p`
  text-align: left;
  /* width: 30%; */
  margin-right: 3rem;
  flex: 1 1 30%;
  -webkit-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
  position: relative;

  @media (min-width: 1200px) {
    max-width: 28rem;
  }

  &::after {
    content: url(${hoverImg});
    display: block;
    position: absolute;
    bottom: -200%;
    right: 15%;
    z-index: -2;
    opacity: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      content: url(${hoverImg});
      display: block;
      position: absolute;
      bottom: -200%;
      right: 15%;
      z-index: -2;
      opacity: 1;

      ${mediaQueries("sm")`
        content: none;
      `}
    }
  }

  &:not(:first-child) {
    ${mediaQueries("sm")`
    flex: 1 1 100%;
    margin-top: 5.1rem;
  `}
  }
`;

export const WellnessServicesItems = styled(ServicesItems)`
  &:nth-child(even) {
    max-width: 32rem;
  }
`;
export const Anchor = styled.a`
  font-family: Mulish;
  font-size: 30px;
  line-height: 32px;
  letter-spacing: 0em;
  text-decoration: none;
  cursor: pointer;
  color: #5b8a3c;

  display: inline;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0.15);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #5b8a3c;
    transform-origin: bottom left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
