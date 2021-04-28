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
          <DonateHeading data-aos="fade-up-left">
            Your love & support can change someone’s life
          </DonateHeading>
          <DonateParagraph data-aos="fade-up-left">
            You can support mentally unwell people by donating, we are more than
            happy with what you share
          </DonateParagraph>
          <DonateButton
            primary="true"
            data-aos="fade-up-left"
            to="https://quickclick.com/cart/cart.php?action=show_information&internal_key=b891033e3f[…]nal_timestamp=1617969086&tid=c2d5699d8721a1f3f7bf3b7a6a46ba5c"
          >
            Donate
          </DonateButton>
        </DonateColumn>
      </DonateStyle>
    </DonateWrapper>
  );
};

export default Donate;
