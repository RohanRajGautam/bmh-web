import React from "react";

import {
  Message,
  TextContainer,
  LogoImg,
  FadedText,
  LogoContainer,
  Smiley,
} from "./FullPageText.styles";
import logo from "@images/icons/logo.svg";

const FullPageText = () => {
  return (
    <>
      <TextContainer>
        <Message
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          Where <Smiley>true</Smiley> healing is <Smiley>found</Smiley>
        </Message>
        <LogoContainer data-aos="fade-up" data-aos-duration="1000">
          <LogoImg src={logo} alt="bmh-logo" draggable="false" />
          <FadedText>success stories</FadedText>
        </LogoContainer>
      </TextContainer>
    </>
  );
};

export default FullPageText;
