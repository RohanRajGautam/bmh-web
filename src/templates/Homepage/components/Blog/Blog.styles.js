import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { SPACING, COLORS } from "@components/constants";
import { Container } from "@components/Container";
import { HeadingSecondary } from "@components/Heading";

export const BlogWrapper = styled(Container)`
  background: ${COLORS.bgGrey};
  padding-top: ${SPACING.xl};
  padding-bottom: ${SPACING.xl};
  padding-left: 11.3rem;
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  padding-right: ${SPACING.xl};
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

export const StyledLinkMobile = styled(StyledLink)`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  svg {
    height: 14px;
    width: 26px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
