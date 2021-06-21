import React, { useEffect, useState } from "react";

import {
  Medical,
  Wellness,
  Menu,
  Blog,
  Events,
  Donate,
  SmallLogo,
} from "./svg";

import { Wrapper, Content, Item } from "./styled";

import BigMenuComponent from "@components/Menu";

const Sidebar = () => {
  const [bigMenu, setBigMenu] = useState(false);

  const handleBigMenu = e => {
    e.preventDefault();
    setBigMenu(!bigMenu);
  };

  useEffect(() => {
    const logo = document.getElementById("bmh-logo");

    const revealLogo = () => {
      const y = window.scrollY;
      if (y >= 80) {
        logo.style.opacity = "1";
      } else {
        logo.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", revealLogo);

    return () => {
      window.removeEventListener("scroll", revealLogo);
    };
  });

  return (
    <Wrapper>
      <Content>
        <Item
          href="https://www.beautifulmindsmedical.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Medical />
        </Item>
        <Item
          href="https://beautifulmindswellness.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Wellness />
        </Item>
        <Item onClick={handleBigMenu}>
          <Menu />
        </Item>
        <Item href="/blog-cat">
          <Blog />
        </Item>
        <Item href="#events">
          <Events />
        </Item>
        <Item
          href="https://beautifulmindswellness.org/donate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Donate />
        </Item>
        <Item id="bmh-logo" href="/">
          <SmallLogo />
        </Item>
      </Content>
      <BigMenuComponent handleBigMenu={handleBigMenu} bigMenu={bigMenu} />
    </Wrapper>
  );
};

export default Sidebar;
