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
          height: 80px;
        `}
`;

export const Logolink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  img {
    height: 40px;
  }
  @media (min-width: 576px) {
    img {
      height: auto;
    }
  }
`;
export const Menulink = styled.div`
  text-decoration: none;
  cursor: pointer;
  img {
    height: 20px;
  }
  @media (min-width: 576px) {
    img {
      height: auto;
    }
  }
`;
