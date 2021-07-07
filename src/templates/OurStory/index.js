import React, { useState } from "react";
import styled from "styled-components";
import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import { HeadingPrimary } from "@components/Heading";

import { Container } from "@components/Container";
import { data } from "./data";
import { mediaQueries } from "@components/MediaQueries";

import HomepageLogo from "@components/SvgComponent/homepage-logo";
import BannerVector from "@images/home/banner-vector.png";
import bannerImage from "@images/ourstory-bg.png";
import PhotoSvg from "../Homepage/components/Story/Photo";
import Play from "../Homepage/components/Story/Play";
import VideoModal from "@components/VideoModal";

const CoverImage = styled.div`
  overflow: hidden;
  position: relative;

  width: 100%;
  height: 80vh;
  background-image: linear-gradient(
      11.06deg,
      #2c3336 -15.64%,
      rgba(44, 51, 54, 0) 75.3%
    ),
    linear-gradient(173.86deg, #2c3336 -10.11%, rgba(44, 51, 54, 0) 73.68%),
    url(${bannerImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const DescImage = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 5.2rem;
`;

const Wrapper = styled.div`
  height: auto;
  padding: 0 5vw;
  max-width: 160rem;

  @media (min-width: 1260px) {
    padding: 0 11.2rem;
  }
`;
const Title = styled(HeadingPrimary)`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 6.8rem;
  line-height: 8.2rem;
  letter-spacing: -0.02em;
  color: #fff;

  span {
    font-size: inherit;
    line-height: inherit;
  }

  @media (max-width: 600px) {
    font-size: 5rem;
    line-height: 1.2;
  }
`;

const HeadingWrapper = styled.div`
  position: absolute;
  bottom: 15%;
  left: 5vw;

  @media (min-width: 1260px) {
    left: 11.2rem;
  }
`;

const Description = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-gap: 9.6rem;
  grid-template-columns: 0.8fr 1fr;

  @media (max-width: 960px) {
    grid-gap: 5.2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentLeft = styled.div`
  /* flex: 0 0 90% */
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const Desc = styled.p`
  padding-bottom: 5.2rem;
  text-align-last: initial;

  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 160%;

  display: flex;
  align-items: center;

  /* Text/ Body-Grey-02 */
  color: #596166;
`;

const DescLast = styled(Desc)`
  @media (min-width: 960px) and (max-width: 1500px) {
    width: 85%;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 5.2rem;
  left: 5vw;

  @media (max-width: 960px) {
    display: none;
  }

  @media (min-width: 1260px) {
    left: 11.2rem;
  }
`;

export const ImageVector = styled.img`
  position: absolute;
  bottom: -8rem;
  width: 100vw;

  ${mediaQueries("lg")`
    bottom: -5rem;
  `}

  ${mediaQueries("md")`
    bottom: -3rem;
  `}

  ${mediaQueries("sm")`
    width: 115%;
    bottom: -6%;
    transform: rotate(1deg);
    height: 10%;
    left: -5%;
  `}

  @media (min-width: 1600px) {
    bottom: -10rem;
  }
`;

const OurStory = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout dark>
      <Seo title="Our Story" />
      <Container>
        <CoverImage>
          <LogoWrapper>
            <HomepageLogo />
          </LogoWrapper>
          <ImageVector src={BannerVector} type="image/png" draggable="false" />
          <HeadingWrapper>
            <Title>
              Our Story <span>meets</span> <br />
              Yours
            </Title>
          </HeadingWrapper>
        </CoverImage>
        <Wrapper>
          <Description>
            <ContentLeft>
              <Desc>{data.desc1}</Desc>
              <Desc>{data.desc2}</Desc>
              <Desc>{data.desc3}</Desc>
            </ContentLeft>
            <ContentRight>
              <DescImage>
                <div style={{ position: "relative" }}>
                  <PhotoSvg />
                  <div
                    role="presentation"
                    onClick={handleClickOpen}
                    onKeyDown={handleClickOpen}
                  >
                    <Play />
                  </div>
                </div>
              </DescImage>
              <DescLast>{data.desc4}</DescLast>
            </ContentRight>
          </Description>
        </Wrapper>
        <VideoModal
          channel="vimeo"
          videoId="368513589"
          open={open}
          handleClose={handleClose}
        />
      </Container>
    </Layout>
  );
};

export default OurStory;
