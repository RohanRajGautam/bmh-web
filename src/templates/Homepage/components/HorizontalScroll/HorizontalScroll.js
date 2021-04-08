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
  HorizontalComponentTitleWrapper,
  HorizontalComponentWrapper,
  HorizontalComponentFourthOrder,
  HorizontalComponentFifthOrder,
  HorizontalComponentMobile,
  HorizontalComponentDesktop,
} from "./HorizontalScroll.styles";
import { Services, HealingDesc, FutureDesc } from "./HorizontalScroll.data";

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
        <HorizontalComponentTitleWrapper>
          <div>
            <HorizontalComponentTitle>Beautiful Minds</HorizontalComponentTitle>
            <HorizontalComponentHeading>Medical</HorizontalComponentHeading>
          </div>
          <HorizontalComponentDesktop>
            <HorizontalComponentTitle>Beautiful Minds</HorizontalComponentTitle>
            <HorizontalComponentHeading>Wellness</HorizontalComponentHeading>
          </HorizontalComponentDesktop>
        </HorizontalComponentTitleWrapper>
        <HorizontalComponentBlockWrapper>
          <HorizontalComponentBlock>
            <Image></Image>
          </HorizontalComponentBlock>
          <HorizontalComponentBlock>
            <SubtitleWrapper>
              <HorizontalHeading>Healing begins here</HorizontalHeading>
            </SubtitleWrapper>
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
          </HorizontalComponentBlock>
          <HorizontalComponentBlock>
            <svg
              width="2836"
              height="611"
              viewBox="0 0 2836 611"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.204102 580.728C261.231 631.483 435.248 660.486 776.033 290.699C1116.82 -79.0888 1936.15 -71.8381 2247.93 181.938C2497.36 384.958 2743.4 406.71 2835.24 392.209"
                stroke="white"
                strokeDasharray="24 32"
              />
            </svg>
          </HorizontalComponentBlock>
          <HorizontalComponentMobile>
            <HorizontalComponentTitle>Beautiful Minds</HorizontalComponentTitle>
            <HorizontalComponentHeading>Wellness</HorizontalComponentHeading>
          </HorizontalComponentMobile>
          <HorizontalComponentFifthOrder>
            <SubtitleWrapper>
              <HorizontalHeading>Empowering your Future</HorizontalHeading>
            </SubtitleWrapper>
            <FirstText>{FutureDesc}</FirstText>
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
          </HorizontalComponentFifthOrder>
          <HorizontalComponentFourthOrder>
            <Image></Image>
          </HorizontalComponentFourthOrder>
        </HorizontalComponentBlockWrapper>
      </HorizontalComponent>
    </HorizontalComponentWrapper>
  );
};

export default HorizontalScroll;
