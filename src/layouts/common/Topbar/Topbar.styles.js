import styled from "styled-components";

export const Wrapper = styled.nav`
  visibility: hidden;
  height: 4rem;
  width: 100%;
  background: #6ca448;
  display: flex;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 2rem;
  height: 100%;
  cursor: pointer;
  font-size: medium;
  font-family: Mulish;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;

  &.active,
  &:hover {
    border-top: 3px solid #fff;
    opacity: 1;
    /* transition: 0.3s; */
  }

  @media (max-width: 576px) {
    margin: 0 1rem;
    font-size: small;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
