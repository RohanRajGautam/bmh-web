import React from "react";
import {
  Wrapper,
  HeadingWrapper,
  Title,
  Subtitle,
  ServicesWrapper,
  ServicesItemWrapper,
  ServicesItems,
  Anchor,
} from "./DualPage.styles";
import { MedicalTitle, MedicalDesc, MedicalServices } from "./DualPage.data";

const MedicalPage = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title>{MedicalTitle}</Title>
        <Subtitle>{MedicalDesc}</Subtitle>
      </HeadingWrapper>
      <ServicesWrapper>
        <ServicesItemWrapper>
          {MedicalServices?.map((item, index) => (
            <ServicesItems key={index}>
              <Anchor href={item.to} target="_blank" rel="noopener noreferrer">
                {item.title}
              </Anchor>
            </ServicesItems>
          ))}
        </ServicesItemWrapper>
      </ServicesWrapper>
    </Wrapper>
  );
};

export default MedicalPage;
