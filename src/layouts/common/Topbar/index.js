import React from "react";
import { menuData } from "@data/MenuData";
import { Wrapper, NavMenu, NavLink } from "./TopBar.styles";

const Topbar = () => {
  return (
    <Wrapper>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink
            href={item.link}
            target="_blank"
            key={index}
            activeClassName="active"
          >
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Wrapper>
  );
};

export default Topbar;
