import React from "react";
import { Hidden } from "@material-ui/core";

// components
import {
  Divider,
  FadedText,
  LogoImg,
  Message,
  MobileTextContainer,
  MobileView,
  Quote,
  TextContainer,
} from "./FullPageText.styles";

// images
import logoSm from "@images/icons/logo.svg";

const FullPageText = () => {
  return (
    <TextContainer>
      <Hidden mdUp>
        <MobileTextContainer>
          <MobileView data-aos="zoom-in-right">
            <Quote>“</Quote>
            <br />
            It’s not
            <br />
            just what we do.
            <br />
            <FadedText>It’s who we are.</FadedText>
            <Quote>”</Quote>
          </MobileView>
          <Divider />
          <LogoImg src={logoSm} alt="bmh-logo" draggable="false" />
        </MobileTextContainer>
      </Hidden>
      <Hidden smDown>
        <Message
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          You are a whole person,
          <br /> not a mental illness.
        </Message>
      </Hidden>
    </TextContainer>
  );
};

export default FullPageText;
