import styled from "styled-components";
import imageBg from "@images/home/second-page.jpg";

const primary = "#6CA448";

export const TextContainer = styled.div`
  /* background: #fff; */
  /* color: #fff;s */
  /* color: #2c3336; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 2s ease;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url(${imageBg});
  background-size: cover;
  /* padding: 64px 5vw; */
  width: 100vw;
  min-height: 100vh;
  background-position: center;
  @media only screen and (min-width: 1024px) {
    width: 100vw;
  }
`;

// const Image = styled.img`
//   width: 100vw;
//   height: 100vh;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   -o-object-fit: cover;
//   object-fit: cover;
// `;

export const Message = styled.h1`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 140.5%;
  text-align: center;
  letter-spacing: 0.1px;
  user-select: none;
  transition: all linear 0.6s;
  color: #fff;
  /* position: absolute;
  top: 25%; */
  /* color: ${primary}; */
  /* background-image: linear-gradient(45deg, #eee -100%, #2c3336 0%); */
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url(${imageBg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover; */
  /* position: fixed;
  top: 20%;
  left: 50%; */
  background-clip: text;
  -webkit-background-clip: text;
  position: relative;
  right: 400px;
  /* text-fill-color: transparent;
  -webkit-text-fill-color: transparent; */
  @media (max-width: 576px) {
    font-size: 4rem;
  }
  @media (min-width: 1024px) {
    font-size: 7rem;
  }
  /* @media (min-width: 1440px) {
    font-size: 9rem;
  } */
`;

export const LogoContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-items: center; */
  position: relative;
  top: 5rem;
`;

export const FadedText = styled.span`
  font-size: 2.2rem;
  font-family: "Merriweather";
  text-transform: uppercase;
  text-decoration: underline;
  color: #fff;
  z-index: 1;
  position: relative;
`;

export const LogoImg = styled.img`
  opacity: 0.6;
  width: 70px;
  margin-top: 7rem;
  filter: grayscale(1);
  position: absolute;
  left: 30%;
  bottom: -50%;
`;

export const Smiley = styled.h2`
  display: inline-block;
  font-family: "Smiley";
`;
