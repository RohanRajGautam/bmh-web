import styled, { css } from "styled-components";

const primary = "#6CA448";
const medicalGrey = "#5F6468";
const graniteGrey = "#2C3336";
const border = "#C5CCD3";

export const EventWrapper = styled.div`
  margin-top: 100px;
  padding: 5vw;
  margin-bottom: 64px;
  .slick-slide {
    margin: 0 5px;
  }
  .slick-dots {
    display: none !important;
  }
  @media (min-width: 600px) {
    .slick-slide {
      margin: 0 20px;
    }
    .slick-dots {
      display: block !important;
    }
  }
  .MuiGrid-container {
    position: relative;
    z-index: 1;
    .MuiInput-underline:before,
    .MuiInput-underline:after {
      display: none;
    }
    .MuiInput-underline:hover:before {
      display: none;
    }
    .MuiInput-root {
      input {
        font-size: 20px;
        font-family: Mulish;
        color: ${graniteGrey};
        cursor: pointer;
      }
    }
    .MuiFormControl-root {
      padding: 12px 20px;
    }
  }
`;

export const EventCard = styled.div`
  border-radius: 12px;
  padding: 20px;
  width: 250px;
  border: 1px solid ${medicalGrey};
  color: ${medicalGrey};
  transition: all 300ms, color 0ms;
  &:hover {
    box-shadow: 16px 40px 40px rgb(19 65 124 / 19%);
    transition: all 300ms;
    background-color: ${primary};
    cursor: pointer;
    color: #fff;
    border-color: ${primary};
    h2 {
      color: #fff;
    }
    time {
      color: #fff;
    }
  }

  @media (min-width: 600px) {
    width: 450px;
    padding: 35px;
  }
`;

export const EventSliderWrapper = styled.div`
  margin-top: 40px;
  .slick-slide {
    margin: 0 20px 96px 20px;
  }
`;

export const EventDay = styled.time`
  font-size: 36px;
  letter-spacing: 0.1px;
  font-weight: 700;
  transition: color 300ms;
  font-family: Merriweather;
  line-height: 55px;
  color: ${primary};
`;

export const EventDate = styled.div`
  font-size: 18px;
  transition: color 300ms;
  letter-spacing: 0.1px;
`;

export const EventTitle = styled.h2`
  font-size: 14px;
  font-family: Merriweather;
  transition: color 300ms;
  line-height: 1.6;
  font-weight: 900;
  letter-spacing: 0.1px;
  margin-top: 120px;
  margin-bottom: 20px;
  color: ${primary};
  min-height: 76px;
  @media (min-width: 600px) {
    font-size: 24px;
    margin-bottom: 36px;
    margin-top: 210px;
  }
`;

export const EventTime = styled.time`
  font-size: 12px;
  font-weight: 600;
  transition: color 300ms;
  letter-spacing: 0.1px;
  font-family: Mulish;
  margin-bottom: 6px;
  display: block;
  @media (min-width: 600px) {
    margin-bottom: 4px;
    font-size: 16px;
  }
`;

export const NavigationButton = styled.div`
  position: absolute;
  bottom: -50px;
  button {
    height: 30px;
    width: 30px;
    border: 1px solid #c5ccd3;
    border-radius: 3px;
    display: grid;
    place-items: center;
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #f4f4f4;
    }
  }
  @media (min-width: 768px) {
    bottom: -40px;
    button {
      height: 40px;
      width: 40px;
    }
  }
  ${({ next }) =>
    next &&
    css`
      left: 60px;
      @media (min-width: 768px) {
        left: 80px;
      }
    `}

  ${({ prev }) =>
    prev &&
    css`
      margin-left: 20px;
    `}
`;

export const EventDatePickerWrapper = styled.div`
  border: 1px solid ${border};
  margin-top: 72px;
  max-width: 270px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    margin-left: 20px;
  }
`;

export const EventDatePickerArrow = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;
