import React, { useEffect, useState } from "react";

import { Menu, Donate, SmallLogo, RightArrow } from "./svg";

import { Wrapper, Content, Item, ItemWrapper, Text } from "./styled";

import BigMenuComponent from "@components/Menu";

const Sidebar = () => {
  const [bigMenu, setBigMenu] = useState(false);

  const handleBigMenu = e => {
    e.preventDefault();
    setBigMenu(!bigMenu);
  };

  useEffect(() => {
    const logo = document.querySelector(".bmh-logo-sidebar");

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
        <ItemWrapper clicked={bigMenu}>
          <Item
            href="https://www.beautifulmindsmedical.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medical"
          >
            <Text>Medical</Text>
            <RightArrow />
          </Item>
        </ItemWrapper>
        <ItemWrapper clicked={bigMenu}>
          <Item
            href="https://beautifulmindswellness.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Wellness"
          >
            <Text>Wellness</Text>
            <RightArrow />
          </Item>
        </ItemWrapper>
        <ItemWrapper clicked={bigMenu}>
          <Item onClick={handleBigMenu} aria-label="Menu">
            <Menu bigMenu={bigMenu} />
          </Item>
        </ItemWrapper>
        <ItemWrapper clicked={bigMenu}>
          <Item href="/blogs" aria-label="Go to blogs">
            <Text>Blog</Text>
          </Item>
        </ItemWrapper>
        <ItemWrapper clicked={bigMenu}>
          <Item href="/#events" aria-label="Go to events">
            <Text>Events</Text>
          </Item>
        </ItemWrapper>
        <ItemWrapper clicked={bigMenu}>
          <Item
            href="https://beautifulmindswellness.org/donate/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate"
          >
            <Donate />
          </Item>
        </ItemWrapper>
        <ItemWrapper clicked={bigMenu}>
          <Item className="bmh-logo-sidebar" href="/" aria-label="Home">
            <SmallLogo />
          </Item>
        </ItemWrapper>
      </Content>
      <BigMenuComponent handleBigMenu={handleBigMenu} bigMenu={bigMenu} />
    </Wrapper>
  );
};

export default Sidebar;
