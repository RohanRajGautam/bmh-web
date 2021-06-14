import styled from "styled-components";
import { SPACING } from "@components/constants";
import { Container } from "@components/Container";

export const MainContainer = styled(Container)`
  background: #f5f5ef;
  position: relative;
  margin-top: ${SPACING.xxl};
  padding-top: ${SPACING.xl};

  /* height: 100vh; */

  /* display: flex;
  justify-content: center;
  align-items: center; */

  /* &::before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    transform-origin: center center 0;
    transform: translateZ(-1px) scale(1.5);
    background-size: cover;
    z-index: -1;
    background: #f5f5ef;
  } */
`;

// export const Background = styled.div`
//   background: #f5f5ef;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1;
// `;

// export const ContentWrapper = styled.div`
//   text-align: center;
// `;

export const Header = styled.div`
  text-align: center;
`;

export const CTA = styled.div`
  text-align: center;
  margin-top: 10.2rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  -webkit-backface-visibility: hidden;
`;

export const People = styled.div`
  padding: 11.1rem 7.4rem 3.5rem 5.7rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BackgroundVector = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
