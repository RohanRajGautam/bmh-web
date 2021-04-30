import { Heading } from "@components/Heading";
import styled from "styled-components";
import FeaturedImageOne from "@images/home/medical.png";
import FeaturedImageTwo from "@images/home/wellness.png";

const primary = "#6CA448";
const graniteGrey = "#2C3336";
const lightGreen = "#86CF57";
const blueGrey = "#C5CCD3";
const medicalGrey = "#5f6468";
const gray3 = "#828282";

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

export const HorizontalTitleDotWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5vw;
  margin-bottom: 26px;
  @media (min-width: 576px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 25px;
    padding: 0;
  }
  @media (min-width: 1200px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1824px) {
    margin-bottom: 70px;
  }
`;

export const HorizontalTitleDotWrapperRight = styled(HorizontalTitleDotWrapper)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    left: -100px;
    margin-right: -55px;
    position: relative;
    top: 25%;
  }
`;

export const DisplayFlex = styled.div`
  display: flex;
  align-items: baseline;
`;

export const HorizontalComponentDotWrapper = styled.div`
  position: relative;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
  svg {
    position: absolute;
    left: 115%;
    top: 10%;
  }
`;

export const HorizontalComponentDotWrapperHealing = styled.div`
  position: relative;
  left: -30px;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
  svg {
    position: absolute;
    top: -230%;
    transform: translateX(-125%);
  }
`;

export const HorizontalComponentDot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(108, 164, 72, 0.2);
  display: grid;
  place-items: center;
  margin-left: 24px;
`;

export const HorizontalComponentDotHealing = styled(HorizontalComponentDot)`
  margin-left: -30px;
`;

export const HorizontalComponentDotInner = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${primary};
  border-radius: 50%;
`;

export const HorizontalComponentBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5vw;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
    padding: 15vh 0 15vh 168px;
  }
`;

export const HorizontalComponentBlockWrapperRight = styled(
  HorizontalComponentBlockWrapper
)`
  @media (min-width: 1024px) {
    padding: 15vh 25vw 15vh 168px;
  }
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
  width: 100vw;
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

export const HorizontalFullWidthBlock2 = styled.div`
  width: 100vw;
  padding-bottom: 64px;
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const HorizontalComponentFourthOrder = styled(HorizontalComponentBlock)`
  order: 5;
  @media (min-width: 1024px) {
    order: unset;
  }
`;

export const HorizontalComponentFifthOrder = styled(HorizontalComponentBlock)`
  order: 6;
  @media (min-width: 1024px) {
    order: unset;
  }
`;

export const HorizontalComponentMobile = styled.div`
  display: block;
  margin-top: 72px;
  @media (min-width: 1024px) {
    display: none;
    margin-top: 0;
  }
`;

export const HorizontalComponentDesktop = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const HorizontalComponentTitle = styled.h3`
  font-size: 14px;
  font-family: Mulish;
  letter-spacing: 0.1px;
  color: ${medicalGrey};
  margin-bottom: 8px;
  padding: 0 5vw;
  @media (min-width: 576px) {
    font-size: 24px;
    margin-bottom: 18px;
  }
  @media (min-width: 1024px) {
    padding: 0;
  }
  @media (min-width: 1824px) {
    font-size: 36px;
    margin-bottom: 24px;
  }
`;

export const HorizontalComponentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalComponentTitleImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 125vw;
  }
  @media (min-width: 1200px) {
    width: 100vw;
    padding: 5vh 0;
  }
  @media (min-width: 1440px) {
    width: 80vw;
  }
  @media (min-width: 1824px) {
    width: 80vw;
  }
`;

export const HorizontalComponentTitleImageWrapperRight = styled(
  HorizontalComponentTitleImageWrapper
)`
  @media (min-width: 1024px) {
    margin-left: 35vw;
  }
`;

export const HorizontalComponentFeaturedImageWrapper = styled.div`
  width: 100vw;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const HorizontalComponentFeaturedImage = styled.div`
  background-image: url(${FeaturedImageOne});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 40vw;
  height: 70vh;
  padding-top: 80%;
  position: relative;
`;

export const HorizontalComponentFeaturedImageRight = styled(
  HorizontalComponentFeaturedImage
)`
  background-image: url(${FeaturedImageTwo});
`;

export const HorizontalComponentHeading = styled.h2`
  color: ${primary};
  font-family: Merriweather;
  letter-spacing: 0.1px;
  font-size: 24px;
  @media (min-width: 576px) {
    font-size: 40px;
  }
  @media (min-width: 1024px) {
    font-size: 48px;
  }
  @media (min-width: 1824px) {
    font-size: 72px;
  }
`;

export const HorizontalComponentHeadingWrapperRight = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 90%;
    top: 90%;
  }
`;

export const Image = styled.div`
  width: 100%;
  padding-bottom: 75%;
  background-color: #fff;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 1024px) {
    height: 600px;
    width: 880px;
  }
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: 48px;
  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1824px) {
    margin-bottom: 72px;
  }
`;

export const HorizontalHeading = styled(Heading)`
  color: ${graniteGrey};
  margin-top: 40px;
  @media (min-width: 1024px) {
    margin-top: 0;
    font-size: 3rem;
  }
  @media (min-width: 1824px) {
    font-size: 4.8rem;
  }
`;

export const FirstText = styled.p`
  font-family: Mulish;
  font-size: 14px;
  letter-spacing: 0.1px;
  color: ${gray3};
  margin-bottom: 48px;
  text-align: justify;
  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }

  @media (min-width: 1024px) {
    margin-bottom: 40px;
    font-size: 18px;
    width: 60%;
  }
  @media (min-width: 1824px) {
    margin-bottom: 72px;
    font-size: 24px;
    width: 70%;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ServicesWrapperRight = styled(ServicesWrapper)`
  @media (min-width: 1024px) {
  }
`;

export const WellnessSvgWrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    svg {
      @media (max-width: 1824px) {
        width: 290px;
        height: 40px;
      }
    }
  }
`;

export const MedicalSvgWrapper = styled.div`
  svg {
    @media (max-width: 1824px) {
      height: 75px;
      width: 220px;
    }
    @media (max-width: 1440px) {
      width: 160px;
      height: 60px;
    }
  }
`;

export const ServicesHeading = styled.h2`
  letter-spacing: 0.1px;
  color: ${primary};
  font-weight: 700;
  font-family: Merriweather;
  margin-bottom: 36px;
  font-size: 18px;
  display: flex;
  align-items: center;
  span {
    margin-left: 12px;
  }
  svg {
    display: block;
  }
  @media (min-width: 576px) {
    font-size: 24px;
  }
  @media (min-width: 1024px) {
    margin-right: 28px;
    margin-bottom: 0;
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
  @media (min-width: 1824px) {
    margin-right: 28px;
    margin-bottom: 0;
    font-size: 36px;
  }
`;

export const ServicesItemWrapper = styled.div`
  display: grid;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 24px;
    grid-column-gap: 36px;
    margin: 0 40px;
  }
  @media (min-width: 1440px) {
    grid-row-gap: 36px;
    grid-column-gap: 60px;
  }
`;

export const ServicesItems = styled.div`
  font-size: 14px;
  letter-spacing: 0.1px;
  color: ${medicalGrey};
  font-family: Mulish;
  @media (min-width: 768px) {
    font-size: 16px;
    white-space: nowrap;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
  @media (min-width: 1824px) {
    font-size: 24px;
  }
`;
