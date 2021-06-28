import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "@images/wellness-campus/image1.png";
import img2 from "@images/wellness-campus/image2.png";
import img3 from "@images/wellness-campus/image3.png";
import img4 from "@images/wellness-campus/image4.png";
import img5 from "@images/wellness-campus/image5.png";
import img6 from "@images/wellness-campus/image6.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Container = styled.div`
  margin: 8.2rem 0;
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
  React.useEffect(() => {
    // let sections = document.querySelectorAll('#container');
    let sections = gsap.utils.toArray("#img-container-first");
    console.log(sections);

    gsap.to(sections, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: "#container-first",
        // pin: true,
        start: "top center",
        scrub: 1,
        end: () =>
          "+=" + document.querySelector("#img-container-first").offsetWidth / 3,
      },
    });
  }, []);

  return (
    <Container id="container-first">
      <HorizontalWrapper style={{ paddingLeft: "11.3rem" }}>
        <ImgContainer id="img-container-first">
          <img src={img1} alt="slide-img-1" loading="lazy" />
        </ImgContainer>
        <ImgContainer id="img-container-first">
          <img src={img2} alt="slide-img-2" loading="lazy" />
        </ImgContainer>
        <ImgContainer id="img-container-first">
          <img src={img3} alt="slide-img-3" loading="lazy" />
        </ImgContainer>
      </HorizontalWrapper>
    </Container>
  );
};

export const ImageSliderSecond = () => {
  React.useEffect(() => {
    // let sections = document.querySelectorAll('#container');
    let sections = gsap.utils.toArray("#img-container-second");
    console.log(sections);

    gsap.to(sections, {
      xPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: "#container-second",
        // pin: true,
        start: "top center",
        scrub: 1,
        end: () =>
          "+=" +
          document.querySelector("#img-container-second").offsetWidth / 3,
      },
    });
  }, []);
  return (
    <Container id="container-second">
      <HorizontalWrapper
        style={{
          paddingRight: "13.3rem",
          flexDirection: "row-reverse",
        }}
      >
        <ImgContainer id="img-container-second">
          <img src={img4} alt="slide-img-4" loading="lazy" />
        </ImgContainer>
        <ImgContainer id="img-container-second">
          <img src={img5} alt="slide-img-5" loading="lazy" />
        </ImgContainer>
        <ImgContainer id="img-container-second">
          <img src={img6} alt="slide-img-6" loading="lazy" />
        </ImgContainer>
      </HorizontalWrapper>
    </Container>
  );
};
