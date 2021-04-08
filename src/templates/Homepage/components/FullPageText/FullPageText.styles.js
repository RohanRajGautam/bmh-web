import styled from "styled-components";

export const TextContainer = styled.div`
  background: #2c3336;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: 2s ease;
  padding: 0 5vw;
`;
export const Message = styled.h1`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 7rem;
  line-height: 140.5%;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  user-select: none;
  transition: 2s ease;
`;

export const MobileView = styled.h1`
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 4rem;
  line-height: 140%;
  text-align: left;
  letter-spacing: 0.1px;
  color: #ffffff;
  user-select: none;
  transition: 2s ease;
`;

export const MobileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 10;
  position: relative;
`;

export const Divider = styled.div`
  width: 8rem;
  height: 0px;
  background: #6ca448;
  margin-top: 7em;
  border: 2px solid #6ca448;
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
