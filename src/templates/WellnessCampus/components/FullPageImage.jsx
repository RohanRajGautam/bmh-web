import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { HeadingPrimary } from "@components/Heading";
import { TextWrapper, Heading, Content } from "./FutureSection";
import fullpageimg from "@images/wellness-campus/WellnessCampusFull.jpg";
import Timeline from "./Timeline";
import LogoWithText from "@components/LogoWithText";
import DonateBtn from "../../Homepage/components/Donate/DonateBtn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MainContainer = styled.div`
  background: #f5f5ef;
  padding-top: 13.3rem;
  margin-top: 9.3rem;
  margin-bottom: 9.3rem;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 150vh;

  @media (max-width: 1024px) {
    height: 80vh;
  }
  @media (max-width: 600px) {
    height: 100vh;
  }
`;

const Image = styled.div`
  background: url(${fullpageimg});
  background-size: cover;
  background-position: center center;

  height: 60%;
  width: 60%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  filter: brightness(1);

  @media (max-width: 1024px) {
    height: 90%;
    width: 100%;
    filter: brightness(0.5);

  }
`;

const TextContainer = styled(TextWrapper)`
  @media (max-width: 1024px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const Text = styled.h1`
  font-family: Merriweather;
  font-size: 6.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 8.2rem;
  letter-spacing: -0.02em;
  text-align: center;
  color: #ffffff;

  span {
    font-family: Smiley;
    font-size: 6.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 8.2rem;
    letter-spacing: -0.02em;
  }
`;

const ImageContent = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 0;

  @media (max-width: 1024px) {
    opacity: 1;
    top: 50%;
    width: 100%;
  }
`;

const ImageTextContainer = styled.div`
  margin-top: 4rem;
`;
const ButtonContainer = styled.div`
  margin-top: 5.2rem;
`;

const FullPageImage = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // const ImageContainer = imgRef.current;
    const imageFull = imgRef.current.children[0];
    const imageContent = imgRef.current.children[1];
    ScrollTrigger.matchMedia({
      '(min-width: 1024px)': () => {
        gsap.to(imageFull, {
          scrollTrigger: {
            trigger: imageFull,
            start: "center 40%",
            end: "+=1000",
            scrub: 1, // for animation
            pinSpacing: false,
            // toggleActions: "restart complete reverse reset",
          },
          width: "100%",
          height: "100%",
        });

        gsap.to(imageContent, {
          scrollTrigger: {
            trigger: imageFull,
            start: "center+=620 center",
            scrub: 1,
            toggleActions: "restart complete reverse reset",
          },
          opacity: 1,
          ease: "expo.easeInOut",
        });

        gsap.to(imageFull, {
          scrollTrigger: {
            trigger: imageFull,
            start: "center+=620 center",
            scrub: 1,
            toggleActions: "restart complete reverse reset",
          },
          filter: "brightness(0.5)",
          ease: "expo.easeInOut",
        });
      }
    })
  }, []);

  return (
    <MainContainer>
      <TextContainer>
        <Heading>
          <HeadingPrimary>
            The future <br />
            is <span>coming</span>
          </HeadingPrimary>
        </Heading>
        <Content />
      </TextContainer>
      <Timeline />
      <ImageContainer ref={imgRef}>
        <Image />

        <ImageContent>
          <LogoWithText text="TRANSFORMING LIVES" />
          <ImageTextContainer>
            <Text>
              The future is <span>here</span>
            </Text>
          </ImageTextContainer>
          <ButtonContainer>
            <DonateBtn to="https://beautifulmindswellness.org/donate/" />
          </ButtonContainer>
        </ImageContent>
      </ImageContainer>
    </MainContainer>
  );
};

export default FullPageImage;
