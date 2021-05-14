import styled from "styled-components";

const backgroundColor = "#FBFBFB";
const grey2 = "#4F4F4F";
const borderColor = "#bdbdbd";
const graniteGrey = "#2C3336";

export const NewsletterWrapper = styled.div`
  padding: 2rem;
  background-color: ${backgroundColor};
  font-size: 6px;
  @media (min-width: 576px) {
    padding: 65px 40px;
  }
  @media (min-width: 1024px) {
    font-size: 8px;
    padding: 100px 85px;
  }
  @media (min-width: 1200px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const NewsletterTitle = styled.h2`
  font-size: 3em;
  line-height: 1.7;
  letter-spacing: 0.1px;
  color: ${grey2};
  font-weight: 700;
  font-family: Mulish;
`;

export const NewsletterInput = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 36px;
  height: 55px;
  input[type="text"] {
    border: 1px solid ${borderColor};
    background-color: #fff;
    line-height: 53px;
    width: 70%;
    text-indent: 10px;
    font-family: Mulish;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  @media (min-width: 1024px) {
    width: 50%;
    border-radius: 8px;
    input {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
  @media (min-width: 1200px) {
    width: 33%;
  }
`;

export const NewsletterButton = styled.div`
  width: 30%;
  background-color: ${graniteGrey};
  color: #fff;
  font-size: 14px;
  line-height: 53px;
  font-family: Mulish;
  font-weight: 500;
  letter-spacing: 0.1px;
  display: grid;
  place-items: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  @media (min-width: 1024px) {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const InputWrapper = styled.div``;
