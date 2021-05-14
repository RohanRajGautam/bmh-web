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
  Anchor,
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
    <Container data-aos="fade-up">
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
        <ServicesHeading>Services</ServicesHeading>
        <ServicesItemWrapper>
          {Services &&
            Services.map((item, index) => (
              <ServicesItems key={index}>
                <Anchor href={item.to} target="_blank">
                  {item.title}
                </Anchor>
              </ServicesItems>
            ))}
        </ServicesItemWrapper>
      </ServicesWrapper>
    </Container>
  );
};

export default ScrollableFirst;
