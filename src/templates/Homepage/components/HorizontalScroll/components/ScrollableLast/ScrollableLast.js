import React from "react";
import {
  Container,
  LogoContainer,
  SubtitleWrapper,
  HorizontalHeading,
  FirstText,
  ServicesWrapper,
  ServicesHeading,
  ServicesItemWrapper,
  ServicesItems,
} from "./ScrollableLast.styles";
import {
  FutureTitle,
  FutureDesc,
  ServicesSecond,
} from "../../HorizontalScroll.data";
import logo from "@images/icons/logoAlt.svg";

const ScrollableLast = () => {
  return (
    <Container data-aos="zoom-out">
      <LogoContainer src={logo} alt="bhm-logo" />
      <SubtitleWrapper>
        <HorizontalHeading>{FutureTitle}</HorizontalHeading>
      </SubtitleWrapper>
      <FirstText>{FutureDesc}</FirstText>
      <ServicesWrapper>
        <ServicesHeading>
          Services
          <span>
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.872559 0.774292L6.35211 6.25345L11.8313 0.774292"
                stroke="#6CA448"
                strokeWidth="2"
              />
            </svg>
          </span>
        </ServicesHeading>
        <ServicesItemWrapper>
          {ServicesSecond?.map((item, index) => (
            <ServicesItems key={index}>{item}</ServicesItems>
          ))}
        </ServicesItemWrapper>
      </ServicesWrapper>
    </Container>
  );
};

export default ScrollableLast;
