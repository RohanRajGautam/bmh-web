import styled, { css } from "styled-components";
import { Link } from "gatsby";

const graniteGray = "#2C3336";

export const BlogWrapper = styled.div`
  /* margin: 72px 0 140px 96px; */
  padding: 5vw;
  margin-bottom: 5em;
`;

export const SliderWrapper = styled.div`
  margin-top: 40px;
  .slick-slide {
    margin: 0 20px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 96px;
`;

export const StyledLink = styled(Link)`
  span {
    margin-right: 15px;
  }
  font-size: 24px;
  font-weight: 600;
  font-family: Mulish;
  letter-spacing: 0.1px;
  color: ${graniteGray};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavigationButton = styled.div`
  position: absolute;
  bottom: -80px;
  button {
    height: 40px;
    width: 40px;
    border: 1px solid #c5ccd3;
    border-radius: 3px;
    display: grid;
    place-items: center;
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #f4f4f4;
    }
  }
  ${({ next }) =>
    next &&
    css`
      left: 80px;
    `}

  ${({ prev }) =>
    prev &&
    css`
      margin-left: 20px;
    `}
`;
