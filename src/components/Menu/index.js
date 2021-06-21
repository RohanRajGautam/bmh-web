import React from "react";

import {
  Wrapper,
  DonateStyle,
  LogoContainer,
  DonateButtonContainer,
  Heading,
  BigMenu,
  BigMenuInner,
  BigMenuLeft,
  BigMenuCenter,
  BigMenuNavs,
  BigMenuNavTitle,
  BigMenuNavItemWrapper,
  BigMenuNavItem,
} from "./styled";

import { staticData } from "@layouts/common/Navbar/Navbar.datas";
import DonateBtn from "../../templates/Homepage/components/Donate/DonateBtn";
import HomepageLogo from "@components/SvgComponent/homepage-logo";

const BigMenuComponent = ({ handleBigMenu, bigMenu }) => {
  return (
    <Wrapper>
      <BigMenu open={bigMenu}>
        <BigMenuInner>
          <BigMenuLeft>
            <DonateStyle>
              <LogoContainer>
                <HomepageLogo />
              </LogoContainer>
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
        </BigMenuInner>
      </BigMenu>
    </Wrapper>
  );
};

export default BigMenuComponent;
