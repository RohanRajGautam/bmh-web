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
} from "./MedicalPage.styles";
import logo from "@images/icons/Frame.svg";
import {
  MedicalTitle,
  MedicalDesc,
  MedicalServices,
} from "../../DualPage.data";

const MedicalPage = () => {
  return (
    <>
      <LogoContainer src={logo} alt="bhm-logo" />
      <SubtitleWrapper>
        <HorizontalHeading>{MedicalTitle}</HorizontalHeading>
      </SubtitleWrapper>
      <FirstText>{MedicalDesc}</FirstText>
      <ServicesWrapper>
        <ServicesHeading>Services</ServicesHeading>
        <ServicesItemWrapper>
          {MedicalServices?.map((item, index) => (
            <ServicesItems key={index}>
              <Anchor href={item.to} target="_blank">
                {item.title}
              </Anchor>
            </ServicesItems>
          ))}
        </ServicesItemWrapper>
      </ServicesWrapper>
    </>
  );
};

export default MedicalPage;
