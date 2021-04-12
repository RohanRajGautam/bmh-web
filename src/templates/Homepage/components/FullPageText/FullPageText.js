import React from "react";
import { Message, TextContainer } from "./FullPageText.styles";

// images
import logoSm from "@images/icons/logo.svg";

const FullPageText = () => {
  return (
    <TextContainer>
      <Message>
        You are a whole person,
        <br /> not a mental illness.
      </Message>
    </TextContainer>
  );
};

export default FullPageText;
