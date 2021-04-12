import styled from "styled-components";

const graniteGrey = "#2C3336";
const primary = "#6CA448";

export const TextContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 2s ease;
  padding: 64px 5vw;
  width: 100vw;
  @media (min-width: 1024px) {
    min-height: 100vh;
  }
`;
export const Message = styled.h1`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 140.5%;
  text-align: center;
  letter-spacing: 0.1px;
  user-select: none;
  transition: 2s ease;
  color: ${primary};
  @media (min-width: 1024px) {
    font-size: 72px;
  }
  @media (min-width: 1440px) {
    font-size: 96px;
  }
`;

export const Quote = styled.span`
  color: #6ca448;
`;

export const FadedText = styled.span`
  opacity: 0.2;
`;

export const LogoImg = styled.img`
  opacity: 0.04;
  height: 95px;
  width: 100px;
  margin: 3em 2em 2em auto;
`;
