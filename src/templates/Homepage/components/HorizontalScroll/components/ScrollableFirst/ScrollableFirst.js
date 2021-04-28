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
  VectorLine,
  VectorDot,
  VectorDotSecond,
  VectorWrapper,
} from "./ScrollableFirst.styles";
import {
  HealingDesc,
  Services,
  HealingTitle,
} from "../../HorizontalScroll.data";
import logo from "@images/icons/Frame.svg";
import vector from "@images/icons/vector-line.svg";

const ScrollableFirst = () => {
  return (
    <Container>
      <LogoContainer src={logo} alt="bhm-logo" />
      <VectorWrapper>
        <VectorDot />
        <VectorLine src={vector} alt="vector-line" />
        <VectorDotSecond />
      </VectorWrapper>
      <SubtitleWrapper>
        <HorizontalHeading>{HealingTitle}</HorizontalHeading>
      </SubtitleWrapper>
      <FirstText>{HealingDesc}</FirstText>
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
          {Services &&
            Services.map((item, index) => (
              <ServicesItems key={index}>{item}</ServicesItems>
            ))}
        </ServicesItemWrapper>
      </ServicesWrapper>
    </Container>
  );
};

export default ScrollableFirst;
