import React from "react";
import {
  LogoContainer,
  SubtitleWrapper,
  HorizontalHeading,
  FirstText,
  ServicesWrapper,
  ServicesHeading,
  ServicesItemWrapper,
  ServicesItems,
  Anchor,
  ExploreWrapper,
  ExploreText,
} from "./Wellness.styles";
import {
  WellnessTitle,
  WellnessDesc,
  WellnessServices,
} from "../../DualPage.data";
import logo from "@images/icons/logoAlt.svg";

const Wellness = () => {
  return (
    <>
      <LogoContainer src={logo} alt="bhm-logo" />
      <SubtitleWrapper>
        <HorizontalHeading>{WellnessTitle}</HorizontalHeading>
      </SubtitleWrapper>
      <FirstText>{WellnessDesc}</FirstText>
      <ServicesWrapper>
        <ServicesHeading>Services</ServicesHeading>
        <ServicesItemWrapper>
          {WellnessServices?.map((item, index) => (
            <ServicesItems key={index}>
              <Anchor href={item.to} target="_blank">
                {item.title}
              </Anchor>
            </ServicesItems>
          ))}
        </ServicesItemWrapper>
      </ServicesWrapper>
      <ExploreWrapper href="https://brojure.com/bmw/overview/" target="_blank">
        <ExploreText>Explore our Future</ExploreText>
        <span>
          <svg
            width="78"
            height="44"
            viewBox="0 0 78 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="55.1888" cy="21.8333" r="21.3333" stroke="#2C3336" />
            <path
              d="M52.4414 12.2578L61.4009 21.2175L52.4414 30.177"
              stroke="#2C3336"
              stroke-width="3"
            />
            <path d="M61.4028 21.2168H0" stroke="#2C3336" stroke-width="3" />
          </svg>
        </span>
      </ExploreWrapper>
    </>
  );
};

export default Wellness;
