import React from "react";
import styled from "styled-components";

import logo from "@images/icons/logo.svg";

const LogoContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-items: center; */
  position: relative;
  /* top: 5rem; */
`;

const FadedText = styled.span`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 3rem;
  text-transform: uppercase;
  color: #fff;
  /* z-index: 1; */
  position: relative;
  text-align: center;
`;

const LogoImg = styled.img`
  opacity: 0.25;
  width: 70px;
  margin-top: 7rem;
  filter: grayscale(1);
  position: absolute;
  left: 30%;
  bottom: -50%;
`;

const LogoWithText = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="bmh-logo" draggable="false" />
      <FadedText>wellness campus</FadedText>
    </LogoContainer>
  );
};

export default LogoWithText;
