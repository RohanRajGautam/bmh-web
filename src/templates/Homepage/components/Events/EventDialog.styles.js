import styled from "styled-components";

const graniteGrey = "#2C3336";

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

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DialogHeader = styled.div`
  height: 60%;
  padding: 3.2rem;
  position: relative;
`;

export const DialogContent = styled.div`
  height: 40%;
  background: #6ca448;
  padding: 3.2rem;
`;

export const EventTitle = styled.h4`
  font-family: Merriweather;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;

  margin-bottom: 3.2rem;

  width: 90%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  padding-top: 1rem;
`;

export const Title = styled.h6`
  //styleName: H6;
  font-family: Merriweather;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;

  color: #5f6468;
`;
export const Value = styled.p`
  //styleName: P2;
  font-family: Mulish;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #596166;
`;

export const SecondaryTextMain = styled.div`
  margin-bottom: 2.4rem;
`;
export const Cost = styled.h5`
  //styleName: H5;
  font-family: Merriweather;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`;

export const SecondaryText = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;
`;
export const SecondaryTitle = styled.h6`
  //styleName: H6;
  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;

  min-width: 10rem;
`;
export const SecondaryValue = styled.p`
  //styleName: P2;
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #f5f5ef;
`;

export const PlaceholderLogo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
