import React, { useEffect, useRef } from "react";
import { Message, TextContainer } from "./FullPageText.styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images
gsap.registerPlugin(ScrollTrigger);

const FullPageText = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.to(element, {
      backgroundImage:
        "linear-gradient(45deg, #000 100%, #eee 200%, #000 300%)",
      duration: 1,
      ease: "none",

      scrollTrigger: {
        trigger: element,
        start: "top 75%",
        end: "top 25%",
        scrub: true,
        markers: true,
      },
    });

    const startTrigger = document.querySelector("#bg-transition");

    const colorToWhite = gsap.fromTo(
      startTrigger,
      { backgroundColor: "#000" },
      { background: "linear-gradient(to right, black, white)" }
    );

    ScrollTrigger.create({
      trigger: startTrigger,
      start: "right 98%",
      end: "+=2%",
      markers: true,
      scrub: 1,
      animation: colorToWhite,
      //onEnter: () =>
      //  gsap.to($section, { backgroundColor: "#232E3E", overwrite: "auto" }),
      //onLeaveBack: () =>
      //  gsap.to($section, { backgroundColor: "white", overwrite: "auto" })
    });
  }, []);

  return (
    <>
      <TextContainer id="bg-transition">
        <Message ref={ref}>
          You are a whole person,
          <br /> not a mental illness.
        </Message>
      </TextContainer>
    </>
  );
};

export default FullPageText;
