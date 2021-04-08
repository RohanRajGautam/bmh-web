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

export const FooterDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 25px;
  margin-top: 72px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const FooterItemTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-family: Mulish;
  color: #fff;
`;

export const FooterItemList = styled.ul`
  margin: 36px 0 0 0;
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
