import React, { useEffect, useRef } from "react";
import {
  HorizontalComponent,
  HorizontalComponentTitle,
  HorizontalComponentHeading,
  HorizontalHeading,
  FirstText,
  ServicesWrapper,
  ServicesHeading,
  ServicesItemWrapper,
  ServicesItems,
  SubtitleWrapper,
  HorizontalComponentBlockWrapper,
  HorizontalComponentTitleImageWrapper,
  HorizontalFullWidthBlock,
  HorizontalFullWidthBlockSecond,
  HorizontalComponentFeaturedImageWrapper,
  HorizontalComponentFeaturedImage,
  HorizontalTitleDotWrapper,
  HorizontalComponentDot,
  HorizontalComponentDotInner,
  DisplayFlex,
  HorizontalComponentDotWrapper,
  HorizontalComponentDotWrapperHealing,
  HorizontalComponentDotHealing,
  HorizontalComponentCollageWrapper,
  HorizontalComponentTitleImageWrapperRight,
  HorizontalComponentFeaturedImageRight,
  HorizontalTitleDotWrapperRight,
  HorizontalComponentHeadingWrapperRight,
  ServicesWrapperRight,
  WellnessSvgWrapper,
  MedicalSvgWrapper,
  HorizontalComponentWrapper,
  HorizontalComponentBlock,
  HorizontalComponentBlockWrapperRight,
  HorizontalComponentBlockThird,
  HorizontalComponentBlockForth,
  HorizontalComponentImageLast,
  ImageLast,
} from "./HorizontalScroll.styles";
import {
  Services,
  HealingDesc,
  FutureDesc,
  ServicesSecond,
  FutureTitle,
  HealingTitle,
} from "./HorizontalScroll.data";
import {
  Collage,
  FullPageImage,
  FullPageText,
  ScrollableFirst,
  ScrollableLast,
} from "./components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@images/icons/Frame.svg";
import logoAlt from "@images/icons/Frame.svg";
import vector from "@images/icons/vector-line.svg";
import imageLast from "@images/home/horizontal-last.png";

const HorizontalScroll = props => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger.matchMedia({
    //   "(min-width:1024px)": function () {
    //     const sections = gsap.utils.toArray("#horizontal-scroll-item");
    //     let maxWidth = 0;
    //     const getMaxWidth = () => {
    //       maxWidth = 0;
    //       sections.forEach(section => {
    //         maxWidth += section.offsetWidth;
    //       });
    //     };
    //     getMaxWidth();
    //     ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
    //     gsap.to(sections, {
    //       x: () => `-${maxWidth - window.innerWidth}`,
    //       ease: "none",
    //       scrollTrigger: {
    //         trigger: "#horizontal-component",
    //         pin: true,
    //         scrub: 1,
    //         // start: "top top",
    //         snap: 1 / (sections.length - 1),
    //         end: () => `+=${maxWidth + 450}`,
    //         invalidateOnRefresh: true,
    //       },
    //     });
    //     sections.forEach((sct, i) => {
    //       ScrollTrigger.create({
    //         trigger: sct,
    //         start: () =>
    //           "top top-=" +
    //           (sct.offsetLeft - window.innerWidth / 2) *
    //             (maxWidth / (maxWidth - window.innerWidth)),
    //         end: () =>
    //           "+=" +
    //           sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
    //         toggleClass: { targets: sct, className: "active" },
    //       });
    //     });
    //   },
    // });
    /*
      horizontal scroll (advanced)
    */
    // let duration = 2,
    //   sections = gsap.utils.toArray("#horizontal-scroll-item"),
    //   tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#horizontal-component",
    //       pin: true,
    //       scrub: 1,
    //       snap: 1 / (sections.length - 1),
    //       // start: "top top",
    //       end: () =>
    //         "+=" + document.querySelector("#horizontal-component").offsetWidth,
    //     },
    //   });
    // tl.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   duration: duration,
    //   ease: "none",
    // });
    /*
      end of advanced horizontal scrolling
    */

    ScrollTrigger.matchMedia({
      "(min-width:1024px)": function () {
        let sections = gsap.utils.toArray("#horizontal-scroll-item");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "#horizontal-component",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () =>
              "+=" +
              document.querySelector("#horizontal-component").offsetWidth,
          },
        });
      },
    });
  }, []);

  return (
    <HorizontalComponentWrapper>
      <HorizontalComponent id="horizontal-component">
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
          <Collage />
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
