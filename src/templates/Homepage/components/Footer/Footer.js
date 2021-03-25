import React from "react";
import styled from "styled-components";
import Logo from "../../../../images/Frame.png";
import BrandLogo from "../../../../images/brand-logo.png";
import BrandLogo1 from "../../../../images/brand-logo1.png";
import BrandLogo2 from "../../../../images/brand-logo2.png";
import BrandLogo3 from "../../../../images/brand-logo3.png";
import BrandLogo4 from "../../../../images/brand-logo4.png";
import BrandLogo5 from "../../../../images/brand-logo5.png";
import BrandLogo6 from "../../../../images/brand-logo6.png";

const lightBlueGrey = "#C5CCD3";

const FooterWrapper = styled.div`
  padding: 75px 96px;
  background-color: #2c3336;
`;

const FooterLogo = styled.div`
  img {
    object-fit: cover;
    height: 55px;
    width: auto;
  }
`;

const FooterDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 25px;
  margin-top: 72px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const FooterItemTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-family: Mulish;
  color: #fff;
`;

const FooterItemList = styled.ul`
  margin: 36px 0 0 0;
`;

const FooterItem = styled.li`
  list-style-type: none;
  font-size: 14px;
  color: ${lightBlueGrey};
  font-weight: 300;
  font-family: Mulish;
  line-height: 34px;
`;

const FooterBrandLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 60px 0;
`;

const FooterBrandLogo = styled.div`
  padding: 15px;
  img {
    object-fit: cover;
    height: 100%;
    width: auto;
  }
`;

const FooterCopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const FooterCopyright = styled.div`
  color: ${lightBlueGrey};
  font-size: 12px;
  font-weight: 400px;
  letter-spacing: 0.3px;
  margin-right: 27px;
`;

const staticData = [
  {
    title: "Beautiful Minds Wellness",
    items: [
      "Dialectical Behavior Therapy DBT",
      "Intensive Outpatient Program IOP",
      "Psychiatry",
      "Transcranial Magnetic Stimulation TMS",
      "Counseling",
      "Life & Health Coaching",
    ],
  },
  {
    title: "Beautiful Minds Medical",
    items: [
      "Senior Peer Counseling",
      "Live Workshops",
      "Community Events",
      "Online Courses",
      "Webinars",
      "Podcast",
      "YouTube Channel",
    ],
  },
  {
    title: "About",
    items: ["Healing Philosophy", "Our Story", "Events", "Blogs"],
  },
  {
    title: "Get in Touch",
    items: ["Donate", "Volunter", "Visit"],
  },
];

const StaticBrandLogo = [
  BrandLogo,
  BrandLogo1,
  BrandLogo2,
  BrandLogo3,
  BrandLogo4,
  BrandLogo5,
  BrandLogo6,
];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo>
        <img src={Logo} alt="" />
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
            <img src={item} alt="" />
          </FooterBrandLogo>
        ))}
      </FooterBrandLogoWrapper>
      <FooterCopyrightWrapper>
        <FooterCopyright>©2021 WebPoint Solutions, LLC</FooterCopyright>
        <FooterCopyright>Terms & Conditions | Privacy Policies</FooterCopyright>
      </FooterCopyrightWrapper>
    </FooterWrapper>
  );
};

export default Footer;
