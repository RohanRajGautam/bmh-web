import styled from "styled-components";
import donate from "@images/homepage-donate.png";
import { Container } from "@components/Container";
import { SPACING } from "@components/constants";
import { HeadingPrimary } from "@components/Heading";

export const DonateWrapper = styled(Container)`
  height: 50vh;
  background: url(${donate});
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  /* @media (min-width: 768px) {
    padding: 0;
    padding-top: 40%;
    position: relative;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    padding: 15vw 0vw;
  } */
`;

export const DonateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 11.3rem;

  height: 100%;

  /* @media (min-width: 768px) {
    justify-content: flex-end;
  } */
`;

export const DonateColumn = styled.div``;

// export const DonateButton = styled(Button)`
//   display: block;
//   padding: 2rem 0;
//   width: 80%;
//   margin-top: 2rem;
//   @media (max-width: 767px) {
//     margin: 0 auto;
//   }
//   @media (min-width: 1024px) {
//     max-width: 80%;
//   }
// `;

export const Heading = styled(HeadingPrimary)`
  color: #fff;
`;

export const ButtonContainer = styled.div`
  margin-top: ${SPACING.md};
`;
