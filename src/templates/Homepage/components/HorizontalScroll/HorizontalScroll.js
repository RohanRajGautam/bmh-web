import React, { useEffect, useRef } from "react";
import {
  HorizontalComponent,
  HorizontalComponentTitle,
  HorizontalComponentHeading,
  HorizontalHeading,
  FirstText,
  ServicesWrapper,
  ServicesHeading,
  ServicesItemWrapper,
  ServicesItems,
  SubtitleWrapper,
  HorizontalComponentBlockWrapper,
  HorizontalComponentWrapper,
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
  HorizontalComponentBlock,
  HorizontalComponentBlockWrapperRight,
} from "./HorizontalScroll.styles";
import {
  Services,
  HealingDesc,
  FutureDesc,
  ServicesSecond,
} from "./HorizontalScroll.data";
import FullPageText from "../FullPageText";
import { Collage } from "./components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = props => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:1024px)": function () {
        const sections = gsap.utils.toArray("#horizontal-scroll-item");
        let maxWidth = 0;

        const getMaxWidth = () => {
          maxWidth = 0;
          sections.forEach(section => {
            maxWidth += section.offsetWidth;
          });
        };
        getMaxWidth();
        ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

        gsap.to(sections, {
          x: () => `-${maxWidth - window.innerWidth}`,
          ease: "none",
          scrollTrigger: {
            trigger: "#horizontal-component",
            pin: true,
            scrub: true,
            end: () => `+=${maxWidth + 350}`,
            invalidateOnRefresh: true,
          },
        });

        sections.forEach((sct, i) => {
          ScrollTrigger.create({
            trigger: sct,
            start: () =>
              "top top-=" +
              (sct.offsetLeft - window.innerWidth / 2) *
                (maxWidth / (maxWidth - window.innerWidth)),
            end: () =>
              "+=" +
              sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
            toggleClass: { targets: sct, className: "active" },
          });
        });
      },
    });
  }, []);

  return (
    <HorizontalComponentWrapper>
      <HorizontalComponent id="horizontal-component">
        <HorizontalFullWidthBlock id="horizontal-scroll-item">
          <FullPageText />
        </HorizontalFullWidthBlock>

        <HorizontalComponentTitleImageWrapper id="horizontal-scroll-item">
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

        <HorizontalComponentBlockWrapper id="horizontal-scroll-item">
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

        <HorizontalComponentCollageWrapper id="horizontal-scroll-item">
          <Collage />
        </HorizontalComponentCollageWrapper>

        <HorizontalComponentTitleImageWrapperRight id="horizontal-scroll-item">
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

        <HorizontalComponentBlockWrapperRight id="horizontal-scroll-item">
          <HorizontalComponentBlock>
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
                {ServicesSecond &&
                  ServicesSecond.map((item, index) => (
                    <ServicesItems key={index}>{item}</ServicesItems>
                  ))}
              </ServicesItemWrapper>
            </ServicesWrapperRight>
          </HorizontalComponentBlock>
        </HorizontalComponentBlockWrapperRight>
      </HorizontalComponent>
    </HorizontalComponentWrapper>
  );
};

export default HorizontalScroll;
