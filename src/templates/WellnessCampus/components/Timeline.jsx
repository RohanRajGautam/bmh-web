import React from "react";
import styled from "styled-components";
import { COLORS } from "@components/constants";

const Container = styled.div`
  margin: 13.6rem 0;

  overflow-x: scroll;
  overflow-y: hidden;
  user-select: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    overflow-x: hidden;
    margin-top: 3.2rem;
    margin-bottom: 13.6rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-left: 10%;

  &::before {
    content: "";
    position: absolute;
    top: 45%;
    width: 100%;
    height: 1px;
    background: #15141a;
  }

  @media (max-width: 600px) {
    padding-left: 5vw;

    &::before {
      top: 0;
      left: 33%;
      width: 1px;
      height: 100%;
      bottom: 0;
    }
  }
`;

const ItemsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  list-style: none;
  position: relative;
  margin-right: 6.7rem;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 5.2rem;
  }
`;

const Top = styled.div`
  color: #15141a;
  padding-bottom: 4rem;
  position: relative;

  &::after {
    background: ${COLORS.primary};
    content: "";
    position: absolute;
    bottom: 1rem;
    right: 0;
    width: 4px;
    height: 6px;
    border-radius: 50px;
  }

  h4 {
    font-family: Merriweather;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.9rem;
    letter-spacing: 0em;
    text-align: right;
    color: inherit;
  }

  p {
    font-family: Mulish;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0em;
    text-align: right;
    color: inherit;
  }

  @media (max-width: 600px) {
    padding-bottom: 0;
    position: absolute;

    &::after {
      content: none;
    }
  }
`;

const Bottom = styled.div`
  padding-top: 5rem;
  position: relative;
  min-width: max-content;

  &::after {
    background: ${COLORS.primary};
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1px;
    height: 100%;
  }

  @media (max-width: 600px) {
    padding-top: 0;

    &::after {
      content: none;
    }
  }
`;

const EventDesc = styled.p`
  font-family: Mulish;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0em;
  text-align: right;
  padding-right: 8px;

  position: relative;

  &::after {
    background: ${COLORS.primary};
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 4px;
    height: 100%;
    border-radius: 50px;
  }

  @media (max-width: 600px) {
    text-align: left;
    padding-left: 40%;

    &::after {
      bottom: 1rem;
      left: 29%;
      width: 4px;
      height: 6px;
    }
  }
`;

const LastItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8.2rem;

  @media (max-width: 600px) {
    margin-right: 0;
    padding: 5.2rem 0;
    flex-direction: row;
    position: relative;
  }
`;

const LastTop = styled.div`
  color: #15141a;
  padding-bottom: 5rem;
  position: relative;

  h4 {
    font-family: Merriweather;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.9rem;
    letter-spacing: 0em;
    text-align: right;
    color: inherit;
  }

  p {
    font-family: Mulish;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0em;
    text-align: right;
    color: inherit;
  }

  @media (max-width: 600px) {
    padding-bottom: 0;
    position: absolute;
  }
`;

const LastBottom = styled.div`
  width: 7rem;
  padding-top: 5rem;

  p {
    font-family: Mulish;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0em;
    text-align: center;
  }

  @media (max-width: 600px) {
    padding-top: 0;
    width: max-content;
    padding-left: 40%;

    &::after {
      content: none;
    }
  }
`;

const MiddleLogo = styled.div`
  background: ${COLORS.primary};
  border-radius: 50%;
  width: 41px;
  height: 41px;

  position: absolute;
  top: 38%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (min-width: 1085px) {
    top: 36%;
  }

  @media (min-width: 1265px) {
    top: 35%;
  }

  @media (max-width: 600px) {
    top: 30%;
    left: 25%;
  }
`;

const BhmWhiteLogo = () => (
  <svg
    width="27"
    height="24"
    viewBox="0 0 27 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0965 11.6457C13.3488 12.1353 13.4957 12.7863 13.5483 13.4894C14.2157 12.9269 15.8444 12.6197 17.1318 13.1301C15.776 13.1301 14.0948 13.854 13.5483 14.6092C13.4485 16.0935 12.9495 17.5622 12.1035 18.1143C15.7814 18.6872 17.2632 13.8332 20.3579 14.2134C19.1284 11.2135 14.678 10.5729 13.0965 11.6457Z"
      fill="white"
    />
    <path
      d="M10.2077 4.23424C5.86777 4.77067 2.27408 12.6715 5.48432 23.1972C5.72592 23.9992 6.34078 23.9107 7.43884 23.7961C13.5652 23.1555 25.2976 21.9055 26.0122 13.9735C26.4641 8.96847 22.4655 5.38524 17.5581 5.06756C17.4426 5.06232 17.3482 4.97902 17.2956 4.88004C16.5443 3.44781 13.8384 0 10.1238 0C-0.75758 0 -1.06756 17.9734 1.95874 22.8013C2.66289 23.9211 3.69257 23.7961 3.42979 23.0565C0.692553 15.3953 3.06216 2.38013 10.3968 2.38013C12.7454 2.38013 14.3742 3.82799 15.9611 6.8227C16.0241 6.94768 16.1606 6.99457 16.2973 7.01019C21.6197 7.70808 23.737 11.1455 23.4061 14.0048C23.0382 17.213 20.6265 20.6556 7.23907 22.1347C6.59284 20.8587 5.11133 12.8017 7.49649 8.98929C6.39843 13.635 7.49649 17.7911 8.40041 19.2598C11.1744 18.1505 12.2043 16.8953 12.2043 14.1037C12.2043 9.98925 8.38969 7.63516 10.2077 4.23424Z"
      fill="white"
    />
  </svg>
);

const Timeline = () => {
  return (
    <Container>
      <TimelineContainer>
        <ItemsWrapper>
          <Item>
            <Top>
              <h4>2011</h4>
              <p>April,</p>
            </Top>
            <Bottom>
              <EventDesc>
                Opened Beautiful
                <br /> Minds Medical
                <br /> (clinic)
              </EventDesc>
            </Bottom>
          </Item>
          <Item>
            <Top>
              <h4>2017</h4>
              <p>February,</p>
            </Top>
            <Bottom>
              <EventDesc>
                Founded Beautiful
                <br /> Minds Wellness
                <br /> (non-profit)
              </EventDesc>
            </Bottom>
          </Item>
          <Item>
            <Top>
              <h4>2021</h4>
              <p>April,</p>
            </Top>
            <Bottom>
              <EventDesc>
                Purchased land
                <br /> for future
                <br /> wellness center
              </EventDesc>
            </Bottom>
          </Item>
          <Item>
            <Top>
              <h4>2021</h4>
              <p>May,</p>
            </Top>
            <Bottom>
              <EventDesc>
                Developed
                <br /> building plans
              </EventDesc>
            </Bottom>
          </Item>
          <Item>
            <Top>
              <h4>2022</h4>
              <p>April,</p>
            </Top>
            <Bottom>
              <EventDesc>Break ground</EventDesc>
            </Bottom>
          </Item>
          <LastItem>
            {/* <LastTop>
              <h4>Future</h4>
            </LastTop> */}
            <LastTop>
              <h4>2024</h4>
              <p>April,</p>
            </LastTop>
            <MiddleLogo>
              <BhmWhiteLogo />
            </MiddleLogo>
            <LastBottom>
              <p>Complete Wellness Campus!</p>
            </LastBottom>
          </LastItem>
        </ItemsWrapper>
      </TimelineContainer>
    </Container>
  );
};

export default Timeline;
