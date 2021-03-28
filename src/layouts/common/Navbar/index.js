import * as React from "react";

import { Logolink, Menulink, Nav } from "./Navbar.styles";

import logo from "../../../images/icons/full-logo.svg";
import menu from "../../../images/icons/Union.svg";

const Navbar = () => (
  <Nav>
    <Logolink to="/">
      <img src={logo} alt="bmh-logo" draggable="false" />
    </Logolink>
    <Menulink>
      <img src={menu} alt="menu" draggable="false" />
    </Menulink>
  </Nav>
);

export default Navbar;
