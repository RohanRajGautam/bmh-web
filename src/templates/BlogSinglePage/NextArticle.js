import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { COLORS } from "@components/constants";

const Wrapper = styled.div`
  margin-top: 22rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    margin-top: 0;
  } ;
`;

const Title = styled.h5`
  //styleName: H5;
  font-family: Merriweather;
  font-size: 2.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #2c3336;

  margin-bottom: 3.2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 140rem;
  height: 60rem;
  background-color: ${COLORS.primary};
  border-radius: 24px;

  @media (max-width: 1024px) {
    height: 50rem;
  }
`;

const Image = styled(Img)`
  height: 100%;
  width: 100%;
  filter: brightness(0.7);
  border-radius: 24px;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 5.2rem;
  bottom: 5.2rem;

  max-width: 84rem;

  @media (max-width: 600px) {
    left: 5vw;
    right: 5vw;
  } ;
`;

const Heading = styled.h1`
  //styleName: H1;
  font-family: Merriweather;
  font-size: 6.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 82px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 4.2rem;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    font-size: 3.2rem;
    line-height: 1.5;
  } ;
`;

const SubHeading = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const Author = styled.p`
  //styleName: P1;
  font-family: Mulish;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const Date = styled(Author)``;

const NextArticle = ({ nextPage }) => {
  return (
    <Wrapper>
      <Title>Next Article</Title>
      <Link to={"/blogs" + nextPage?.uri}>
        <ImageContainer>
          <Image
            fluid={
              nextPage?.featuredImage?.node?.localFile?.childImageSharp?.fluid
            }
            alt="next blog article"
          />
          <TextContainer>
            <Heading>{nextPage?.title}</Heading>
            <SubHeading>
              <Author>By {nextPage?.author?.node?.name}</Author>
              <Date>&nbsp;-&nbsp;{nextPage?.date?.substring(0, 10)}</Date>
            </SubHeading>
          </TextContainer>
        </ImageContainer>
      </Link>
    </Wrapper>
  );
};

export default NextArticle;
