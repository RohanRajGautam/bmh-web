import styled, { css } from "styled-components";
import { SPACING, COLORS } from "@components/constants";
import { HeadingPrimary } from "@components/Heading";
import donate from "@images/nav-donate.png";
import { mediaQueries } from "@components/MediaQueries";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 11.3rem;
  background: #fff;
  height: 100vh;

  border-left: 1px solid #f5f5ef;

  ${mediaQueries("md")`
    display: none;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.8rem;
`;

export const Item = styled.a`
  padding: 3.2rem 0;
  width: 100%;
  text-align: center;

  svg {
    path {
      transition: all 0.4s ease;
    }
  }

  &:nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    border-bottom: 1px solid #f2f2f2;
  }

  &:nth-child(6) {
    padding-top: 0;
  }

  &:nth-child(7) {
    transition: all 0.4s ease;
  }

  &:hover {
    cursor: pointer;

    &:nth-child(1),
    :nth-child(2) {
      svg {
        path:first-child {
          fill: #6ca448;
        }
        path:not(:first-child) {
          transform: translateX(1rem);
          transition: all 0.4s ease;
          fill: #6ca448;
        }
        path:last-child {
          opacity: 0;
        }
      }
    }

    &:nth-child(3) {
      svg {
        g {
          path:last-child {
            fill: #6ca448;
          }
          path:not(:last-child) {
            stroke: #6ca448;
          }
        }
      }
    }

    &:nth-child(4),
    &:nth-child(5) {
      svg {
        path {
          fill: #6ca448;
        }
      }
    }

    &:nth-child(6) {
      transition: all 0.4s ease;
      filter: brightness(1.1);
    }
  }
`;

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

/********************************
 * BIG MENU ********************
 ********************************/

export const BigMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  right: 0;
  top: 0;
  transform: translateX(100%);
  overflow: hidden;
  z-index: 9;
  background-color: #fff;
  transition: all 0.8s ease;
  ${({ open }) =>
    open &&
    css`
      /* height: 100vh;
      width: 100%; */
      transition: all 0.8s ease;
      transform: translateX(0);
      /* right: 0;
      top: 0; */
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
`;

export const BigMenuCenter = styled.div`
  margin: auto;
`;

export const BigMenuRight = styled.div`
  width: 13.3rem;
  border-left: 1px solid ${COLORS.bgGrey};
  display: flex;
  justify-content: center;
  align-items: center;
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
