import React from "react";
import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import { Heading } from "@components/Heading";
import styled from "styled-components";
import topImage from "@images/ourstory-bg.jpg";
import bottomImage from "@images/ourstory-desc.jpg";

import { data } from "./data";

const CoverImage = styled.img`
  width: 100vw;
  height: auto;

  @media (max-width: 576px) {
    width: 180vw;
  }
`;

const DescImage = styled.img`
  width: 100%;
  height: auto;
  margin: 5rem 0;
`;

const Wrapper = styled.div`
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
      <CoverImage src={topImage} alt="our-story-bg" />
      <Divider />
      <Wrapper>
        <Title>{data.title}</Title>
        <Description>
          <Desc>{data.desc1}</Desc>
          <Desc>{data.desc2}</Desc>
          <DescImage src={bottomImage} alt="our-story" />
          <Desc>{data.desc3}</Desc>
          <Desc>{data.desc4}</Desc>
        </Description>
      </Wrapper>
    </Layout>
  );
};

export default OurStory;
