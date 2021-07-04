import styled from "styled-components";

import { COLORS } from "@components/constants";
import { Container } from "@components/Container";

export const BlogPageHero = styled(Container)`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: -80px;
  background-image: linear-gradient(
      11.06deg,
      #2c3336 -15.64%,
      rgba(44, 51, 54, 0) 75.3%
    ),
    linear-gradient(173.86deg, #2c3336 -10.11%, rgba(44, 51, 54, 0) 73.68%),
    url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media (max-width: 576px) {
    height: 111vh;
  }
`;

export const BlogPageHeroInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.2rem 11.2rem;
  height: 90%;
  position: relative;

  @media (max-width: 1280px) {
    padding: 5vh 5vw;
  }
  @media (max-width: 960px) {
    height: initial;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: auto;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const BlogPageTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BlogPageTitleWrapper = styled.div`
  @media (min-width: 768px) {
    margin-right: auto;
  }
`;

export const BlogPageTitle = styled.h1`
  font-size: 6.8rem;
  font-weight: bold;
  line-height: 8.2rem;
  color: #fff;
  font-family: Merriweather;
  margin-bottom: 2rem;

  @media (max-width: 1280px) {
    font-size: 5.2rem;
    line-height: 1.2;
  }
`;

export const BlogPageMetaWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BlogPageMeta = styled.div`
  font-size: 1.5rem;
  color: #fff;
  font-family: Mulish;

  span {
    margin: 0 9px;
  }
`;

export const BlogPageShare = styled.div`
  padding: 2px 12px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 15px;
  span {
    font-size: 16px;
    line-height: 35px;
    letter-spacing: 0.3px;
    color: #fff;
    font-family: Mulish;
    font-weight: 600;
    margin-right: 17px;
  }
  @media (min-width: 768px) {
    padding: 6px 20px;
    span {
      font-size: 18px;
    }
    svg {
      height: 15px;
    }
  }
`;

export const BlogContentWrapper = styled(Container)`
  padding: 5vh 5vw;
  @media (min-width: 1280px) {
    padding: 8.2rem 11.2rem;
  }
`;

export const BlogContentWithSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BlogContent = styled.div`
  padding-left: 0 !important;
  font-size: 2rem;
  font-family: Mulish;
  color: ${COLORS.textBodyGrey};
  line-height: 3.2rem;
  text-align: justify;
  width: 100%;
  @media (min-width: 1280px) {
    padding-right: 8.2rem !important;
  }
  .fusion-fullwidth {
    padding: 0 !important;
  }
  .fusion-layout-column {
    width: 100% !important;
  }
  .sharedaddy {
    display: none;
  }

  span.fusion-imageframe {
    display: none;
  }

  h1 {
    display: none;
  }

  img {
    /* height: auto;
    max-width: 100%; */
    display: none;
  }

  @media (min-width: 1280px) {
    width: calc(100% - 350px);
  }

  p {
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 32px;

    color: #596166;
  }
  .fusion-widget-area {
    display: none;
  }
  iframe {
    max-width: 100%;
  }
  figure {
    max-width: 100%;
  }
`;

export const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (max-width: 1280px) {
    flex-direction: unset;
    justify-content: center;
  }
`;

export const BlogSidebar = styled.div`
  width: 350px;
  padding: 0;
  text-align: left;
`;

export const BlogSidebarTitle = styled.div`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 2.8rem;
  line-height: 3.9rem;
  color: #2c3336;
  margin-bottom: 3.2rem;
  padding-left: 5.2rem;

  @media (max-width: 1280px) {
    margin-top: 13.6rem;
  }
`;

export const BlogArticleWrapper = styled.div`
  margin-bottom: 70px;
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
    margin-right: 20px;
  }
  @media (min-width: 1280px) {
    margin-right: 0;
    width: 350px;
  }
`;
