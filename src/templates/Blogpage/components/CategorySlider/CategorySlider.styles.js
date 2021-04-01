import styled, { css } from "styled-components";

export const CategorySliderBlockWrapper = styled.div`
  margin: 40px 20px;
  @media (min-width: 768px) {
    margin: 80px 40px;
  }
  @media (min-width: 1024px) {
    margin: 120px 90px;
  }
`;

export const CategorySliderWrapper = styled.div`
  margin-top: 48px;
  .slick-slide {
    margin: 0 20px;
  }
  /* the parent */
`;

export const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  z-index: 1;
  box-shadow: 15px 23px 49px rgb(0 0 0 / 17%);
  button {
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 3px;
    display: grid;
    place-items: center;
    box-shadow: 15px 23px 49px rgba(0, 0, 0, 0.17);
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #f4f4f4;
    }
  }
  ${({ next }) =>
    next
      ? css`
          transform: translate(50%, -50%);
          right: 0;
        `
      : css`
          transform: translate(-50%, -50%);
        `}
`;
