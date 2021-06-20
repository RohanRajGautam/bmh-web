import styled from "styled-components";
import { SPACING, COLORS } from "@components/constants";
import { Container } from "@components/Container";
import { HeadingSecondary } from "@components/Heading";
import { mediaQueries } from "@components/MediaQueries";

const graniteGrey = "#2C3336";
const border = "#C5CCD3";

export const EventWrapper = styled(Container)`
  padding-top: ${SPACING.xl};
  padding-bottom: ${SPACING.xxl};
  padding-left: 11.3rem;

  ${mediaQueries("lg")`
    padding-left: 5vw;
  `}

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
    .MuiPopover-root {
      .MuiPaper-root {
        .MuiPickersBasePicker-container {
          .MuiPickersBasePicker-pickerView {
            .MuiPickersYearSelection-container {
              .MuiPickersYear-yearSelected {
                font-size: 3rem;
              }
              .MuiPickersYear-root {
                font-size: 2rem;
              }
            }
            .MuiPickersMonthSelection-container {
              .MuiPickersMonth-root {
                font-size: 2rem;
              }
              .MuiPickersMonth-monthSelected {
                font-size: 2.5rem;
              }
            }
          }
        }
      }
    }
    .MuiFormControl-root {
      padding: 12px 20px;
    }
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Header = styled.div`
  text-align: left;
`;

export const Subtitle = styled(HeadingSecondary)`
  margin-bottom: ${SPACING.xs};
`;

export const DatePickerWrapper = styled.div`
  padding-right: ${SPACING.lg};
  margin-bottom: ${SPACING.xs};

  ${mediaQueries("sm")`
    display: none;
  `}
`;

export const EventSliderWrapper = styled.div`
  margin-top: ${SPACING.lg};
  /* position: relative; */
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
  color: ${COLORS.primary};
`;

export const EventDate = styled.div`
  font-size: 18px;
  transition: color 300ms;
  letter-spacing: 0.1px;
`;

export const EventTitle = styled.h2`
  font-size: 2rem;
  font-family: Merriweather;
  transition: color 300ms;
  line-height: 1.6;
  font-weight: 900;
  letter-spacing: 0.1px;
  margin-top: 120px;
  margin-bottom: 20px;
  color: ${COLORS.primary};
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

export const EventDatePickerWrapper = styled.div`
  border: 1px solid ${border};
  max-width: 20rem;
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EventDatePickerArrow = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export const NotFoundContainer = styled.div``;
export const NotFoundText = styled.p`
  font-size: 3rem;
`;
