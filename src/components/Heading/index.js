import styled, { css } from "styled-components";

const primaryColor = "#6CA448";

export const Heading = styled.h2`
  font-size: ${({ big }) => (big ? "4rem;" : "2rem;")};
  user-select: none;
  font-weight: 700;
  color: #2c3336;
  letter-spacing: 0.1px;
  line-height: 140%;
  /* text-transform: capitalize; */
  ${({ clean }) =>
    !clean &&
    css`
      &:after {
        content: "";
        height: 4px;
        background-color: ${primaryColor};
        width: 85px;
        display: block;
        margin-top: 24px;
        @media (min-width: 576px) {
          margin-top: 3rem;
        }
      }
    `}
  @media (min-width:576px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 4.8rem;
  }
`;
