import styled from "styled-components";
import { Link } from "gatsby";

export const Nav = styled.nav`
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 5vw;
  align-items: center;
  z-index: 100;
  top: 0;
  width: 100%;
  position: fixed;
`;

export const Logolink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const Menulink = styled.div`
  text-decoration: none;
  cursor: pointer;

  svg {
    path {
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 960px) {
    display: none;
  }
`;
