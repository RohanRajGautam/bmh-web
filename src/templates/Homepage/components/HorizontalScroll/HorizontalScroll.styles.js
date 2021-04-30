import styled from "styled-components";

export const HorizontalComponentWrapper = styled.div`
  overflow: hidden;
  /* width: 400%; */
`;

export const HorizontalComponent = styled.div`
  font-size: 12px;
  width: 600%;
  /* width: fit-content; */
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    min-height: 100vh;
    flex-direction: row;
    margin-bottom: 5em;
  }
`;

export const HorizontalFullWidthBlock = styled.div`
  width: 100vw;
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const HorizontalFullWidthBlockSecond = styled.div`
  background: #2c3336;
  width: 100.5vw;

  // add overlay to the background image

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
      90.56deg,
      #2c3336 23.47%,
      rgba(44, 51, 54, 0) 66.83%
    );
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

export const HorizontalComponentBlockThird = styled.div`
  /* style */
  width: 99.5vw;
`;

export const HorizontalComponentBlock = styled.div`
  svg {
    display: none;
  }
  @media (min-width: 1024px) {
    margin-right: 110px;
    svg {
      display: block;
    }
  }
`;

export const HorizontalComponentCollageWrapper = styled(
  HorizontalComponentBlock
)`
  margin-right: 0;
  position: relative;
`;

export const HorizontalComponentBlockForth = styled.div`
  /* style */
  @media (min-width: 1024px) {
    width: 100vw;
    position: relative;
    left: 4%;
  }
`;

export const HorizontalComponentImageLast = styled.div`
  width: 100vw;
`;

export const ImageLast = styled.img`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;

  @media (max-width: 576px) {
    width: 185%;
  }
`;
