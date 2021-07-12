import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Heading, HeadingSecondary } from "@components/Heading";
import { SPACING } from "@components/constants";
import { Container } from "@components/Container";
import { mediaQueries } from "@components/MediaQueries";

import ExploreSvg from "./explore";
import arrow from "./Arrow.svg";

const Wrapper = styled(Container)`
  margin-top: ${SPACING.xl};
  position: relative;
  text-align: center;
  @media (max-width: 1260px) {
    height: 40rem;
  }
  @media (max-width: 600px) {
    height: 60vh;
    background-attachment: inherit;
    padding: 5vh 10vw 0 10vw;
  }
`;

const ImageMain = styled(Img)`
height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  top: 0;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: ${SPACING.md};

  ${mediaQueries("sm")`
      margin-top: 2.5rem;
  `}
`;

const Subtitle = styled(HeadingSecondary)`
  opacity: 1;
  color: #fff;
`;

const Title = styled.h3`
  font-family: Smiley;
  font-style: normal;
  font-weight: normal;
  font-size: 6.8rem;
  line-height: 6rem;

  color: #fff;

  span {
    font: inherit;
    position: relative;

    &::after {
      content: url(${arrow});
      position: absolute;
      bottom: 5%;
      left: -5%;
      width: 20px;
      height: 20px;

      ${mediaQueries("sm")`
        content: none;    
      `}
    }
  }
`;

const WellnessCampus = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "wellness-campus.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <ImageMain
        fluid={data.file.childImageSharp.fluid}
        alt="Donate"
        backgroundAttachment="fixed"
      />
      <Content data-aos="fade-up">
        <Heading center>
          <Subtitle>Wellness campus</Subtitle>
          <Title>
            The <span>future</span> of mental health care
          </Title>
        </Heading>
        <ButtonWrapper data-aos="fade-up">
          <ExploreSvg to="/wellness-campus" />
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default WellnessCampus;
