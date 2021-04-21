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
