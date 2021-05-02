import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HorizontalComponentWrapper,
  HorizontalComponent,
  HorizontalFullWidthBlock,
  HorizontalFullWidthBlockSecond,
  HorizontalComponentBlockThird,
  HorizontalComponentCollageWrapper,
  HorizontalComponentBlockForth,
  HorizontalComponentImageLast,
  ImageLast,
} from "./HorizontalScroll.styles";
import {
  Collage,
  FullPageImage,
  FullPageText,
  ScrollableFirst,
  ScrollableLast,
} from "./components";

import imageLast from "@images/home/horizontal-last.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HorizontalScroll = props => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:1024px)": function () {
        let sections = gsap.utils.toArray("#horizontal-scroll-item");

        let timeline = gsap.timeline();

        timeline.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "#container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the is so it feels more natural.
            end: () => "+=" + document.querySelector("#container").offsetWidth,
          },
        });
      },
    });
  }, []);

  return (
    <HorizontalComponentWrapper>
      <HorizontalComponent id="container">
        <HorizontalFullWidthBlock id="horizontal-scroll-item">
          <FullPageText />
        </HorizontalFullWidthBlock>
        <HorizontalFullWidthBlockSecond id="horizontal-scroll-item">
          <FullPageImage />
        </HorizontalFullWidthBlockSecond>
        <HorizontalComponentBlockThird id="horizontal-scroll-item">
          <ScrollableFirst />
        </HorizontalComponentBlockThird>
        <HorizontalComponentCollageWrapper id="horizontal-scroll-item">
          <section>
            <Collage />
          </section>
        </HorizontalComponentCollageWrapper>
        <HorizontalComponentBlockForth id="horizontal-scroll-item">
          <ScrollableLast />
        </HorizontalComponentBlockForth>
        <HorizontalComponentImageLast id="horizontal-scroll-item">
          <ImageLast src={imageLast} type="image/png" />
        </HorizontalComponentImageLast>
      </HorizontalComponent>
    </HorizontalComponentWrapper>
  );
};

export default HorizontalScroll;
