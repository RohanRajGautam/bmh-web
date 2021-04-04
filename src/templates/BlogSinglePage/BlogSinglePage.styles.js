import styled from "styled-components";

const blue = "#427CC5";
const medicalGrey = "#5F6468";
const graniteGrey = "#2C3336";

export const BlogPageHero = styled.div`
  height: 100vh;
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
`;

export const BlogPageHeroInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px 25px;
  position: relative;
  @media (min-width: 768px) {
    padding: 52px 93px;
  }
`;

export const BlogPageTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 8px;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 768px) {
    font-size: 12px;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const BlogPageTitleWrapper = styled.div`
  @media (min-width: 768px) {
    margin-right: 110px;
  }
`;

export const BlogPageTitle = styled.h1`
  font-size: 3em;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1.25;
  color: #fff;
  font-family: Merriweather;
  margin-bottom: 12px;
`;

export const BlogPageMetaWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #fff;
  font-family: Mulish;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const BlogPageMeta = styled.div`
  margin-right: 13px;
  letter-spacing: 0.3px;
`;

export const BlogPageShare = styled.div`
  padding: 2px 12px;
  border-radius: 6px;
  background-color: ${blue};
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

export const BlogContentWrapper = styled.div`
  padding: 70px 45px 70px 93px;
`;

export const BlogContentWithSidebar = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const BlogContent = styled.div`
  font-size: 16px;
  -webkit-letter-spacing: 0.3px;
  -moz-letter-spacing: 0.3px;
  -ms-letter-spacing: 0.3px;
  letter-spacing: 0.3px;
  font-family: Mulish;
  color: ${medicalGrey};
  line-height: 2;
  text-align: justify;
  width: 100%;

  @media (min-width: 1024px) {
    width: calc(100% - 420px);
  }
  @media (min-width: 1440px) {
    width: calc(100% - 500px);
  }
  p {
    margin-bottom: 25px;
  }
`;

export const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const BlogSidebar = styled.div`
  @media (min-width: 1024px) {
    width: 350px;
  }
`;

export const BlogSidebarTitle = styled.div`
  font-family: Mulish;
  font-weight: 700;
  font-size: 24px;
  line-height: 2;
  letter-spacing: 0.3px;
  color: ${graniteGrey};
  margin-bottom: 49px;
`;

export const BlogArticleWrapper = styled.div`
  margin-bottom: 70px;
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
    margin-right: 20px;
  }
  @media (min-width: 1024px) {
    margin-right: 0;
    width: 350px;
  }
`;
