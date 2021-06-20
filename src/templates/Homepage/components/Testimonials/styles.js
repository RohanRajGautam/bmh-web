import styled from "styled-components";
import { SPACING } from "@components/constants";
import { Container } from "@components/Container";
import person from "@images/testimonial.png";

export const MainContainer = styled(Container)`
  background: #f5f5ef;
  position: relative;
  margin-top: ${SPACING.xxl};
  padding-top: ${SPACING.xl};

  height: 120vh;
`;

export const Header = styled.div`
  text-align: center;
`;

export const Cta = styled.div`
  text-align: center;
  margin-top: 10.2rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 5;
  -webkit-backface-visibility: hidden;
`;

export const People = styled.div`
  /* padding: 11.1rem 7.4rem 3.5rem 5.7rem; */
  text-align: center;
  background: url(${person}) no-repeat center;
  background-position: 50% 50%;
  height: 70%;
`;

export const BackgroundVector = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
