import styled from "styled-components";
import { Heading } from "@components/Heading";
import { Button } from "@components/Button";
import Story from "@images/our-story.jpg";

export const StoryContainer = styled.div`
  position: relative;
  font-size: 6px;
  padding: 64px 5vw;
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
    padding: 0 5vw;
    margin: 175px 0;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
`;

export const HeadingWrapper = styled(Heading)`
  font-size: 4em;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
  }
  @media (min-width: 1200px) {
    grid-gap: 110px;
  }
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
  font-size: 14px;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #828282;
  text-align: justify;
  padding: 40px 0;
  @media (min-width: 576px) {
    font-size: 3em;
  }
  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;

export const ButtonWrapper = styled(Button)`
  bottom: 0;
  min-width: 100%;
  font-size: 18px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 16px 80px;
    width: auto;
  }
  @media (min-width: 1200px) {
    padding: 18px 120px;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    padding: 25px 162px;
    font-size: 24px;
  }
`;
