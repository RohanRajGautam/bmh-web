import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import { Hidden } from "@material-ui/core";

// components
import {
  ButtonContainer,
  ButtonPrimary,
  ButtonSecondary,
  Divider,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroTextContainer,
  ImageBg,
  ButtonWrapper,
  ButtonText,
} from "./Hero.styles";

// images
import HeroDesktop from "@images/hero-desktop.jpg";

export default function Hero() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  useEffect(() => {
    let tl = new TimelineLite({ delay: 0.4 });
    const bgImg = images.children[0];
    const h1Text = content.children[0].children[0];
    const divider = content.children[0].children[1];
    const pText = content.children[0].children[2];
    const contentButton = content.children[1];

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //Images Animation
    tl.from(bgImg, 0.4, { x: 50, opacity: 0, ease: Power3.easeIn }, 0.6);

    //Content Animation
    tl.from(
      [h1Text, divider, pText, contentButton],
      0.4,
      {
        x: -50,
        opacity: 0,
        ease: Power3.easeIn,
      },
      0.6
    );
  }, []);

  return (
    <HeroContainer ref={el => (app = el)}>
      <HeroContent>
        <HeroItems ref={el => (content = el)}>
          <HeroTextContainer>
            <HeroH1>
              Mental Health for <span>all</span> of You
            </HeroH1>
            <Divider />
            <HeroP>
              We treat and prevent mental illness through
              <span> wholistic medical care & wellness education</span>
            </HeroP>
          </HeroTextContainer>

          <ButtonWrapper>
            <ButtonText>What services do you need?</ButtonText>
            <ButtonContainer>
              <ButtonPrimary
                primary="true"
                round="true"
                target="_blank"
                to="https://www.beautifulmindsmedical.com/"
              >
                Medical
              </ButtonPrimary>
              <ButtonSecondary
                primary="true"
                round="true"
                to="https://beautifulmindswellness.org/"
                target="_blank"
              >
                Wellness
              </ButtonSecondary>
            </ButtonContainer>
          </ButtonWrapper>
        </HeroItems>
      </HeroContent>
      <HeroBg ref={el => (images = el)}>
        <ImageBg src={HeroDesktop} type="image/png" />
      </HeroBg>
    </HeroContainer>
  );
}
