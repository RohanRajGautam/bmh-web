import React, { useState } from "react";
import { Wrapper, Logolink, Menulink, Nav } from "./Navbar.styles";

import LogoAlt from "@components/SvgComponent/logo-alt";
import { Menu } from "../Sidebar/svg";
import BigMenuComponent from "@components/Menu";

const Navbar = () => {
  const [bigMenu, setBigMenu] = useState(false);

  const handleBigMenu = e => {
    e.preventDefault();
    setBigMenu(!bigMenu);
  };

  return (
    <Wrapper>
      <Nav>
        <Logolink to="/">
          <LogoAlt />
        </Logolink>
        <Menulink onClick={handleBigMenu}>
          <Menu bigMenu={bigMenu} />
        </Menulink>
      </Nav>
      <BigMenuComponent handleBigMenu={handleBigMenu} bigMenu={bigMenu} />
    </Wrapper>
  );
};

export default Navbar;
