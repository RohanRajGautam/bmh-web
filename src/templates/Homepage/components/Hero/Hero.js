import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";

// components
import {
  ButtonContainer,
  ButtonPrimary,
  Divider,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroTextContainer,
  ImageBg,
} from "./Hero.styles";

// images
import BackgroundImage from "@images/background-img-hero.jpg";

export default function Hero() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  useEffect(() => {
    let tl = new TimelineLite({ delay: 0.8 });
    const bgImg = images.firstElementChild;
    const h1Text = content.children[0].children[0];
    const divider = content.children[0].children[1];
    const pText = content.children[0].children[2];
    const contentButton = content.children[1];

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //Images Animation
    tl.from(bgImg, 1.2, { y: 1280, ease: Power3.easeOut }, "Start").from(
      bgImg,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );

    //Content Animation
    tl.from(
      [h1Text, divider, pText, contentButton],
      1,
      {
        y: 20,
        opacity: 0,
        ease: Power3.easeInOut,
      },
      1.4
    );
  }, []);

  return (
    <HeroContainer ref={el => (app = el)}>
      <HeroBg ref={el => (images = el)}>
        <ImageBg src={BackgroundImage} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        <HeroItems ref={el => (content = el)}>
          <HeroTextContainer>
            <HeroH1>Get Your Life Back</HeroH1>
            <Divider />
            <HeroP>
              We treat and prevent mental illness
              <span> through medical care & wellness education</span>
            </HeroP>
          </HeroTextContainer>
          <ButtonContainer>
            <ButtonPrimary
              primary="true"
              round="true"
              target="_blank"
              to="https://www.beautifulmindsmedical.com/"
            >
              Medical
            </ButtonPrimary>
            <ButtonPrimary
              primary="true"
              round="true"
              to="https://beautifulmindswellness.org/"
              target="_blank"
            >
              Wellness
            </ButtonPrimary>
          </ButtonContainer>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}
