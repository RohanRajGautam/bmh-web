import { Link } from "gatsby";
import styled from "styled-components";
import { Heading } from "@components/Heading";
import Story from "@images/our-story.jpg";

export const StoryContainer = styled.div`
  position: relative;
  font-size: 6px;
  /* padding: 64px 5vw; */
  @media (min-width: 768px) {
    font-size: 8px;
  }
  @media (min-width: 1024px) {
    font-size: 10px;
  }
  @media (min-width: 1200px) {
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
    /* padding: 0 5vw; */
    /* margin: 175px 0; */
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
  padding: 5vh 5vw;
`;

export const HeadingWrapper = styled(Heading)`
  font-size: 4rem;
`;

export const ContentWrapper = styled.div`
  display: grid;
  /* grid-gap: 6rem; */
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  /* @media (min-width: 1200px) {
    grid-gap: 110px;
  } */
`;

export const Thumbnail = styled.div`
  background-image: url(${Story});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-bottom: 80%;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const TextWrapper = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #828282;
  text-align: justify;
  padding-top: 4rem;

  @media (max-width: 860px) {
    font-size: 2rem;
  }
`;

export const ButtonWrapper = styled(Link)`
  display: inline-block;
  font-size: 2.5rem;
  color: #6ca448;
  margin-left: 1rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 860px) {
    font-size: 2rem;
  }
`;
