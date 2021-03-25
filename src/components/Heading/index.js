import React from "react";
import styled from "styled-components";

const primaryColor = "#6CA448";

const Heading = styled.h2`
  &:after {
    content: "";
    height: 4px;
    background-color: ${primaryColor};
    width: 85px;
    display: block;
    margin-top: 12px;
  }
  font-size: 48px;
  font-weight: 700;
  color: #2c3336;
  letter-spacing: 0.1px;
  text-transform: capitalize;
`;

const H1 = props => <Heading>{props.children}</Heading>;

export default H1;
