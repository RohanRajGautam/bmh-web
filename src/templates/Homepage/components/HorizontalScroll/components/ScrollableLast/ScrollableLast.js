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
  Anchor,
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
        <ServicesHeading>Services</ServicesHeading>
        <ServicesItemWrapper>
          {ServicesSecond?.map((item, index) => (
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

export default ScrollableLast;
