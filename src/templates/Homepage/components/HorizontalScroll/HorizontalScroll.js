import React, { useEffect, useRef } from "react";
import {
  HorizontalComponent,
  HorizontalComponentBlock,
  HorizontalComponentTitle,
  HorizontalComponentHeading,
  Image,
  HorizontalHeading,
  FirstText,
  ServicesWrapper,
  ServicesHeading,
  ServicesItemWrapper,
  ServicesItems,
  SubtitleWrapper,
  HorizontalComponentBlockWrapper,
  HorizontalComponentWrapper,
  HorizontalComponentFourthOrder,
  HorizontalComponentFifthOrder,
  HorizontalComponentMobile,
  HorizontalComponentTitleImageWrapper,
  HorizontalFullWidthBlock,
  HorizontalComponentFeaturedImageWrapper,
  HorizontalComponentFeaturedImage,
  HorizontalTitleDotWrapper,
  HorizontalComponentDot,
  HorizontalComponentDotInner,
  DisplayFlex,
  HorizontalComponentDotWrapper,
  HorizontalComponentDotWrapperHealing,
  HorizontalComponentDotHealing,
  HorizontalComponentCollageWrapper,
  HorizontalComponentTitleImageWrapperRight,
  HorizontalComponentFeaturedImageRight,
  HorizontalTitleDotWrapperRight,
  HorizontalComponentHeadingWrapperRight,
  ServicesWrapperRight,
  WellnessSvgWrapper,
  MedicalSvgWrapper,
} from "./HorizontalScroll.styles";
import { Services, HealingDesc, FutureDesc } from "./HorizontalScroll.data";
import FullPageText from "../FullPageText";
import { Collage } from "./components";

const HorizontalScroll = props => {
  const horizontalScroll = useRef();

  const handleScroll = e => {
    // console.log(horizontalScroll.current.getBoundingClientRect());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HorizontalComponentWrapper ref={horizontalScroll}>
      <HorizontalComponent>
        <HorizontalFullWidthBlock>
          <FullPageText />
        </HorizontalFullWidthBlock>

        <HorizontalComponentTitleImageWrapper>
          <HorizontalComponentTitle>Beautiful Minds</HorizontalComponentTitle>

          <HorizontalTitleDotWrapper>
            <HorizontalComponentHeading>Medical</HorizontalComponentHeading>
            <HorizontalComponentDotWrapper>
              <HorizontalComponentDot>
                <HorizontalComponentDotInner></HorizontalComponentDotInner>
              </HorizontalComponentDot>
              <MedicalSvgWrapper>
                <svg
                  width="296"
                  height="117"
                  viewBox="0 0 296 117"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.8329C50.8333 -2.50043 146.5 -11.5 203.5 49.8329C245.471 94.9941 282.167 118.499 295 115.333"
                    stroke="#5F6468"
                    stroke-dasharray="15 17"
                  />
                </svg>
              </MedicalSvgWrapper>
            </HorizontalComponentDotWrapper>
          </HorizontalTitleDotWrapper>

          <HorizontalComponentFeaturedImageWrapper>
            <HorizontalComponentFeaturedImage></HorizontalComponentFeaturedImage>
          </HorizontalComponentFeaturedImageWrapper>
        </HorizontalComponentTitleImageWrapper>

        <HorizontalComponentBlockWrapper>
          <HorizontalComponentCollageWrapper>
            <DisplayFlex>
              <HorizontalComponentDotWrapperHealing>
                <HorizontalComponentDotHealing>
                  <HorizontalComponentDotInner></HorizontalComponentDotInner>
                </HorizontalComponentDotHealing>
                <svg
                  width="94"
                  height="85"
                  viewBox="0 0 94 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 1C30.5 17 50 87 93.5 83.5"
                    stroke="#5F6468"
                    stroke-dasharray="15 17"
                  />
                </svg>
              </HorizontalComponentDotWrapperHealing>
              <SubtitleWrapper>
                <HorizontalHeading>Healing begins here</HorizontalHeading>
              </SubtitleWrapper>
            </DisplayFlex>

            <FirstText>{HealingDesc}</FirstText>
            <ServicesWrapper>
              <ServicesHeading>
                Services
                <span>
                  {" "}
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
                      stroke-width="2"
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
          </HorizontalComponentCollageWrapper>
        </HorizontalComponentBlockWrapper>

        <HorizontalComponentCollageWrapper>
          <Collage />
        </HorizontalComponentCollageWrapper>

        <HorizontalComponentTitleImageWrapperRight>
          <HorizontalComponentTitle>Beautiful Minds</HorizontalComponentTitle>
          <HorizontalTitleDotWrapper>
            <HorizontalTitleDotWrapperRight>
              <HorizontalComponentDot>
                <HorizontalComponentDotInner></HorizontalComponentDotInner>
              </HorizontalComponentDot>
            </HorizontalTitleDotWrapperRight>
            <HorizontalComponentHeadingWrapperRight>
              <HorizontalComponentHeading>Wellness</HorizontalComponentHeading>
              <WellnessSvgWrapper>
                <svg
                  width="451"
                  height="74"
                  viewBox="0 0 451 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1C32 81.5 333.5 -14.4999 450 73.5"
                    stroke="#5F6468"
                    stroke-dasharray="15 17"
                  />
                </svg>
              </WellnessSvgWrapper>
            </HorizontalComponentHeadingWrapperRight>
          </HorizontalTitleDotWrapper>

          <HorizontalComponentFeaturedImageWrapper>
            <HorizontalComponentFeaturedImageRight />
          </HorizontalComponentFeaturedImageWrapper>
        </HorizontalComponentTitleImageWrapperRight>

        <HorizontalComponentBlockWrapper>
          <HorizontalComponentMobile>
            <HorizontalComponentTitle>Beautiful Minds</HorizontalComponentTitle>
            <HorizontalComponentHeading>Wellness</HorizontalComponentHeading>
          </HorizontalComponentMobile>
          <HorizontalComponentFifthOrder>
            <DisplayFlex>
              <HorizontalComponentDotWrapperHealing>
                <HorizontalComponentDotHealing>
                  <HorizontalComponentDotInner></HorizontalComponentDotInner>
                </HorizontalComponentDotHealing>
                <svg
                  width="94"
                  height="85"
                  viewBox="0 0 94 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 1C30.5 17 50 87 93.5 83.5"
                    stroke="#5F6468"
                    stroke-dasharray="15 17"
                  />
                </svg>
              </HorizontalComponentDotWrapperHealing>
              <SubtitleWrapper>
                <HorizontalHeading>Empowering your Future</HorizontalHeading>
              </SubtitleWrapper>
            </DisplayFlex>
            <FirstText>{FutureDesc}</FirstText>
            <ServicesWrapperRight>
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
                      stroke-width="2"
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
            </ServicesWrapperRight>
          </HorizontalComponentFifthOrder>
          <HorizontalComponentFourthOrder></HorizontalComponentFourthOrder>
        </HorizontalComponentBlockWrapper>
      </HorizontalComponent>
    </HorizontalComponentWrapper>
  );
};

export default HorizontalScroll;
