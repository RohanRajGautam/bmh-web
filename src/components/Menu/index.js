import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
  MenuImage,
} from "./styled";

import { staticData } from "@layouts/common/Navbar/Navbar.datas";
import DonateBtn from "../../templates/Homepage/components/Donate/DonateBtn";
import HomepageLogo from "@components/SvgComponent/homepage-logo";

const BigMenuComponent = ({ handleBigMenu, bigMenu }) => {
  // React.useEffect(() => {
  //   // disable body-scrolling when modal is open
  //   if (bigMenu) {
  //     document.body.style.position = "fixed";
  //   } else {
  //     document.body.style.position = "initial";
  //   }
  // }, [bigMenu]);

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "nav-donate.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <BigMenu open={bigMenu}>
        <BigMenuInner>
          <BigMenuLeft>
            <MenuImage
              fluid={data.file.childImageSharp.fluid}
              alt="donate-nav"
            />
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
