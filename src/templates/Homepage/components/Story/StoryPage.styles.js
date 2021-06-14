import { Link } from "gatsby";
import styled from "styled-components";
import { SPACING } from "@components/constants";
import { Container } from "@components/Container";
import { HeadingSecondary } from "@components/Heading";

import Story from "@images/our-story.jpg";

export const StoryContainer = styled(Container)`
  padding: 0 11.3rem;
  margin-top: ${SPACING.xxl};
  position: relative;
  max-width: 135rem;
`;

export const Content = styled.div`
  /* position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline; */
  padding-right: 9.8rem;
  width: 50%;
`;

export const Header = styled.div`
  text-align: left;
`;

export const Subtitle = styled(HeadingSecondary)`
  margin-bottom: ${SPACING.xs};
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const PhotoWrapper = styled.div`
  /* background-image: url(${Story});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-bottom: 80%;
  display: none;
  @media (min-width: 768px) {
    display: block;
  } */
  width: 50%;

  svg {
    g {
      &:hover {
        circle,
        path {
          cursor: pointer;
          /* transform: scale(0.9); */
        }
      }
    }
  }
`;

export const TextWrapper = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 32px;
  color: #596166;
  /* text-align: justify; */
  padding: ${SPACING.sm} 0;
`;

export const ButtonWrapper = styled(Link)`
  svg {
    &:hover {
      path:nth-child(1) {
        fill: #6ca448;
      }

      path:nth-child(2) {
        transform: translateX(1rem);
        transition: all 0.4s;
        fill: #6ca448;
      }
      circle {
        opacity: 0;
      }
    }
  }
`;
