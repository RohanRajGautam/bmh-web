import React from "react";
import { StaticBrandLogo, staticData } from "./Footer.datas";
import {
  FooterBrandLogo,
  FooterBrandLogoWrapper,
  FooterCopyright,
  FooterCopyrightWrapper,
  FooterDetails,
  FooterItem,
  FooterItemList,
  FooterItemTitle,
  FooterLogo,
  FooterWrapper,
} from "./Footer.styles";
import Logo from "@images/icons/full-logo.svg";

const Footer = () => {
  const date = new Date();

  return (
    <FooterWrapper>
      <FooterLogo to="/">
        <img src={Logo} alt="bmh-logo" draggable="false" />
      </FooterLogo>
      <FooterDetails>
        {staticData.map((item, index) => (
          <div key={index}>
            <FooterItemTitle>{item.title}</FooterItemTitle>
            <FooterItemList>
              {item.items.map((obj, index) => (
                <FooterItem key={index}>{obj}</FooterItem>
              ))}
            </FooterItemList>
          </div>
        ))}
      </FooterDetails>
      <FooterBrandLogoWrapper>
        {StaticBrandLogo.map((item, index) => (
          <FooterBrandLogo key={index}>
            <img src={item} alt="brand-logo" draggable="false" />
          </FooterBrandLogo>
        ))}
      </FooterBrandLogoWrapper>
      <FooterCopyrightWrapper>
        <FooterCopyright>
          &copy; {date.getFullYear()} WebPoint Solutions, LLC
        </FooterCopyright>
        <FooterCopyright>Terms & Conditions | Privacy Policies</FooterCopyright>
      </FooterCopyrightWrapper>
    </FooterWrapper>
  );
};

export default Footer;
