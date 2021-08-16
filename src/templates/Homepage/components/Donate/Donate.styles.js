import styled from "styled-components";
import Img from "gatsby-image";
import { Container } from "@components/Container";
import { SPACING } from "@components/constants";
import { HeadingPrimary } from "@components/Heading";
import { mediaQueries } from "@components/MediaQueries";

export const DonateWrapper = styled(Container)`
  position: relative;
  @media (max-width: 1260px) {
    height: 40rem;
  }
  @media (max-width: 600px) {
    height: 60vh;
  }
`;

export const DonateImage = styled(Img)`
  height: 100%;
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

  position: absolute;
  top: 0;

  ${mediaQueries("lg")`
    padding-left: 5vw;
  `}
`;

export const DonateColumn = styled.div``;

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

  @media (max-width: 600px) {
    transform: translateX(-2rem) scale(0.9) !important;
  }
`;
