import styled from "styled-components";

const graniteGrey = "#2C3336";
const primary = "#6CA448";

export const TextContainer = styled.div`
  background: #2c3336;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: 2s ease;
  /* padding: 64px 5vw; */
  width: 100vw;
  min-height: 100vh;
  @media only screen and (min-width: 1024px) {
    width: 100.1vw;
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
  /* position: absolute;
  top: 25%; */
  /* color: ${primary}; */
  background-image: linear-gradient(45deg, #eee -100%, #2c3336 0%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: 1024px) {
    font-size: 72px;
  }
  @media (min-width: 1440px) {
    font-size: 96px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  /* position: absolute;
  bottom: 20%; */
`;

export const FadedText = styled.span`
  opacity: 0.6;
  font-size: 3rem;
  font-family: "Merriweather";
`;

export const LogoImg = styled.img`
  opacity: 0.5;
  width: 90px;
  margin: 2em auto;
`;
