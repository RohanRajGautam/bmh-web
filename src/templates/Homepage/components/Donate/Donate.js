import React from "react";
import { Button } from "@components/Button";
import {
  DonateWrapper,
  DonateStyle,
  DonateHeading,
  DonateParagraph,
  DonateColumn,
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
          <Button primary>Donate</Button>
        </DonateColumn>
      </DonateStyle>
    </DonateWrapper>
  );
};

export default Donate;
