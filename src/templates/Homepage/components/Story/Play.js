import React from "react";
import styled, { keyframes } from "styled-components";

/* bounce animation */
const bounce = keyframes`
  0%,
  25%,
  50%,
  75%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-6px);
  }
`;

/* pulse animation */
const pulse = keyframes`
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(54, 82, 36, 0.5);
    box-shadow: 0 0 0 0 rgba(54, 82, 36, 0.5);
  }
  70% {
    -webkit-box-shadow: 0 0 0 50px rgba(54, 82, 36, 0);
    box-shadow: 0 0 0 50px rgba(54, 82, 36, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(54, 82, 36, 0);
    box-shadow: 0 0 0 0 rgba(54, 82, 36, 0);
  }
`;

const PlayButton = styled.a`
  cursor: pointer;
  position: absolute;
  left: 4%;
  bottom: 13%;

  border-radius: 50%;
  display: inline-flex;
  transition: transform 0.3s ease-in-out;

  /* -webkit-animation: ${bounce} 2s infinite;
  animation: ${bounce} 2s infinite; */
  /* -webkit-animation: ${pulse} 2s infinite;
  animation: ${pulse} 2s infinite; */

  &:hover {
    transform: scale(0.9);
    -webkit-animation: none;
    /* animation: none; */
  }

  @media (max-width: 960px) {
    bottom: 10%;
    svg {
      width: 56px;
    }
  }
`;

const Play = ({ to }) => {
  return (
    <PlayButton href={to} target="_blank" rel="noopener noreferrer">
      <svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="37.9992" cy="38.0002" r="37.8" fill="#6CA448" />
        <path
          d="M49 34.5359C51.6667 36.0755 51.6667 39.9245 49 41.4641L35.5 49.2583C32.8333 50.7979 29.5 48.8734 29.5 45.7942L29.5 30.2058C29.5 27.1266 32.8333 25.2021 35.5 26.7417L49 34.5359Z"
          fill="white"
        />
      </svg>
    </PlayButton>
  );
};

export default Play;
