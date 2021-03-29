import styled from "styled-components";
import { Heading } from "@components/Heading";
import { Button } from "@components/Button";

export const StoryContainer = styled.div`
  position: relative;
  /* white-space: nowrap; */
  overflow: hidden;
  max-height: 100vh;
`;

export const Content = styled.div`
  float: left;
  z-index: 9;
  position: relative;
  max-width: 40%;
  margin: 5vh 5vw;
  max-height: 60%;

  @media screen and (max-width: 960px) {
    max-width: 60%;
  }
  @media screen and (max-width: 590px) {
    max-width: 90%;
  }
`;

export const HeadingWrapper = styled(Heading)`
  max-height: 20%;
`;

export const TextWrapper = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 1.75rem;
  line-height: 160%;
  letter-spacing: 0.1px;
  color: #828282;
  padding: 8rem 0;
`;

export const GrayBackground = styled.div`
  position: absolute;
  background-color: #c5ccd3;
  border-radius: 4px;
  height: 93%;
  width: 65vw;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
`;

export const ButtonWrapper = styled(Button)`
  bottom: 0;
`;
