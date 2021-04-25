import React from "react";
import { CollageWrapper, Collage, CollageItems } from "./Collage.styles";
import Image1 from "@images/home/image1.png";
import Image2 from "@images/home/image2.png";
import Image3 from "@images/home/image3.png";
import Image4 from "@images/home/image4.png";

const Collages = props => {
  return (
    <CollageWrapper>
      <Collage>
        <CollageItems url={Image1}></CollageItems>
        <CollageItems url={Image2}></CollageItems>
        <CollageItems url={Image3}></CollageItems>
        <CollageItems url={Image4}></CollageItems>
      </Collage>
    </CollageWrapper>
  );
};

export default Collages;
