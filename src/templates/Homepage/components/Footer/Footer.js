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
  FooterMain,
  NewsletterInput,
  NewsletterTitle,
  NewsletterWrapper,
  NewsletterButton,
} from "./Footer.styles";
import Logo from "@images/icons/full-logo.svg";

const Footer = () => {
  const date = new Date();

  return (
    <FooterWrapper>
      <FooterLogo to="/">
        <img src={Logo} alt="bmh-logo" draggable="false" />
      </FooterLogo>
      <FooterMain>
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
        <NewsletterWrapper>
          <NewsletterTitle>
            Hear from our mental health experts on how you or someone you know
            can beat depression and anxiety
          </NewsletterTitle>
          <NewsletterInput>
            <input type="text" placeholder="Your Email here..." />
            <NewsletterButton>Subscribe</NewsletterButton>
          </NewsletterInput>
        </NewsletterWrapper>
      </FooterMain>
      <FooterBrandLogoWrapper>
        {StaticBrandLogo.map((item, index) => (
          <FooterBrandLogo key={index}>
            <img src={item} alt="brand-logo" draggable="false" />
          </FooterBrandLogo>
        ))}
      </FooterBrandLogoWrapper>
      <FooterCopyrightWrapper>
        <FooterCopyright>
          &copy; {date.getFullYear()} Webpoint Solutions, LLC
        </FooterCopyright>
        <FooterCopyright>Terms & Conditions | Privacy Policies</FooterCopyright>
      </FooterCopyrightWrapper>
    </FooterWrapper>
  );
};

export default Footer;
