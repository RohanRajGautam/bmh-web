import styled, { css, keyframes } from "styled-components";

export const CollageWrapper = styled.div`
  position: relative;
  padding: 64px 5vw;
  @media (min-width: 1024px) {
    width: 100vw;
    padding: 10vh 0;
  }
`;

export const Collage = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 90vw;
  grid-template-rows: 250px 250px 250px 250px;
  @media (min-width: 1024px) {
    grid-gap: 24px;
    padding: 0;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 38vh 38vh;
  }
  @media (min-width: 1200px) {
    grid-gap: 36px;
  }
  @media (min-width: 1824px) {
    grid-gap: 50px;
  }
`;

export const CollageItems = styled.div`
  height: auto;
  width: auto;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0;
  @media only screen and (min-width: 1024px) {
    height: 350px;
    width: 300px;
    &:nth-child(1) {
      grid-column: 1/4;
      grid-row: 1;
      position: relative;
      /* top: 20%; */
      left: -90%;
    }
    &:nth-child(2) {
      grid-column: 1/9;
      grid-row: 2/3;
      position: relative;
      left: 7%;
      bottom: 50%;
    }
    &:nth-child(3) {
      grid-column: 3/9;
      grid-row: 1/3;
      position: relative;
      left: 20%;
    }
    &:nth-child(4) {
      grid-column: 6/9;
      grid-row: 2/3;
      position: relative;
      left: 20%;
      bottom: 50%;
    }
  }
  @media only screen and (min-width: 1824px) {
    height: 420px;
    width: 400px;
    &:nth-child(1) {
      grid-column: 1/4;
      grid-row: 1;
      position: relative;
      /* top: 20%; */
      left: -75%;
    }
    &:nth-child(2) {
      grid-column: 1/9;
      grid-row: 2/3;
      position: relative;
      left: 5%;
      /* bottom: 30%; */
    }
    &:nth-child(3) {
      grid-column: 3/9;
      grid-row: 1/3;
      position: relative;
      left: 20%;
      /* top: 10%; */
    }
    &:nth-child(4) {
      grid-column: 6/9;
      grid-row: 2/3;
      position: relative;
      left: 30%;
      bottom: 50%;
    }
  }
  ${({ animate }) =>
    animate &&
    css`
      animation: ${FadeInRight} 1s;
      animation-fill-mode: forwards;
    `}
`;

export const FadeInRight = keyframes`
0%{
  transform:translateX(250px);
  opacity:0;
}
100%{
  transform:translateX(0);
  opacity:1;
}
`;
