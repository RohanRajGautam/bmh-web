import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Hidden } from "@material-ui/core";

import logo from "../../../images/icons/full-logo.svg";
import logoSm from "../../../images/icons/logo.svg";
import menu from "../../../images/icons/Union.svg";

const Navbar = () => (
  <Nav>
    <Hidden xsDown>
      <Logolink to="/">
        <img src={logo} alt="bmh-logo" draggable="false" />
      </Logolink>
    </Hidden>
    <Hidden smUp>
      <Logolink to="/">
        <img src={logoSm} alt="bmh-logo" draggable="false" />
      </Logolink>
    </Hidden>
    <Menulink>
      <img src={menu} alt="menu" draggable="false" />
    </Menulink>
  </Nav>
);

export default Navbar;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  /* padding: 1rem calc((100vw - 1300px) / 2); */
  padding: 0 5vw;
  align-items: center;
  z-index: 100;
  position: relative;
  transform: translateY(2rem);
`;

const Logolink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    transform: scale(0.8);
  }
`;
const Menulink = styled.div`
  text-decoration: none;
  cursor: pointer;
`;
