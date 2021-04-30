import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import {
  Wrapper,
  Logolink,
  Menulink,
  Nav,
  BigMenu,
  BigMenuWrapper,
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
} from "./Navbar.styles";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import { NavbarItem } from "./Navbar.datas";
import logo from "@images/icons/full-logo.svg";
import logoDark from "@images/icons/full-logo.png";
import menu from "@images/icons/Union.svg";
import menuDark from "@images/icons/Union.png";

const Navbar = props => {
  const [bigMenu, setBigMenu] = useState(false);
  const handleBigMenu = e => {
    e.preventDefault();
    setBigMenu(!bigMenu);
  };

  let app = useRef(null);
  let logoAnim = useRef(null);
  let tl = new TimelineLite({ delay: 0.4 });

  useEffect(() => {
    const logoContent = logoAnim.children[0].firstElementChild;
    const menuContent = logoAnim.children[1].firstElementChild;

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    tl.staggerFrom([logoContent, menuContent], 1, {
      x: 20,
      opacity: 0,
      ease: Power3.easeIn,
      delay: 0.4,
    });
  }, []);

  return (
    <Wrapper ref={el => (app = el)}>
      <Nav dark={props.dark} open={bigMenu} ref={el => (logoAnim = el)}>
        <Logolink to="/">
          <img
            src={props.dark ? logoDark : logo}
            alt="bmh-logo"
            draggable="false"
          />
        </Logolink>
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
                              <Link
                                target="_blank"
                                to={item.to}
                                onClick={handleBigMenu}
                              >
                                {item.title}
                              </Link>
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
