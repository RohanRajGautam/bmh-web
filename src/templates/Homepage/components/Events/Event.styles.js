import styled, { css } from "styled-components";

const primary = "#6CA448";
const medicalGrey = "#5F6468";
const graniteGrey = "#2C3336";
const border = "#C5CCD3";

export const EventWrapper = styled.div`
  padding: 5vw;
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
  @media (max-width: 600px) {
    margin-top: 5rem;
  }
`;

export const EventCard = styled.div`
  border-radius: 12px;
  padding: 20px;
  min-width: 250px;
  border: 1px solid ${medicalGrey};
  color: ${medicalGrey};
  transition: all 300ms, color 0ms;
  margin: 0 5px;
  &:hover {
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
  &:first-child {
    margin-left: 0;
  }

  @media (min-width: 600px) {
    min-width: 450px;
    padding: 35px;
    margin: 0 20px;
  }
`;

export const EventSliderWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
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
    font-size: 3rem;
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

export const NavigationButtonWrapper = styled.div`
  display: flex;
  margin-top: 64px;
`;

export const NavigationButton = styled.button`
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
  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
    svg {
      height: 21px;
      width: 13px;
    }
  }
  ${props =>
    props.right &&
    css`
      margin-left: 25px;
    `}
`;

export const EventDatePickerWrapper = styled.div`
  border: 1px solid ${border};
  margin-top: 72px;
  max-width: 250px;
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
