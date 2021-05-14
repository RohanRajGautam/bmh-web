import React from "react";
import styled from "styled-components";
import image from "@images/home/FullPageImage.png";

// styled components

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;
`;

const ImageBg = styled.div`
  /* position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; */
`;

function FullPageImage() {
  return (
    <ImageBg>
      <Image src={image} type="image/png" />
    </ImageBg>
  );
}

export default FullPageImage;
