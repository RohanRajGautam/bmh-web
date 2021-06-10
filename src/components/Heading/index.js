import styled, { css } from "styled-components";

// export export const Heading = styled.h2`
//   font-size: ${({ big }) => (big ? "4rem;" : "2rem;")};
//   user-select: none;
//   font-weight: 700;
//   color: #2c3336;
//   letter-spacing: 0.1px;
//   line-height: 140%;
//   /* text-transform: capitalize; */
//   ${({ clean }) =>
//     !clean &&
//     css`
//       &:after {
//         content: "";
//         height: 4px;
//         background-color: ${primaryColor};
//         width: 85px;
//         display: block;
//         margin-top: 24px;
//         @media (min-width: 576px) {
//           margin-top: 3rem;
//         }
//       }
//     `}
//   @media (min-width:576px) {
//     font-size: 3rem;
//   }
//   @media (min-width: 1024px) {
//     font-size: 4rem;
//   }
//   @media (min-width: 1200px) {
//     font-size: 4.8rem;
//   }
// `;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 20vh; */
`;
export const HeadingSecondary = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #596166;

  opacity: 0.5;
  text-transform: uppercase;

  margin-bottom: 1.2rem;
`;
export const HeadingPrimary = styled.h3`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 5rem;
  line-height: 120%;

  color: #000000;

  span {
    font-family: Smiley;
    font-size: 5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 6rem;
    letter-spacing: 0em;
  }
`;
