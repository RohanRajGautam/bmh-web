import styled from "styled-components";
import donate from "@images/homepage-donate.png";
import donateM from "@images/nav-donate.png";
import { Container } from "@components/Container";
import { SPACING } from "@components/constants";
import { HeadingPrimary } from "@components/Heading";
import { mediaQueries } from "@components/MediaQueries";

export const DonateWrapper = styled(Container)`
  background: url(${donate});
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    /* height: 70vh; */
    background: url(${donateM});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const DonateStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 11.3rem;
  padding-top: 13.2rem;
  padding-bottom: 13.2rem;

  height: 100%;

  ${mediaQueries("lg")`
    padding-left: 5vw;
  `}
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

  @media (max-width: 600px) {
    span {
      font-size: 5.2rem;
      line-height: 1.6;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: ${SPACING.md};
`;
