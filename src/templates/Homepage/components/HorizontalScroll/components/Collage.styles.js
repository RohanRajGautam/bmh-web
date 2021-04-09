import styled from "styled-components";

export const CollageWrapper = styled.div`
  width: 100vw;
  padding: 10vh 0;
  position: relative;
`;

export const Collage = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 38vh 38vh;
  grid-gap: 24px;
  @media (min-width: 1200px) {
    grid-gap: 36px;
  }
  @media (min-width: 1824px) {
    grid-gap: 50px;
  }
`;

export const CollageItems = styled.div`
  &:nth-child(1) {
    grid-column: 1/4;
    grid-row: 1;
  }
  &:nth-child(2) {
    grid-column: 4/6;
    grid-row: 1/3;
  }
  &:nth-child(3) {
    grid-column: 6/9;
    grid-row: 1/3;
  }
  &:nth-child(4) {
    grid-column: 1/4;
    grid-row: 2/3;
  }
  height: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center center;
  backgorund-repeat: no-repeat;
`;
