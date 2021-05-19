import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { Heading } from "@components/Heading";

const graniteGray = "#2C3336";

export const BlogWrapper = styled.div`
  padding: 5vw;
  padding-bottom: 0;
`;

export const SliderWrapper = styled.div`
  margin-top: 40px;
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
  @media (min-width: 768px) {
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    margin-right: 96px;
  }
`;

export const BlogHeading = styled(Heading)`
  @media (max-width: 576px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1824px) {
    font-size: 5rem;
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

  &:hover {
    span {
      color: #6ca448;
    }
    svg {
      path {
        transform: translateX(1.5rem);
        transition: all 0.4s;
        stroke: #6ca448;
      }
      circle {
        stroke: #6ca448;
        stroke-width: 2;
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

export const NavigationButtonWrapper = styled.div`
  display: flex;
`;

export const NavigationButton = styled.button`
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
  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
    svg {
      height: 21px;
      width: 13px;
    }
  }
  ${props =>
    props.right &&
    css`
      margin-left: 25px;
    `}
`;

export const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;
