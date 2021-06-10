import React from "react";
import {
  Wrapper,
  HeadingWrapper,
  Title,
  Subtitle,
  ServicesWrapper,
  ServicesItemWrapper,
  WellnessServicesItems,
  Anchor,
} from "./DualPage.styles";
import { WellnessTitle, WellnessDesc, WellnessServices } from "./DualPage.data";

const WellnessPage = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title>{WellnessTitle}</Title>
        <Subtitle>{WellnessDesc}</Subtitle>
      </HeadingWrapper>
      <ServicesWrapper>
        <ServicesItemWrapper style={{ maxWidth: "85rem" }}>
          {WellnessServices.map((item, index) => (
            <WellnessServicesItems key={index}>
              <Anchor href={item.to} target="_blank">
                {item.title}
              </Anchor>
            </WellnessServicesItems>
          ))}
        </ServicesItemWrapper>
      </ServicesWrapper>
    </Wrapper>
  );
};

export default WellnessPage;
