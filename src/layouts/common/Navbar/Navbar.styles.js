import styled, { css } from "styled-components";
import { Link } from "gatsby";

const border = "#C5CCD3";

export const Nav = styled.nav`
  background: transparent;
  display: flex;
  justify-content: space-between;
  /* padding: 1rem calc((100vw - 1300px) / 2); */
  padding: 0 5vw;
  align-items: center;
  z-index: 100;
  position: relative;
  ${props =>
    props.dark
      ? css`
          height: 120px;
          border-bottom: 1px solid ${border};
        `
      : css`
          transform: translateY(2rem);
          height: 80px;
        `}

  @media screen and (max-width: 600px) {
    transform: scale(0.6);
    padding: 0;
    transform: translate(-2rem, -0.7rem);
  }
`;

export const Logolink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    transform: scale(0.6);
    width: 170px;
    height: 30px
    transform: translate(-2rem, 1rem)
  }
`;
export const Menulink = styled.div`
  text-decoration: none;
  cursor: pointer;
`;
