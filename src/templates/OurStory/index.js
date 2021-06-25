import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import { Heading } from "@components/Heading";

import { Container } from "@components/Container";

import { data } from "./data";

const CoverImage = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;

  @media (max-width: 576px) {
    width: 180vw;
  }
`;

const DescImage = styled.div`
  width: 50%;
  height: auto;
  margin: 3rem 0 3rem 5rem;
  float: right;

  @media (max-width: 860px) {
    width: 100%;
  }
`;

const Wrapper = styled(Container)`
  height: auto;
  padding: 5vh 5vw;
`;
const Title = styled(Heading)`
  font-size: 6.4rem;
  color: #6ca448;

  @media (max-width: 576px) {
    font-size: 4.4rem;
  }
`;

const Divider = styled.div`
  width: 5rem;
  height: 5px;
  position: relative;
  background: #fff;
  left: 3rem;
`;
const Description = styled.div`
  margin-top: 4rem;
`;
const Desc = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #5f6468;
  padding-bottom: 2rem;
`;

const OurStory = () => {
  return (
    <Layout dark>
      <Seo title="Our Story" />
      <CoverImage>
        <StaticImage
          src="../../images/ourstory-bg.jpg"
          alt="cover-photo"
          layout="fullWidth"
        />
      </CoverImage>
      <Divider />
      <Wrapper>
        <Title>{data.title}</Title>
        <Description>
          <Desc>{data.desc1}</Desc>
          <Desc>{data.desc2}</Desc>
          <DescImage>
            <StaticImage
              src="../../images/ourstory-desc.jpg"
              alt="desc-photo"
            />
          </DescImage>
          <Desc>{data.desc3}</Desc>
          <Desc>{data.desc4}</Desc>
        </Description>
      </Wrapper>
    </Layout>
  );
};

export default OurStory;
