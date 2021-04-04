import * as React from "react";

import { Logolink, Menulink, Nav } from "./Navbar.styles";

import logo from "@images/icons/full-logo.svg";
import logoDark from "@images/icons/full-logo.png";
import menu from "@images/icons/Union.svg";
import menuDark from "@images/icons/Union.png";

const Navbar = props => (
  <Nav dark={props.dark}>
    <Logolink to="/">
      <img
        src={props.dark ? logoDark : logo}
        alt="bmh-logo"
        draggable="false"
      />
    </Logolink>
    <Menulink>
      <img src={props.dark ? menuDark : menu} alt="menu" draggable="false" />
    </Menulink>
  </Nav>
);

export default Navbar;
