import React, { useEffect, useRef } from "react";
import {
  Message,
  TextContainer,
  LogoImg,
  FadedText,
  LogoContainer,
  Smiley,
} from "./FullPageText.styles";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@images/icons/logo.svg";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

const FullPageText = () => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   const element = ref.current;

  // Reveal animations

  // gsap.to(element, {
  //   backgroundImage:
  //     "linear-gradient(45deg, #fff 0%, #2c3336 100%, #fff 200%, #2c3336 300%)",
  //   duration: 2,
  //   ease: "none",

  //   scrollTrigger: {
  //     trigger: element,
  //     start: "top 100%",
  //     end: "bottom 0%",
  //     // end: "bottom left",
  //     scrub: 1,
  //     anticipatePin: true,
  //     // markers: true,
  //   },
  // });

  // text left to right

  // gsap.to(element, {
  //   x: 400,
  //   // backgroundPosition: "500px 0",
  //   scrollTrigger: {
  //     trigger: element,
  //     start: "top 100%",
  //     end: "center center",
  //     scrub: true,
  //   },
  // });

  // const startTrigger = document.querySelector("#bg-transition");

  // const colorToWhite = gsap.fromTo(
  //   startTrigger,
  //   { backgroundColor: "#2C3336" },
  //   { background: "linear-gradient(to right, #2C3336, #fff)" }
  // );

  // ScrollTrigger.create({
  //   trigger: startTrigger,
  //   start: "right right",
  //   end: "+=2",
  //   markers: true,
  //   scrub: 1,
  //   animation: colorToWhite,
  //   //onEnter: () =>
  //   //  gsap.to($section, { backgroundColor: "#232E3E", overwrite: "auto" }),
  //   //onLeaveBack: () =>
  //   //  gsap.to($section, { backgroundColor: "white", overwrite: "auto" })
  // });
  // }, []);

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
