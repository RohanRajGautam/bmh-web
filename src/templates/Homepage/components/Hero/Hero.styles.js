import styled from "styled-components";
import { Button } from "@components/Button";

const primaryColor = "#6CA448";

export const HeroContainer = styled.div`
  visibility: hidden;
  background: #fff;
  display: flex;
  height: 100vh;
  width: 100vw;
  margin-top: -12rem;

  @media (max-width: 860px) {
    position: relative;
    color: #fff;
    padding-left: 5vw;
    justify-content: flex-start;
    align-items: center;
    height: 120vh;
    /* margin-top: -80px; */
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
  width: 50vw;

  @media (max-width: 860px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -o-object-fit: cover;
  object-fit: cover;

  @media (max-width: 860px) {
    filter: brightness(50%);
  }
`;

export const HeroContent = styled.div`
  width: 50vw;
  z-index: 3;
  /* max-height: 100%; */
  /* padding: 0 5vw; */

  @media screen and (max-width: 860px) {
    height: calc(100vh - 80px);
    padding: 0;
    position: absolute;
    left: 0;
    width: auto;
  }
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 60vh; */
  /* max-height: 100%; */
  padding: 0 5vw;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  margin-right: 5vw;
  transform: translateY(25vh);

  @media screen and (max-width: 860px) {
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 70%;
    padding: 3rem 0;
  }
`;

export const HeroTextContainer = styled.div`
  width: 100%;
  padding: 1.5rem 5vw;
  @media (min-width: 860px) {
    padding: 0;
  }
`;

export const ButtonWrapper = styled.div`
  background: #6ca448;
  width: 80%;
  border-radius: 55px;

  @media (max-width: 860px) {
    background: none;
    width: 100%;
  }
`;
export const ButtonText = styled.p`
  color: #fff;
  font-size: clamp(1rem, 1.6vw, 3rem);
  text-align: center;
  padding: 1rem 0 0.6rem 0;

  @media (max-width: 860px) {
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
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0;
    margin-bottom: 5vw;
}
  }
  @media (min-width: 860px) {
    padding: 0;
  }
`;

export const ButtonPrimary = styled(Button)`
  /* margin-bottom: 2rem; */
  width: 100%;
  height: 45px;
  text-transform: uppercase;
  border-radius: 0 0 0 50px;
  margin: 0 0 5px 5px;
  background: #fff;
  color: #2c3336;
  padding: 13px 0 0 0;
  font-size: 1.7rem;
  &:hover {
    background-color: #fff;
    color: ${primaryColor};
    transform: none;
  }
  @media (max-width: 860px) {
    margin: auto;
    margin-bottom: 1.5rem;
    width: 100%;
    border-radius: 50px;
    max-width: 90%;
    padding: 2rem 5rem;
    font-size: 1.8rem;
    background: #66a250;
    height: 60px;
    color: #fff;
  }
`;

export const MobileButtonPrimary = styled(Button)`
  margin-bottom: 1rem;
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  border-radius: 0 0 50px 0;
  margin: 0 5px 5px 1px;

  @media (max-width: 860px) {
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
  color: #2c3336;
  padding-bottom: 3rem;
  font-size: 24px;
  font-style: italic;

  span {
    font-family: "Smiley";
    font-style: normal;
    font-variant: all-small-caps;
    letter-spacing: 2px;
  }

  @media (min-width: 860px) {
    font-size: clamp(3rem, 4vw, 7rem);
  }
  @media (max-width: 860px) {
    font-size: clamp(3.5rem, 10vw, 4rem);
    color: #fff;
  }
`;

export const Divider = styled.div`
  width: 7rem;
  height: 5px;
  position: relative;
  background: #6ca448;
  bottom: 30px;
  @media (max-width: 860px) {
    width: 6rem;
    bottom: 20px;
  }
`;

export const HeroP = styled.p`
  font-family: Mulish;
  font-weight: 300;
  color: #2c3336;
  line-height: 160%;
  font-size: 18px;
  padding: 1.5rem 0;
  font-weight: 400;
  letter-spacing: 0.3px;
  user-select: none;
  span {
    font-family: inherit;
  }
  @media (max-width: 860px) {
    font-size: 2rem;
    padding: 3rem 0;
    color: rgba(255, 255, 255, 0.7);
  }
  @media (min-width: 860px) {
    font-size: clamp(2rem, 1.6vw, 2.5rem);
    padding: 1rem 0 6rem 0;
    span {
      display: block;
    }
  }
`;
