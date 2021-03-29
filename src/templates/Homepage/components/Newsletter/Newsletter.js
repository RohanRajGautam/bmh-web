import React from "react";
import {
  NewsletterInput,
  NewsletterTitle,
  NewsletterWrapper,
  NewsletterButton,
} from "./Newsletter.styles";

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <NewsletterTitle>
        Hear from our mental health experts on how you or someone you know can
        beat depression and anxiety
      </NewsletterTitle>
      <NewsletterInput>
        <input type="text" placeholder="Your Email here..." />
        <NewsletterButton>Subscribe</NewsletterButton>
      </NewsletterInput>
    </NewsletterWrapper>
  );
};

export default Newsletter;
