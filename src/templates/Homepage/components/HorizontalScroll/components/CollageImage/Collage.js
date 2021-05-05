import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CollageWrapper, Collage, CollageItems } from "./Collage.styles";
import Image1 from "@images/home/image1.png";
import Image2 from "@images/home/image2.png";
import Image3 from "@images/home/image3.png";
import Image4 from "@images/home/image4.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Collages = () => {
  const [animate, setAnimate] = useState([false, false, false, false]);

  let imageOne = useRef(null);
  let imageTwo = useRef(null);
  let imageThree = useRef(null);
  let imageFour = useRef(null);

  const handleScroll = useCallback(() => {
    const first = imageOne?.current?.getBoundingClientRect().left + 100;
    const second = imageTwo?.current?.getBoundingClientRect().left + 100;
    const third = imageThree?.current?.getBoundingClientRect().left + 100;
    const fourth = imageFour?.current?.getBoundingClientRect().left + 100;

    let arr = [...animate];

    if (first < window?.innerWidth) {
      arr[0] = true;
    }

    if (second < window?.innerWidth) {
      arr[1] = true;
    }

    if (third < window?.innerWidth) {
      arr[2] = true;
    }

    if (fourth < window?.innerWidth) {
      arr[3] = true;
    }

    setAnimate(arr);
  }, [imageOne, imageTwo, imageThree, imageFour]);

  useEffect(() => {
    document.addEventListener("scroll", e => handleScroll(e));
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CollageWrapper>
      <Collage>
        <CollageItems animate={animate[0]} ref={imageOne} url={Image1} />
        <CollageItems animate={animate[1]} ref={imageTwo} url={Image2} />
        <CollageItems animate={animate[2]} ref={imageThree} url={Image3} />
        <CollageItems animate={animate[3]} ref={imageFour} url={Image4} />
      </Collage>
    </CollageWrapper>
  );
};

export default Collages;
