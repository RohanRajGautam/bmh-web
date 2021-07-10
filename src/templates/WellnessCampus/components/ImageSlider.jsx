import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "@images/wellness-campus/image1.png";
import img2 from "@images/wellness-campus/image2.png";
import img3 from "@images/wellness-campus/image3.png";
import img4 from "@images/wellness-campus/image4.png";
import img5 from "@images/wellness-campus/image5.png";
import img6 from "@images/wellness-campus/image6.png";
import img7 from "@images/wellness-campus/image7.png";
import img8 from "@images/wellness-campus/image8.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Container = styled.div`
  /* margin: 8.2rem 0; */
`;

const ImgContainer = styled.div`
  margin-right: 11.3rem;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;

  overflow-x: scroll;
  overflow-y: hidden;
  user-select: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageSliderFirst = () => {
  const firstSlider = useRef(null);

  useEffect(() => {
    const sliderContainer = firstSlider.current;
    const horizontalWrapper = firstSlider.current.children[0].children;

    const sections = gsap.utils.toArray(horizontalWrapper);

    gsap.to(sections, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sliderContainer,
        // pin: true,
        start: "bottom bottom",
        end: "top top",
        scrub: 2,
      },
    });
  }, []);

  return (
    <Container ref={firstSlider}>
      <HorizontalWrapper style={{ paddingLeft: "11.3rem" }}>
        <ImgContainer>
          <img src={img1} alt="slide-img-1" loading="lazy" />
        </ImgContainer>
        <ImgContainer>
          <img src={img2} alt="slide-img-2" loading="lazy" />
        </ImgContainer>
        <ImgContainer>
          <img src={img3} alt="slide-img-3" loading="lazy" />
        </ImgContainer>
        <ImgContainer>
          <img src={img7} alt="slide-img-1" loading="lazy" />
        </ImgContainer>
      </HorizontalWrapper>
    </Container>
  );
};

export const ImageSliderSecond = () => {
  const secondSlider = useRef(null);

  useEffect(() => {
    const sliderContainer = secondSlider.current;
    const horizontalWrapper = secondSlider.current.children[0].children;

    const sections = gsap.utils.toArray(horizontalWrapper);

    gsap.to(sections, {
      xPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: sliderContainer,
        // pin: true,
        start: "bottom bottom",
        end: "top top",
        scrub: 2,
      },
    });
  }, []);
  return (
    <Container ref={secondSlider}>
      <HorizontalWrapper
        style={{
          paddingRight: "13.3rem",
          flexDirection: "row-reverse",
        }}
      >
        <ImgContainer>
          <img src={img4} alt="slide-img-4" loading="lazy" />
        </ImgContainer>
        <ImgContainer>
          <img src={img5} alt="slide-img-5" loading="lazy" />
        </ImgContainer>
        <ImgContainer>
          <img src={img6} alt="slide-img-6" loading="lazy" />
        </ImgContainer>
        <ImgContainer>
          <img src={img8} alt="slide-img-4" loading="lazy" />
        </ImgContainer>
      </HorizontalWrapper>
    </Container>
  );
};
