import React from "react";
import styled from "styled-components";
import { COLORS } from "@components/constants";
import logoXs from "@images/icons/logo-xs-white.png";

const Container = styled.div`
  margin: 13.6rem 0;
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
`;

const ItemsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;

const Item = styled.li`
  list-style: none;
  position: relative;
  margin-right: 6.7rem;
`;

const Top = styled.div`
  color: #15141a;
  padding-bottom: 5rem;
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
`;
const Bottom = styled.div`
  padding-top: 5rem;
  position: relative;

  &::after {
    background: ${COLORS.primary};
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1px;
    height: 100%;
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
`;

const LastItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 8.2rem;
`;

const LastTop = styled.div`
  padding-bottom: 3rem;

  h4 {
    font-family: Merriweather;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.9rem;
    letter-spacing: 0em;
    text-align: center;
  }
`;
const LastBottom = styled.div`
  width: 7rem;
  padding-top: 3rem;

  p {
    font-family: Mulish;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0em;
    text-align: center;
  }
`;

const MiddleLogo = styled.div`
  background: ${COLORS.primary};
  border-radius: 50%;
  width: 61px;
  height: 61px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

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
            <LastTop>
              <h4>Future</h4>
            </LastTop>
            <MiddleLogo>
              <img src={logoXs} alt="logo" />
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
