import React, { useEffect } from "react";
import { Message, TextContainer } from "./FullPageText.styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images
gsap.registerPlugin(ScrollTrigger);

const FullPageText = () => {
  useEffect(() => {}, []);
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
