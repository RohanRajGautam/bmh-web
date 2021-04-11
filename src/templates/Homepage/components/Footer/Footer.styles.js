import { Link } from "gatsby";
import styled from "styled-components";

const lightBlueGrey = "#C5CCD3";

export const FooterWrapper = styled.div`
  background-color: #2c3336;
  padding: 2rem;

  @media (min-width: 576px) {
    padding: 75px 96px;
  }
`;

export const FooterLogo = styled(Link)`
  img {
    object-fit: cover;
    height: 40px;
    width: auto;
    text-decoration: none;
    cursor: pointer;
    @media (min-width: 600px) {
      height: 55px;
    }
  }
`;

export const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
  align-items: center;

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 5rem;
  }
`;

export const FooterDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 2rem;
  margin-top: 5em;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterItemTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  font-family: Mulish;
  color: #fff;
`;

export const FooterItemList = styled.ul`
  margin: 1rem 0 0 0;
`;

export const FooterItem = styled.li`
  list-style-type: none;
  font-size: 14px;
  color: ${lightBlueGrey};
  font-weight: 300;
  font-family: Mulish;
  line-height: 34px;
`;

export const FooterBrandLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 60px 0;
`;

export const FooterBrandLogo = styled.div`
  padding: 15px;
  img {
    object-fit: cover;
    height: 100%;
    width: auto;
  }
`;

export const FooterCopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const FooterCopyright = styled.div`
  color: ${lightBlueGrey};
  font-size: 12px;
  font-weight: 400px;
  letter-spacing: 0.3px;
  margin-right: 27px;
`;

export const NewsletterWrapper = styled.div`
  font-size: 6px;
  @media (min-width: 1024px) {
    font-size: 8px;
  }
  @media (min-width: 1200px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const NewsletterTitle = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  line-height: 1.7;
  letter-spacing: 0.1px;
  color: ${lightBlueGrey};
  font-weight: 700;
  font-family: Mulish;
`;

export const NewsletterInput = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 36px;
  height: 55px;
  input[type="text"] {
    border: 1px solid #bdbdbd;
    background-color: #fff;
    line-height: 53px;
    width: 70%;
    text-indent: 10px;
    font-family: Mulish;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  @media (min-width: 1024px) {
    border-radius: 8px;
    input {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
  @media (min-width: 1200px) {
    width: auto;
  }
`;

export const NewsletterButton = styled.div`
  width: 30%;
  background-color: #6ca448;
  color: #fff;
  height: 55px;
  font-size: 14px;
  line-height: 53px;
  font-family: Mulish;
  font-weight: 500;
  letter-spacing: 0.1px;
  display: grid;
  place-items: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  @media (min-width: 1024px) {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
