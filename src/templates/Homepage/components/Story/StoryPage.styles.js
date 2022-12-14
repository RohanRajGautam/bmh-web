import { Link } from "gatsby";
import styled from "styled-components";
import { SPACING } from "@components/constants";
import { Container } from "@components/Container";
import { HeadingSecondary } from "@components/Heading";
import { mediaQueries } from "@components/MediaQueries";

export const StoryContainer = styled(Container)`
  padding: 0 11.3rem;
  margin-top: ${SPACING.xxl};
  position: relative;
  max-width: 135rem;

  ${mediaQueries("lg")`
    padding: 0 5vw;
  `}
  ${mediaQueries("md")`
    margin-top: 13.6rem;
  `}

  @media (min-width: 1600px) {
    max-width: 180rem;
  }
`;

export const Content = styled.div`
  padding-right: ${SPACING.lg};
  flex: 0 0 49%;

  ${mediaQueries("lg")`
    flex: 0 0 45%;
  `}
  ${mediaQueries("md")`
    padding-right: 0;
    margin-bottom: 5.2rem;
  `}
`;

export const Header = styled.div`
  text-align: left;
`;

export const Subtitle = styled(HeadingSecondary)`
  margin-bottom: ${SPACING.xs};
`;

export const ContentWrapper = styled.div`
  display: flex;

  ${mediaQueries("md")`
    flex-direction: column;
    align-items: center;
  `}
`;

export const PhotoWrapper = styled.div`
  max-width: 65rem;
  max-height: 50rem;
  min-width: 30rem;
  flex: 0 0 60%;
`;

export const TextWrapper = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 32px;
  color: #52595e;
  /* text-align: justify; */
  padding: ${SPACING.sm} 0;
`;

export const ButtonWrapper = styled(Link)`
  svg {
    path {
      transition: all 0.3s ease-in-out;
    }
    circle {
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      path:nth-child(1) {
        fill: #6ca448;
      }

      path:nth-child(2) {
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
