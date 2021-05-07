import React, { useEffect, useRef } from "react";
import {
  Wrapper,
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
  ImagePlaceholder,
  ImageLast,
  TextWrapper,
  ButtonWrapper,
  ImageContent,
} from "./ScrollableLast.styles";
import {
  FutureTitle,
  FutureDesc,
  ServicesSecond,
} from "../../HorizontalScroll.data";
import logo from "@images/icons/logoAlt.svg";
import imageLast from "@images/home/explore_small.jpg";

const ScrollableLast = () => {
  return (
    <Wrapper>
      <Container data-aos="fade-up">
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
      <ImagePlaceholder>
        <ImageLast src={imageLast} type="image/png" />
        <ImageContent>
          <TextWrapper>
            Explore our future <span>→</span>
          </TextWrapper>
          <ButtonWrapper
            primary
            href="https://brojure.com/bmw/overview/"
            target="_blank"
          >
            view wellness center plans
          </ButtonWrapper>
        </ImageContent>
      </ImagePlaceholder>
    </Wrapper>
  );
};

export default ScrollableLast;
