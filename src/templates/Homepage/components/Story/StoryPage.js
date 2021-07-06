import React, {useState} from "react";
import {
  Content,
  TextWrapper,
  StoryContainer,
  ButtonWrapper,
  Header,
  Subtitle,
  ContentWrapper,
  PhotoWrapper,
} from "./StoryPage.styles";

import PhotoSvg from "./Photo";
import Play from "./Play";
import Readmore from "./readmore";
import { HeadingPrimary } from "@components/Heading";
import VideoModal from "@components/VideoModal";

const StoryPage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StoryContainer id="our-story">
      <ContentWrapper>
        <Content data-aos="fade-up">
          <Header>
            <Subtitle>About us</Subtitle>
            <HeadingPrimary>
              Our Story <br />
              <span>meets</span> yours
            </HeadingPrimary>
          </Header>
          <TextWrapper>
            When I went to medical school I had the dream of becoming a surgeon.
            Little did I know where my journey would lead me. During my fourth
            year of medical school I went through a transformative process where
            I grew tremendously emotionally, spiritually and relationally. As a
            result I found a peace and joy I had never had before. One beautiful
            Saturday morning as I hiked up a Southern California mountainside it
            hit me.
          </TextWrapper>
          <ButtonWrapper to="/our-story">
            <Readmore />
          </ButtonWrapper>
        </Content>
        <PhotoWrapper data-aos="fade-up">
          <div style={{ position: "relative" }}>
            <PhotoSvg />
            <div onClick={handleClickOpen}>
              <Play />
            </div>
          </div>
        </PhotoWrapper>
      </ContentWrapper>
      <VideoModal
          channel="vimeo"
          videoId="368513589"
          open={open}
          handleClose={handleClose}
      />
    </StoryContainer>
  );
};

export default StoryPage;
