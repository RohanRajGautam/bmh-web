import styled from "styled-components";
import { COLORS } from "@components/constants";

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
  min-height: 50vh;
  display: flex;
`;

export const DialogTitle = styled.div`
  /* height: 100%; */
  width: 50%;
  background: linear-gradient(285.38deg, #f7d525 -12.17%, #86cf57 81.52%);
`;

export const DialogContent = styled.div`
  /* height: 100%; */
  width: 50%;
  border-radius: 12px;
  margin: 4rem 0 0 3rem;

  @media (max-width: 576px) {
    margin: 4rem 2rem;
  }
`;

export const EventTitle = styled.h2`
  font-size: 4rem;
  font-family: Merriweather;
  transition: color 300ms;
  line-height: 1.6;
  font-weight: 900;
  letter-spacing: 0.1px;
  color: #fff;
  margin: 4rem 3rem 1rem;
  @media (max-width: 600px) {
    font-size: 2.3rem;
    margin: 4rem 2rem 1rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  padding-top: 1rem;
`;

export const Title = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 147.69%;
  letter-spacing: 0.1px;
  color: #5f6468;
`;
export const Value = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 147.69%;
  letter-spacing: 0.1px;
  color: ${COLORS.primary};
`;

export const Divider = styled.div`
  width: 5rem;
  height: 5px;
  position: relative;
  background: #fff;
  left: 3rem;

  @media (max-width: 576px) {
    left: 2rem;
  }
`;
