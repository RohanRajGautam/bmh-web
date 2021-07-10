import React from "react";
import styled from "styled-components";

import { HeadingPrimary } from "@components/Heading";
import { SPACING, COLORS } from "@components/constants";
import Button from "@components/Button";
import VideoModal from "@components/VideoModal";
import WellnessVidThumbnail from "@images/wellness-campus/wellness-vid.jpg";

const Container = styled.div`
  padding-top: ${SPACING.xxl};
  padding-bottom: ${SPACING.xl};

  @media (max-width: 960px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }

  @media (max-width: 600px) {
    padding-top: 13.6rem;
    padding-bottom: 8.4rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Heading = styled.div`
  margin-right: 8rem;
  span {
    color: ${COLORS.primary};
  }

  @media (max-width: 600px) {
    margin-bottom: 5.2rem;
    margin-right: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 47.5rem;
  width: 47.5rem;

  @media (max-width: 600px) {
    width: auto;
  }
`;

const Paragraph = styled.p`
  font-family: Mulish;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem;
  letter-spacing: 0em;
`;

const ButtonWrapper = styled.div`
  margin-top: 3.2rem;
`;

const FutureHeading = styled(HeadingPrimary)`
  @media (max-width: 600px) {
    font-size: 5rem;
    line-height: 6rem;

    span {
      font-size: 5.5rem;
      line-height: 6rem;
    }
  }
`;

// wellness video
const WellnessVideo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.8rem;
`;

const VideoWrap = styled.div`
  width: 150px;
  height: 85px;
  margin-right: 2.4rem;
  background: url(${WellnessVidThumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoText = styled.p`
  width: 208px;
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #6ca448;
`;

const PlayButton = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.9);
    -webkit-animation: none;
    /* animation: none; */
  }
`;

const Play = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="21" cy="21" r="21" fill="#6CA448" />
    <path
      d="M27.112 19.0756C28.5935 19.9309 28.5935 22.0693 27.112 22.9246L19.612 27.2547C18.1305 28.1101 16.2786 27.0409 16.2786 25.3302L16.2786 16.67C16.2786 14.9593 18.1305 13.8901 19.612 14.7455L27.112 19.0756Z"
      fill="white"
    />
  </svg>
);

export const FutureSectionWholistic = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <TextWrapper>
          <Heading>
            <FutureHeading>
              The future <br />
              is <span>wholistic</span>
            </FutureHeading>
          </Heading>
          <Content>
            <Paragraph>
              Since opening our pilot wellness center in February 2021, we have
              begun to see how effective mental health care can be when
              wholistic and traditional treatements are combined. This
              revolutionary healing model is both curative and preventative.
              Finally, a place where mental health treatment is both deeply
              scientific and lovingly wholistic.
            </Paragraph>
            <ButtonWrapper>
              <Button to="/" text="Wellness Treatments" />
            </ButtonWrapper>
            <WellnessVideo>
              <VideoWrap>
                <PlayButton
                  role="presentation"
                  onClick={handleClickOpen}
                  onKeyDown={handleClickOpen}
                >
                  <Play />
                </PlayButton>
              </VideoWrap>
              <VideoText>Tour our Pilot Wellness Center</VideoText>
            </WellnessVideo>
          </Content>
        </TextWrapper>
      </Container>
      <VideoModal
        channel="youtube"
        videoId="o02jpJbS3aI"
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export const FutureSectionHealthy = () => {
  return (
    <Container>
      <TextWrapper>
        <Heading>
          <FutureHeading>
            The future <br />
            is <span>healthy</span>
          </FutureHeading>
        </Heading>
        <Content>
          <Paragraph>
            Healthy healing principles will not only be learned, but experienced
            through access to walking paths, a whole-foods café, life & health
            coaching, spiritual growth groups and an acknowledgment that the
            creator God is the true source of wisdom and healing.
          </Paragraph>
          <ButtonWrapper>
            <Button to="/" text="Read more" />
          </ButtonWrapper>
        </Content>
      </TextWrapper>
    </Container>
  );
};
