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
  margin-top: 5vh;
`;

export const HeadingWrapper = styled(Heading)`
  @media (max-width: 576px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.6rem;
  }
  @media (min-width: 1824px) {
    font-size: 5rem;
  }
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
  font-size: 2rem;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #828282;
  text-align: justify;
  padding-top: 4rem;

  @media (max-width: 860px) {
    font-size: 2rem;
  }

  @media (min-width: 1824px) {
    font-size: 2.6rem;
  }
`;

export const ButtonWrapper = styled(Link)`
  &,
  &:link,
  &:visited {
    font-size: 2rem;
    color: #6ca448;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #6ca448;
    padding: 3px;
    transition: all 0.2s;
  }

  &:hover {
    background-color: #6ca448;
    color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 860px) {
    font-size: 2rem;
  }
`;
