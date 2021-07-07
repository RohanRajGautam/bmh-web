import styled from "styled-components";
import { Link } from "gatsby";
import { SPACING, COLORS } from "@components/constants";
import { Container } from "@components/Container";
import { HeadingSecondary } from "@components/Heading";
import { mediaQueries } from "@components/MediaQueries";

export const BlogWrapper = styled(Container)`
  background: ${COLORS.bgGrey};
  padding-top: ${SPACING.xl};
  padding-bottom: ${SPACING.xl};
  padding-left: 11.3rem;

  ${mediaQueries("lg")`
    padding-left: 5vw;
  `}
`;

export const Header = styled.div`
  text-align: left;
`;

export const Subtitle = styled(HeadingSecondary)`
  margin-bottom: ${SPACING.xs};
`;

export const SliderWrapper = styled.div`
  margin-top: 7.3rem;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  user-select: none;
  cursor: grab;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries("sm")`
    margin-top: 6rem;
  `}
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  padding-right: ${SPACING.lg};
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
        transition: all 0.3s ease-in-out;
      }
    }
  }

  ${mediaQueries("sm")`
    display: none;
  `}
`;
