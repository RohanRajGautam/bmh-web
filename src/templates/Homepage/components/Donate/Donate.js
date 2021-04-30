import React from "react";
import {
  DonateWrapper,
  DonateStyle,
  DonateHeading,
  // DonateParagraph,
  DonateColumn,
  DonateButton,
} from "./Donate.styles";

const Donate = () => {
  return (
    <DonateWrapper>
      <DonateStyle>
        <DonateColumn>
          <DonateHeading data-aos="fade-right">
            Let’s start with helping people to get better.
          </DonateHeading>
          {/* <DonateParagraph data-aos="fade-up-right">
            You can support mentally unwell people by donating, we are more than
            happy with what you share
          </DonateParagraph> */}
          <DonateButton
            primary="true"
            data-aos="fade-right"
            to="https://beautifulmindswellness.org/donate/"
            target="_blank"
          >
            Donate
          </DonateButton>
        </DonateColumn>
      </DonateStyle>
    </DonateWrapper>
  );
};

export default Donate;
