import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  height: 3rem;
  width: 100%;
  background: #6ca448;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: medium;
  font-family: Mulish;
  font-weight: 500;
  opacity: 0.7;

  /* &.active, */
  &:hover {
    border-top: 3px solid #fff;
    opacity: 1;
    /* transition: 0.3s; */
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
