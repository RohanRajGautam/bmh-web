import styled from "styled-components";
import { SPACING } from "@components/constants";

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 20vh; */
`;
export const HeadingSecondary = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #596166;

  opacity: 0.5;
  text-transform: uppercase;

  margin-bottom: ${SPACING.sm};
`;
export const HeadingPrimary = styled.h3`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 5rem;
  line-height: 120%;

  color: #000000;

  span {
    font-family: Smiley;
    font-size: 5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 6rem;
    letter-spacing: 0em;
  }
`;
