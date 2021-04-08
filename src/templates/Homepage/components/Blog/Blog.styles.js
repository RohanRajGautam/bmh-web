import styled, { css } from "styled-components";
import { Link } from "gatsby";

const graniteGray = "#2C3336";

export const BlogWrapper = styled.div`
  padding: 5vw;
  margin: 5em 0;
  .slick-dots {
    display: none !important;
  }
  .slick-slide {
    margin: 0 5px;
  }

  @media (min-width: 600px) {
    .slick-slide {
      margin: 0 20px;
    }
    .slick-dots {
      display: block !important;
    }
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 40px;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    margin-right: 96px;
  }
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
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledLinkMobile = styled(StyledLink)`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
  font-size: 14px;
  svg {
    height: 14px;
    width: 26px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavigationButton = styled.div`
  position: absolute;
  bottom: -50px;
  button {
    height: 30px;
    width: 30px;
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
  @media (min-width: 768px) {
    bottom: -80px;

    button {
      height: 40px;
      width: 40px;
    }
  }
  ${({ next }) =>
    next &&
    css`
      left: 60px;
      @media (min-width: 768px) {
        left: 80px;
      }
    `}

  ${({ prev }) =>
    prev &&
    css`
      margin-left: 20px;
    `}
`;
