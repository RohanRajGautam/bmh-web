import React from "react";
import { menuData } from "@data/MenuData";
import { Wrapper, NavMenu, NavLink } from "./Topbar.styles";

const Topbar = () => {
  return (
    <Wrapper>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink
            to={item.link}
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
