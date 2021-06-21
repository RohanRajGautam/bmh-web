import React from "react";

import {
  Wrapper,
  DonateStyle,
  DonateButtonContainer,
  Heading,
  // Big menu
  BigMenu,
  BigMenuInner,
  BigMenuLeft,
  BigMenuCenter,
  BigMenuNavs,
  BigMenuNavTitle,
  BigMenuNavItemWrapper,
  BigMenuNavItem,
  BigMenuRight,
  BigMenuClose,
} from "./styled";

import { staticData } from "@layouts/common/Navbar/Navbar.datas";
import DonateBtn from "../../templates/Homepage/components/Donate/DonateBtn";

const BigMenuComponent = ({ handleBigMenu, bigMenu }) => {
  return (
    <Wrapper>
      <BigMenu open={bigMenu}>
        <BigMenuInner>
          <BigMenuLeft>
            <DonateStyle>
              <Heading>
                Your support
                <br /> can <span>change</span>
                <br />
                someone’s life
              </Heading>
              <DonateButtonContainer>
                <DonateBtn to="https://beautifulmindswellness.org/donate/" />
              </DonateButtonContainer>
            </DonateStyle>
          </BigMenuLeft>
          <BigMenuCenter>
            <BigMenuNavs>
              {staticData.length &&
                staticData.map((item, index) => (
                  <div key={index}>
                    <BigMenuNavTitle>{item.title}</BigMenuNavTitle>
                    <BigMenuNavItemWrapper>
                      {item.items.length &&
                        item.items.map((item, index) => (
                          <BigMenuNavItem key={index}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={item.to}
                              // onClick={handleBigMenu}
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
                width="61"
                height="46"
                viewBox="0 0 61 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 41L42.4978 15.5022"
                  stroke="#15141A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 16L42.4978 41.4978"
                  stroke="#15141A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </BigMenuClose>
          </BigMenuRight>
        </BigMenuInner>
      </BigMenu>
    </Wrapper>
  );
};

export default BigMenuComponent;
