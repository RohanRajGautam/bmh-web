import React, { useEffect, useRef } from "react";
import Divider from "@material-ui/core/Divider";

import { menuData } from "@data/MenuData";
import { Wrapper, NavMenu, NavLink } from "./Topbar.styles";

const Topbar = () => {
  return (
    <Wrapper>
      <NavMenu>
        <NavLink
          href="https://www.beautifulmindsmedical.com/"
          target="_blank"
          rel="noopener noreferrer"
          activeClassName="active"
        >
          Medical
        </NavLink>
        <span>|</span>
        <NavLink
          href="https://beautifulmindswellness.org/"
          target="_blank"
          rel="noopener noreferrer"
          activeClassName="active"
        >
          Wellness
        </NavLink>
      </NavMenu>
    </Wrapper>
  );
};

export default Topbar;
