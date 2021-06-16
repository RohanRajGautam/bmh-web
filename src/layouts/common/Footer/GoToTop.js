import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
    svg {
      path:nth-child(1) {
        transform: translateY(-1rem);
        transition: all 0.4s;
        fill: #6ca448;
      }
      circle {
        opacity: 0;
      }
    }
  }
`;

const GoToTop = () => {
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <Wrapper onClick={handleClick}>
      <svg
        width="47"
        height="65"
        viewBox="0 0 47 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.1464 23.757C14.9512 23.9523 14.9512 24.2689 15.1464 24.4641C15.3417 24.6594 15.6583 24.6594 15.8536 24.4641L22.3889 17.9288L28.9242 24.4641C29.1195 24.6594 29.4361 24.6594 29.6313 24.4641C29.8266 24.2689 29.8266 23.9523 29.6313 23.757L22.7424 16.8681C22.5472 16.6729 22.2306 16.6729 22.0353 16.8681L15.1464 23.757ZM21.8889 63.7217C21.8889 63.9978 22.1127 64.2217 22.3889 64.2217C22.665 64.2217 22.8889 63.9978 22.8889 63.7217L22.8889 18.9439C22.8889 18.6678 22.665 18.4439 22.3889 18.4439C22.1127 18.4439 21.8889 18.6678 21.8889 18.9439L21.8889 63.7217Z"
          fill="black"
        />
        <circle
          opacity="0.2"
          cx="23.25"
          cy="23.25"
          r="22.75"
          transform="rotate(-90 23.25 23.25)"
          stroke="#8CA8BE"
        />
      </svg>
    </Wrapper>
  );
};

export default GoToTop;
