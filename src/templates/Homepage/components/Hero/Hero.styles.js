import styled from "styled-components";
import { Button } from "@components/Button";

const primaryColor = "#6CA448";

export const HeroContainer = styled.div`
  visibility: hidden;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  margin-top: -80px;
  color: #fff;
  padding-left: 5vw;

  @media (max-width: 576px) {
    height: 110vh;
  }
  // add overlay to the background image

  /* :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  } */
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;

  @media (max-width: 576px) {
    filter: brightness(50%);
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  /* padding: 0 5vw; */

  @media screen and (max-width: 860px) {
    padding: 0;
    position: absolute;
    left: 0;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* height: 60vh; */
  max-height: 100%;
  padding: 3rem 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  transform: translateY(25vh);

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 70%;
  }
`;

export const HeroTextContainer = styled.div`
  width: 100%;
  padding: 1.5rem 5vw;
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const ButtonWrapper = styled.div`
  background: #6ca448;
  width: 100%;
  border-radius: 55px;

  @media (max-width: 768px) {
    background: none;
  }
`;
export const ButtonText = styled.p`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  padding: 1rem 0 0.6rem 0;

  @media (max-width: 768px) {
    /* display: none; */
    font-size: 2rem;
    padding: 1rem 0 2rem 0;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 1.5rem 5vw; */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin-bottom: 5vw;
}
  }
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const ButtonPrimary = styled(Button)`
  /* margin-bottom: 2rem; */
  width: 100%;
  height: 60px;
  text-transform: uppercase;
  border-radius: 0 0 0 50px;
  margin: 0 0 5px 5px;
  background: #2c3336;
  padding: 15px 0 0 0;
  &:hover {
    background-color: #fff;
    color: ${primaryColor};
    transform: none;
  }
  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 1.5rem;
    width: 100%;
    border-radius: 50px;
    max-width: 90%;
    padding: 2rem 5rem;
    font-size: 20px;
    background: #66a250;
  }
`;

export const MobileButtonPrimary = styled(Button)`
  margin-bottom: 1rem;
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  border-radius: 0 0 50px 0;
  margin: 0 5px 5px 1px;

  @media (max-width: 768px) {
    border-radius: 50px;
    margin: 0 auto;
  }
`;

export const HeroH1 = styled.h1`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.3px;
  user-select: none;
  padding-bottom: 3rem;
  font-size: 24px;
  font-style: italic;
  @media (min-width: 1024px) {
    font-size: clamp(3rem, 6vw, 6rem);
  }
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`;

export const Divider = styled.div`
  width: 11rem;
  height: 0px;
  background: #6ca448;
  border: 2px solid #6ca448;
`;

export const HeroP = styled.p`
  font-family: Mulish;
  font-weight: 300;
  line-height: 160%;
  font-size: 18px;
  padding: 1.5rem 0;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
  span {
    font-family: inherit;
  }
  @media (max-width: 576px) {
    font-size: 2rem;
    padding: 3rem 0;
  }
  @media (min-width: 1024px) {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    padding: 64px 0;
    span {
      display: block;
    }
  }
`;
