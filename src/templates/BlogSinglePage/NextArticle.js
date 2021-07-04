import { graphql, Link, StaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { COLORS } from "@components/constants";

const Wrapper = styled.div`
  margin-top: 22rem;

  display: flex;
  flex-direction: column;
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

  border-radius: 24px;

  background-color: ${COLORS.primary};
  background: linear-gradient(
      11.06deg,
      #2c3336 -15.64%,
      rgba(44, 51, 54, 0) 75.3%
    ),
    url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 5.2rem;
  bottom: 5.2rem;

  max-width: 84rem;
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

const NextArticle = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          category: allWpPost(sort: { fields: date, order: DESC }, limit: 1) {
            nodes {
              title
              date
              uri
              author {
                node {
                  name
                }
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {data?.category?.nodes?.map((item, index) => (
            <Wrapper key={index}>
              <Title>Next Article</Title>
              <Link to={item.uri}>
                <ImageContainer image={item?.featuredImage?.node?.sourceUrl}>
                  <TextContainer>
                    <Heading>{item?.title}</Heading>
                    <SubHeading>
                      <Author>By {item?.author?.node?.name}</Author>
                      <Date>&nbsp;-&nbsp;{item?.date?.substring(0, 10)}</Date>
                    </SubHeading>
                  </TextContainer>
                </ImageContainer>
              </Link>
            </Wrapper>
          ))}
        </>
      )}
    />
  );
};

export default NextArticle;
