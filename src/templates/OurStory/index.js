import React from "react";
import styled from "styled-components";
import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import { HeadingPrimary } from "@components/Heading";

import { Container } from "@components/Container";
import Image from "@components/Image";
import { data } from "./data";

import FullLogoAlt from "@images/icons/full-logo-alt";


const CoverImage = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;

  position: relative;

  @media (max-width: 960px) {
    width: 180vw;
  }
`;

const DescImage = styled.div`
  height: auto;
    width: 100%;

    padding: 5.2rem 0;

  @media (min-width: 860px) {
  width: 50%;
    padding: 0 0 5.2rem 5.2rem;
  float: right;

  }
`;

const Wrapper = styled.div`
  height: auto;
  padding: 5vh 5vw;
  max-width: 140rem;
  margin: 0 auto;
`;
const Title = styled(HeadingPrimary)`
  /* H2 */
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 6.8rem;
  line-height: 8.2rem;

  span {
    font-size: inherit;
    line-height: inherit;
  }

  /* Text/Hd-Grey-01 */
  color: #15141a;

  @media (max-width: 576px) {
    font-size: 5rem;
  line-height: 1.2;

  

    
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

const LogoWrapper = styled.div`
  a {
    position: absolute;
    top: 3vh;
    left: 5vw;
  }
`;

const OurStory = () => {
  return (
    <Layout dark>
      <Seo title="Our Story" />
      <Container>
          <CoverImage>
            <Image src="ourstory-bg.png" />
          <LogoWrapper>
              <FullLogoAlt to="/" />
            </LogoWrapper>
          </CoverImage>
          <Divider />
          <Wrapper>
            <Title>
              Our Story <span>meets</span> Yours
            </Title>
            <Description>
              <Desc>{data.desc1}</Desc>
              <Desc>{data.desc2}</Desc>
              <DescImage>
                <Image src="ourstory-desc.jpg" style={{ borderRadius: "24px" }} />
              </DescImage>
              <Desc>{data.desc3}</Desc>
              <Desc>{data.desc4}</Desc>
            </Description>
          </Wrapper>
      </Container>
    </Layout>
  );
};

export default OurStory;
