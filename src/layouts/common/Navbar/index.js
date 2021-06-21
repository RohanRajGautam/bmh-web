import React from "react";
import { Wrapper, Logolink, Menulink, Nav } from "./Navbar.styles";

import LogoAlt from "@components/SvgComponent/logo-alt";
import { Menu } from "../Sidebar/svg";

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <Logolink to="/">
          <LogoAlt />
        </Logolink>
        <Menulink>
          <Menu />
        </Menulink>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
