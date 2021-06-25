import React from "react";
import styled from "styled-components";

import img1 from "@images/wellness-campus/image1.png";
import img2 from "@images/wellness-campus/image2.png";
import img3 from "@images/wellness-campus/image3.png";
import img4 from "@images/wellness-campus/image4.png";
import img5 from "@images/wellness-campus/image5.png";
import img6 from "@images/wellness-campus/image6.png";

const Container = styled.div`
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

  padding-left: 11.3rem;
`;

const ImgContainer = styled.div`
  margin-right: 11.3rem;
`;

export const ImageSliderFirst = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={img1} alt="slide-img-1" loading="lazy" />
      </ImgContainer>
      <ImgContainer>
        <img src={img2} alt="slide-img-2" loading="lazy" />
      </ImgContainer>
      <ImgContainer>
        <img src={img3} alt="slide-img-3" loading="lazy" />
      </ImgContainer>
    </Container>
  );
};

export const ImageSliderSecond = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={img4} alt="slide-img-4" loading="lazy" />
      </ImgContainer>
      <ImgContainer>
        <img src={img5} alt="slide-img-5" loading="lazy" />
      </ImgContainer>
      <ImgContainer>
        <img src={img6} alt="slide-img-6" loading="lazy" />
      </ImgContainer>
    </Container>
  );
};
