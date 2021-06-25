import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(108, 164, 72, 0.5);
    box-shadow: 0 0 0 0 rgba(108, 164, 72, 0.5);
  }
  70% {
    -webkit-box-shadow: 0 0 0 50px rgba(108, 164, 72, 0);
    box-shadow: 0 0 0 50px rgba(108, 164, 72, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(108, 164, 72, 0);
    box-shadow: 0 0 0 0 rgba(108, 164, 72, 0);
  }
`;

const Play = styled.div`
  cursor: pointer;
  display: inline-flex;
  transition: transform 0.3s ease-in-out;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  -webkit-animation: ${pulse} 2s infinite;
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: scale(0.9);
    -webkit-animation: none;
    animation: none;
  }
`;

const PlayButton = () => (
  <Play>
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64.9992" cy="65.0002" r="64.8" fill="#6CA448" />
      <path
        d="M80.2988 59.804C84.2988 62.1134 84.2988 67.8869 80.2988 70.1963L61.8488 80.8485C57.8488 83.1579 52.8488 80.2711 52.8488 75.6523L52.8488 54.3481C52.8488 49.7293 57.8488 46.8425 61.8488 49.1519L80.2988 59.804Z"
        fill="white"
      />
    </svg>
  </Play>
);

export default PlayButton;
