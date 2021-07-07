import { Link } from "gatsby";
import styled from "styled-components";
import { SPACING, COLORS } from "@components/constants";
import { mediaQueries } from "@components/MediaQueries";

export const Card = styled.div`
  position: relative;
  width: 40rem;
  height: 46rem;
  user-select: none;

  ${mediaQueries("sm")`
    width: inherit;
  `}

  &:hover {
    figure {
      transform: scale(1.05);
      transition: transform 300ms;
    }

    h2 {
      color: ${COLORS.primary};
    }
  }
`;

export const Date = styled.h5`
  font-family: "Merriweather";
  font-weight: bold;
  font-style: normal;
  font-size: 2.1rem;
  line-height: 3.2rem;
  text-align: center;
  color: ${COLORS.textHeading};
`;

export const DateWrapper = styled.div`
  background: #fff;
  width: 8rem;
  height: 8.5rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 1rem 1.6rem;

  position: absolute;
  z-index: 2;
  top: 5%;

  ${mediaQueries("sm")`
    display: none;
  `}
`;

export const Content = styled.div`
  padding-left: ${SPACING.md};

  ${mediaQueries("sm")`
    padding-left: 0;
  `}
`;

export const StyledLink = styled(Link)`
  margin-right: ${SPACING.lg};

  text-decoration: none;
  display: block;

  ${mediaQueries("sm")`
    margin-right: 5.2rem;
  `}
`;

export const CardThumbnailWrapper = styled.div`
  overflow: hidden;
  width: 35rem;
  height: 23rem;
  border-radius: 24px;

  ${mediaQueries("sm")`
      width: 30rem;
  `}
`;

export const CardThumbnail = styled.figure`
  height: 100%;
  background-color: ${COLORS.primary};
  background-image: url(${props => props.thumbnail});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  transition: transform 300ms;
`;

export const CardDesc = styled.div`
  padding-top: ${SPACING.sm};
`;

export const CardTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 139%;
  color: ${COLORS.textHeading};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  min-height: 6rem;
`;

export const CardText = styled.p`
  font-size: 2rem;
  font-weight: normal;
  font-family: Mulish;
  line-height: 32px;
  color: ${COLORS.textBodyGrey};
  margin-bottom: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;

  padding-top: ${SPACING.xs};
`;
