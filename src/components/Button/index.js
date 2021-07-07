import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    svg {
      path {
        transform: translateX(1rem);
        fill: #6ca448;
        transition: all 0.3s ease-in-out;
      }
      circle {
        opacity: 0;
      }
    }
  }
`;

const Text = styled.h6`
  //styleName: P2;
  font-family: Mulish;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem;
  letter-spacing: 0em;

  color: #6ca448;
`;

const Arrow = styled.span`
  padding-top: 1rem;
  padding-left: 1rem;

  svg {
    path {
      transition: all 0.3s ease-in-out;
    }
    circle {
      transition: all 0.3s ease-in-out;
    }
  }
`;

const Button = ({ to, text, nextPage }) => {
  return (
    <Wrapper
      href={to}
      target={nextPage ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <Text>{text}</Text>
      <Arrow>
        <svg
          width="38"
          height="27"
          viewBox="0 0 38 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.8536 8.64645C23.6583 8.45118 23.3417 8.45118 23.1464 8.64645C22.9512 8.84171 22.9512 9.15829 23.1464 9.35355L26.2929 12.5L0.5 12.5C0.223858 12.5 0 12.7239 0 13C0 13.2761 0.223858 13.5 0.5 13.5L26.2929 13.5L23.1464 16.6464C22.9512 16.8417 22.9512 17.1583 23.1464 17.3536C23.3417 17.5488 23.6583 17.5488 23.8536 17.3536L27.8536 13.3536C28.0488 13.1583 28.0488 12.8417 27.8536 12.6464L23.8536 8.64645Z"
            fill="black"
          />
          <circle opacity="0.2" cx="24" cy="13.5" r="13" stroke="#8CA8BE" />
        </svg>
      </Arrow>
    </Wrapper>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  nextPage: PropTypes.string,
};

export default Button;
