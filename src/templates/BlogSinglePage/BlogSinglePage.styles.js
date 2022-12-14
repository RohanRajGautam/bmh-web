import styled from "styled-components";
import Img from "gatsby-image";
import { COLORS } from "@components/constants";
import { Container } from "@components/Container";

export const BlogPageHero = styled(Container)`
  height: 80vh;
  width: 100%;
  margin-top: -80px;
  position: relative;

  @media (max-width: 576px) {
    height: 111vh;
  }
`;

export const BlogPageImage = styled(Img)`
  height: 100%;
  width: 100%;
  filter: brightness(0.7);
`;

export const BlogPageHeroInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.2rem 11.2rem;
  height: 90%;
  width: 100%;
  position: absolute;
  bottom: 0;

  @media (max-width: 1280px) {
    padding: 5vh 5vw;
  }
  @media (max-width: 960px) {
    height: initial;
  }
  @media (max-width: 600px) {
    height: 60%;
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
    font-size: 5rem;
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
  font-family: Mulish !important;
  color: ${COLORS.textBodyGrey};
  line-height: 3.2rem;
  text-align: justify;
  width: 100%;
  @media (min-width: 1280px) {
    padding-right: 8.2rem !important;
  }
  .fusion-text {
    .wp-image-7189 {
      border-radius: 50%;
      max-height: 100px;
      max-width: 100px;
    }
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
    border-radius: 24px;
    margin: 5.2rem auto;
    max-height: 100%;
    max-width: 100%;
    height: 100%;
    width: 100%;
  }

  picture {
    img {
      margin: 0;
    }
  }

  .ck_form_fields {
    padding: 5% 0;

    form {
      button {
        background: #6ca448 !important;
      }
    }
  }

  @media (min-width: 1280px) {
    width: calc(100% - 350px);
  }

  p {
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.6;

    color: #596166 !important;
    margin-bottom: 1.2rem;

    span {
      font: inherit;
      color: #596166 !important;
    }
  }
  .fusion-widget-area {
    display: none;
  }

  .entry-title {
    display: none;
  }

  #attachment_6473 {
    width: 100%;
  }

  ul,
  ol {
    padding: 2rem 0 2rem 2rem;
    li {
      font-family: Mulish;
      font-style: normal;
      font-weight: normal;
      font-size: 1.6rem;
      line-height: 1.6;

      color: #596166;
      span {
        font: inherit;
        color: inherit;
      }
    }
  }

  iframe {
    max-width: 100%;
  }
  figure {
    max-width: 100%;
  }

  h1,
  h2,
  h3 {
    padding: 2rem 0 1.2rem 0;
    color: #6ca448 !important;
    span {
      color: #6ca448 !important;
    }
  }

  h2 {
    font-family: "Merriweather";
    font-size: 3.7rem;
    line-height: 1.2;
    font-weight: bold;
    font-style: normal;

    span {
      font: inherit;
    }
  }

  h2 {
    font-family: "Merriweather";
    font-size: 2.8rem;
    line-height: 1.4;
    font-weight: bold;
    font-style: normal;

    span {
      font: inherit;
    }
  }

  h3 {
    font-family: "Merriweather";
    font-size: 2.1rem;
    line-height: 1.4;
    font-weight: bold;
    font-style: normal;

    span {
      font: inherit;
    }
  }

  em {
    padding-bottom: 3.2rem;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;

    &:hover {
      color: #6ca448;
    }
  }

  figcaption {
    font-style: oblique;
    font-size: 1.2rem;
    text-align: right;
    margin-top: -4rem;
  }

  blockquote {
    background-color: #f6f3f3;
    border-left: 3px solid #6ca448;
    margin: 2rem 0;

    * {
      padding: 2rem;
    }
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
