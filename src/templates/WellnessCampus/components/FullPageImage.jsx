import React from "react";
import styled from "styled-components";

import { HeadingPrimary } from "@components/Heading";
import { TextWrapper, Heading, Content } from "./FutureSection";
import fullpageimg from "@images/wellness-campus/WellnessCampusFull.png";
import Timeline from "./Timeline";

const MainContainer = styled.div`
  background: #f5f5ef;
  padding: 13.3rem 0;
  margin-top: 9.3rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 13.3rem;

  img {
    height: 100%;
    width: 100%;
  }
`;

const FullPageImage = () => {
  return (
    <MainContainer>
      <TextWrapper>
        <Heading>
          <HeadingPrimary>
            The future <br />
            is <span>coming</span>
          </HeadingPrimary>
        </Heading>
        <Content />
      </TextWrapper>
      <Timeline />
      <ImageContainer>
        <img src={fullpageimg} alt="full-page-img" loading="lazy" />
      </ImageContainer>
    </MainContainer>
  );
};

export default FullPageImage;
