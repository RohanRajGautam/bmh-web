import styled, { css } from "styled-components";

import { SPACING, COLORS } from "@components/constants";
import { HeadingPrimary } from "@components/Heading";
import { Container } from "@components/Container";
import { mediaQueries } from "@components/MediaQueries";

import donate from "@images/nav-donate.png";

/********************************
 * BIG MENU ********************
 ********************************/

export const Wrapper = styled.div``;

export const DonateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  padding: 5.2rem;
  height: 100%;

  /* @media (min-width: 768px) {
    justify-content: flex-end;
  } */
`;

export const Heading = styled(HeadingPrimary)`
  color: #fff;
`;

export const DonateButtonContainer = styled.div`
  margin-top: ${SPACING.md};
`;

export const BigMenu = styled(Container)`
  position: fixed;
  height: 100vh;
  /* width: 100%; */
  left: 0;
  top: 0;
  transform: translateY(-100%);
  overflow: hidden;
  z-index: 9;
  background-color: #fff;
  transition: all 0.4s ease;
  ${({ open }) =>
    open &&
    css`
      /* height: 100vh;
     width: 100%; */
      transition: all 0.4s ease;
      transform: translateX(0);
      /* right: 0;
     top: 0; */
    `}

  ${mediaQueries("md")`
   overflow-y: scroll;
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
  display: flex;
  height: 100%;
`;

export const BigMenuLeft = styled.div`
  width: 50rem;
  height: 100%;
  background: url(${donate});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;

  ${mediaQueries("md")`
   display: none;
 `}
`;

export const BigMenuCenter = styled.div`
  margin: auto 0;
`;

export const BigMenuClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  margin-bottom: 15rem;
  /* margin-bottom: 27rem;
 margin-left: 1rem; */

  svg {
    path {
      stroke: ${COLORS.secondary};
    }
  }

  &:hover {
    svg {
      path {
        stroke: ${COLORS.primary};
      }
    }
  }
`;

export const BigMenuNavs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: ${SPACING.lg};
  grid-column-gap: ${SPACING.xl};
  padding: 0 11.6rem;

  @media (max-width: 1500px) {
    grid-column-gap: 8.4rem;
    padding: 0 8.4rem;
  }

  @media (max-width: 1200px) {
    grid-column-gap: 5.2rem;
    padding: 0 5.2rem;
  }

  ${mediaQueries("md")`
   padding: 0 5vw;
 `}

  ${mediaQueries("sm")`
   grid-template-columns: 1fr;
   margin-top: 8.5rem;
   padding-top: 3.2rem;
   padding-left: 3.9rem;
   padding-bottom: 5.4rem;
   grid-row-gap: 5.2rem;
 `}
`;

export const BigMenuNavTitle = styled.h3`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 2.1rem;
  line-height: 3.2rem;

  color: ${COLORS.secondary};
  margin-bottom: ${SPACING.xs};
`;

export const BigMenuNavItemWrapper = styled.ul`
  margin: 0;
`;

export const BigMenuNavItem = styled.li`
  list-style: none;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2.4rem;

  color: #596166;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  a {
    color: inherit;
    font: inherit;
    text-decoration: none;
  }

  &:hover {
    color: ${COLORS.primary};
  }
`;
