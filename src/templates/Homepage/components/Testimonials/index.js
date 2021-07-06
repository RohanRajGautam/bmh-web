import React from "react";
import RellaxWrapper from "react-rellax-wrapper";

import {
  MainContainer,
  Header,
  Cta,
  People,
  BackgroundVector,
  // ContentWrapper,
} from "./styles";
import { HeadingPrimary, HeadingSecondary } from "@components/Heading";
import PlayButton from "@components/SvgComponent/play-button";
import Dots from "@components/SvgComponent/dots";
import VideoModal from "@components/VideoModal";

const Testimonials = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainContainer>
        {/* <ContentWrapper > */}
        <BackgroundVector>
          <RellaxWrapper speed={5} percentage={0.3}>
            <Dots />
          </RellaxWrapper>
        </BackgroundVector>
        <Header data-aos="fade-up">
          <HeadingSecondary>TESTIMONIALS</HeadingSecondary>
          <HeadingPrimary>
            Stories of <span> true</span> <br />
            hope and healing
          </HeadingPrimary>
        </Header>
        <Cta>
          <div
            role="presentation"
            onClick={handleClickOpen}
            onKeyDown={handleClickOpen}
          >
            <PlayButton />
          </div>
        </Cta>
        <People></People>
        {/* </ContentWrapper> */}
      </MainContainer>
      <VideoModal
        channel="youtube"
        videoId="7na2JlF_OQI"
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default Testimonials;
