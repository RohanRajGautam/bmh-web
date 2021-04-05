import React from "react";
import {
  DonateWrapper,
  DonateStyle,
  DonateHeading,
  DonateParagraph,
  DonateColumn,
  DonateButton,
} from "./Donate.styles";

const Donate = () => {
  return (
    <DonateWrapper>
      <DonateStyle>
        <DonateColumn>
          <DonateHeading>
            Your love & support can change someone’s life
          </DonateHeading>
          <DonateParagraph>
            You can support mentally unwell people by donating, we are more than
            happy with what you share
          </DonateParagraph>
          <DonateButton primary="true" to="/">
            Donate
          </DonateButton>
        </DonateColumn>
      </DonateStyle>
    </DonateWrapper>
  );
};

export default Donate;
