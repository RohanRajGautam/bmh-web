import React from "react";
import { CollageWrapper, Collage, CollageItems } from "./Collage.styles";
import Image1 from "@images/home/image6.png";
import Image2 from "@images/home/image8.png";
import Image3 from "@images/home/image9.png";
import Image4 from "@images/home/image7.png";

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
