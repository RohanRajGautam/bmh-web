import styled, { css } from "styled-components";

const primary = "#6CA448";
const medicalGrey = "#5F6468";

export const EventWrapper = styled.div`
  margin-top: 100px;
  padding: 5vw;
  margin-bottom: 5em;
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
`;

export const EventCard = styled.div`
  border-radius: 12px;
  padding: 20px;
  width: 250px;
  border: 1px solid ${medicalGrey};
  color: ${medicalGrey};
  transition: all 300ms;
  &:hover {
    box-shadow: 16px 72px 74px rgba(19, 65, 124, 0.19);
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
  bottom: -80px;
  button {
    height: 40px;
    width: 40px;
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
  ${({ next }) =>
    next &&
    css`
      left: 80px;
    `}

  ${({ prev }) =>
    prev &&
    css`
      margin-left: 20px;
    `}
`;
