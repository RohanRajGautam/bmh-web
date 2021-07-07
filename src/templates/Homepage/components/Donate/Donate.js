import React from "react";
import {
  DonateWrapper,
  DonateStyle,
  DonateColumn,
  ButtonContainer,
  Heading,
} from "./Donate.styles";

import DonateBtn from "./DonateBtn";
const Donate = () => {
  return (
    <DonateWrapper>
      <DonateStyle>
        <DonateColumn>
          <Heading data-aos="fade-up">
            Your support can <span>change</span>
            <br />
            someone’s life
          </Heading>
          <ButtonContainer data-aos="fade-up">
            <DonateBtn to="https://beautifulmindswellness.org/donate/" />
          </ButtonContainer>
        </DonateColumn>
      </DonateStyle>
    </DonateWrapper>
  );
};

export default Donate;
