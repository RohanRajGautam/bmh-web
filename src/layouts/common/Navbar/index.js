import React, { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  Logolink,
  Menulink,
  Nav,
  BigMenu,
  BigMenuInner,
  BigMenuLeft,
  BigMenuHeadingWrapper,
  BigMenuHeading,
  BigMenuDonate,
  BigMenuCenter,
  BigMenuNavs,
  BigMenuNavTitle,
  BigMenuNavItemWrapper,
  BigMenuNavItem,
  BigMenuRight,
  BigMenuClose,
  DonateButton,
} from "./Navbar.styles";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import { NavbarItem } from "./Navbar.datas";
import logo from "@images/icons/full-logo.svg";
import logoDark from "@images/icons/full-logo.png";
import menu from "@images/icons/Union.svg";
import menuDark from "@images/icons/Union-Alt.svg";

const Navbar = props => {
  const [bigMenu, setBigMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleBigMenu = e => {
    e.preventDefault();
    setBigMenu(!bigMenu);
  };

  let app = useRef(null);
  let logoAnim = useRef(null);

  useEffect(() => {
    let tl = new TimelineLite({ delay: 0.4 });
    const logoContent = logoAnim.children[0].firstElementChild;
    const donateContent = logoAnim.children[1];
    const menuContent = logoAnim.children[2].firstElementChild;

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    tl.staggerFrom([logoContent, donateContent, menuContent], 0.4, {
      x: 20,
      opacity: 0,
      ease: Power3.easeIn,
      delay: 0.4,
    });
  }, []);

  const changeBackground = () => {
    if (window?.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const isBrowser = () => typeof window !== "undefined";
  isBrowser() && window?.addEventListener("scroll", changeBackground);

  return (
    <Wrapper ref={el => (app = el)}>
      <Nav
        dark={props.dark}
        open={bigMenu}
        ref={el => (logoAnim = el)}
        active={navbar}
      >
        <Logolink to="/">
          <img
            src={props.dark ? logoDark : logo}
            alt="bmh-logo"
            draggable="false"
          />
        </Logolink>
        <DonateButton
          primary
          to="https://beautifulmindswellness.org/donate/"
          target="_blank"
        >
          Donate
        </DonateButton>
        <Menulink onClick={handleBigMenu}>
          <img
            src={props.dark ? menuDark : menu}
            alt="menu"
            draggable="false"
          />
        </Menulink>
        <BigMenu open={bigMenu}>
          <BigMenuInner>
            <BigMenuLeft>
              <BigMenuHeadingWrapper>
                <BigMenuHeading>
                  Your love & support can change someone’s life
                </BigMenuHeading>
              </BigMenuHeadingWrapper>
              <BigMenuDonate
                target="_blank"
                href="https://beautifulmindswellness.org/donate/"
              >
                Donate
              </BigMenuDonate>
            </BigMenuLeft>
            <BigMenuCenter>
              <BigMenuNavs>
                {NavbarItem.length &&
                  NavbarItem.map((item, index) => (
                    <div key={index}>
                      <BigMenuNavTitle>{item.title}</BigMenuNavTitle>
                      <BigMenuNavItemWrapper>
                        {item.list.length &&
                          item.list.map((item, index) => (
                            <BigMenuNavItem key={index}>
                              <a
                                target="_blank"
                                href={item.to}
                                onClick={handleBigMenu}
                              >
                                {item.title}
                              </a>
                            </BigMenuNavItem>
                          ))}
                      </BigMenuNavItemWrapper>
                    </div>
                  ))}
              </BigMenuNavs>
            </BigMenuCenter>

            <BigMenuRight>
              <BigMenuClose onClick={handleBigMenu}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.1123 2.00049L1.99961 33.1132"
                    stroke="#6CA448"
                    strokeWidth="4"
                  />
                  <path
                    d="M33.1123 33.1128L1.99961 2.00009"
                    stroke="#6CA448"
                    strokeWidth="4"
                  />
                </svg>
              </BigMenuClose>
            </BigMenuRight>
          </BigMenuInner>
        </BigMenu>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
