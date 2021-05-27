import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { Button } from "@components/Button";

const border = "#C5CCD3";
const menuBorder = "rgba(95, 100, 104, 0.2)";
const graniteGrey = "#2C3336";
const lightBlueGrey = "#C5CCD3";

export const Nav = styled.nav`
  background: transparent;
  /* background: ${props => (props.active ? "#2c3336" : "transparent")} */
  display: flex;
  justify-content: space-between;
  /* padding: 1em calc((100vw - 1300px) / 2); */
  padding: 0 5vw;
  align-items: center;
  z-index: 100;
  top: 0;
  /* position: relative; */
  width: 100%;
  position: relative;

  @media (min-width: 860px) {
    /* padding-top: 3rem; */
  }

  ${props =>
    props.dark
      ? css`
          height: 120px;
        `
      : css`
          height: 80px;
        `};

  @media (max-width: 860px) {
    position: fixed;
    ${({ active }) =>
      active &&
      `
    transition: background 0.5s ease;
    background: #2c3336;
    
    
    `}

    ${({ dark }) =>
      dark &&
      `
      background: #fff;
      border-bottom: 1px solid #C5CCD3;
      height: 70px
    `}
  }
`;

export const Logolink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  img {
    height: 40px;
  }
  @media (min-width: 860px) {
    img {
      height: auto;
    }
  }
`;

export const DonateButton = styled(Button)`
  text-transform: uppercase;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  margin-left: auto;
  font-size: 1.5rem;
  margin-right: 4rem;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Menulink = styled.div`
  text-decoration: none;
  cursor: pointer;
  img {
    height: 20px;
  }
  @media (min-width: 860px) {
    img {
      height: auto;
    }
  }
`;

export const BigMenu = styled.div`
  height: 0px;
  width: 0px;
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  right: calc(5vw + 10px);
  z-index: 100;
  margin-bottom: 2px;
  font-size: 10px;
  transition: all 500ms;
  ${({ open }) =>
    open &&
    css`
      height: 100vh;
      width: 100%;
      transition: all 500ms;
      right: 0;
      top: 0;
    `}
`;

export const BigMenuWrapper = styled.div`
  overflow: hidden;
  ${({ open }) =>
    open &&
    css`
      height: 100vh;
      width: 100vw;
    `}
`;

export const BigMenuInner = styled.div`
  display: grid;
  grid-template-columns: 30% 60% 10%;
  @media (min-width: 992px) {
    height: 100%;
  }
`;

export const BigMenuLeft = styled.div`
  padding: 40px 15px;
  font-size: 5px;
  grid-column: 1/3;
  @media (min-width: 600px) {
    padding-left: 2rem;
  }
  @media (min-width: 992px) {
    grid-column: 1/2;
    grid-row: 1;
    margin: auto;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
  @media (min-width: 1824px) {
    font-size: 10px;
  }
`;

export const BigMenuCenter = styled.div`
  font-size: 5px;
  grid-column: 1/4;
  grid-row: 2;
  padding: 40px 15px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  @media (min-width: 600px) {
    padding: 40px;
    grid-column: 1/3;
    border-right: 1px solid ${menuBorder};
    border-left: 1px solid ${menuBorder};
  }

  @media (min-width: 992px) {
    grid-column: 2/3;
    grid-row: 1;
    margin: auto;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
  @media (min-width: 1824px) {
    font-size: 10px;
  }
`;

export const BigMenuRight = styled.div`
  padding: 15px 0;
  font-size: 5px;
  @media (min-width: 992px) {
    padding: 15em 0;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
  @media (min-width: 1824px) {
    font-size: 10px;
  }
`;

export const BigMenuClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    height: 14px;
    width: 14px;
  }
  @media (min-width: 768px) {
    svg {
      height: 16px;
      width: 16px;
    }
  }
  @media (min-width: 1024px) {
    svg {
      height: 20px;
      width: 20px;
    }
  }
  @media (min-width: 1200px) {
    svg {
      height: 24px;
      width: 24px;
    }
  }
  @media (min-width: 1440px) {
    svg {
      height: 30px;
      width: 30px;
    }
  }
  @media (min-width: 1824px) {
    svg {
      height: 35px;
      width: 35px;
    }
  }
`;

export const BigMenuHeading = styled.h2`
  font-family: Mulish;
  font-weight: 700;
  color: ${graniteGrey};
  line-height: 1.7;
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
  @media (min-width: 600px) {
    width: 75%;
    font-size: 24px;
  }
  @media (min-width: 992px) {
    text-align: left;
    width: 100%;
    margin: 0;
  }
  @media (min-width: 1440px) {
    font-size: 3.4rem;
  }
`;

export const BigMenuHeadingWrapper = styled.div`
  margin-bottom: 10px;
  @media (min-width: 600px) {
    margin-bottom: 30px;
  }
  @media (min-width: 992px) {
    margin-bottom: 64px;
  }
`;

export const BigMenuDonate = styled(Button)`
  background-color: #7dbe66;
  color: #fff;
  display: block;
  margin: 0 auto;

  @media (min-width: 992px) {
    margin: 0;
  }
`;

export const BigMenuNavs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 4rem;
  grid-column-gap: 2rem;
  font-size: 5px;
  @media (min-width: 600px) {
    grid-row-gap: 8rem;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
  @media (min-width: 1824px) {
    font-size: 10px;
    grid-column-gap: 8rem;
  }
`;

export const BigMenuNavTitle = styled.h3`
  color: ${lightBlueGrey};
  font-size: 3.2em;
  font-weight: 700;
  font-family: Mulish;
  letter-spacing: 0.1px;
  margin-bottom: 15px;
  @media (min-width: 600px) {
    margin-bottom: 24px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 36px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const BigMenuNavItemWrapper = styled.ul`
  margin: 0;
`;
export const BigMenuNavItem = styled.li`
  list-style: none;
  font-size: 12px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  a {
    color: ${graniteGrey};
    line-height: 25px;
    letter-spacing: 0.1px;
    font-family: Mulish;
    text-decoration: none;
  }
  @media (min-width: 600px) {
    font-size: 14px;
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
  @media (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const Wrapper = styled.div`
  visibility: hidden;
`;
