import React from "react";
import styled from "styled-components";

import EventDialog from "./EventDialog";
import { SPACING, COLORS } from "@components/constants";
import { mediaQueries } from "@components/MediaQueries";

const EventCard = styled.div`
  margin-right: ${SPACING.lg};
  min-width: 36rem;
  align-self: flex-end;
  &:hover {
    h2 {
      color: ${COLORS.primary};
    }
    cursor: pointer;
  }

  ${mediaQueries("sm")`
    margin-right: 5.2rem;
    min-width: 33rem;
  `}
`;

const ContentWrapper = styled.div`
  padding-left: 3.6rem;
  /* position: absolute;
  bottom: 0; */
  position: relative;

  &::before {
    background: ${COLORS.primary};
    content: "";
    position: absolute;
    left: 0;
    width: 1px;
    height: 100%;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.h4`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 2.1rem;
  line-height: 3.2rem;
  color: #596166;
`;

const Cost = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 3.2rem;
  color: #596166;
`;

const Time = styled.h5`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: #596166;
`;

const TitleWrapper = styled.div`
  margin-top: 4rem;

  &::before {
    background: ${COLORS.primary};
    content: "";
    position: absolute;
    left: 0;
    width: 10px;
    height: 100%;
    border-radius: 8px;
  }
`;

const Title = styled.h2`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 2.8rem;
  line-height: 3.9rem;
  color: #15141a;
`;

const Subtitle = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 3.2rem;
  color: #596166;

  margin-top: 1.2rem;
`;

const Card = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <EventCard onClick={handleClickOpen}>
        <ContentWrapper>
          <TopWrapper>
            <DateWrapper>
              <Date>{props.date}</Date>
              <Time>{props.time}</Time>
            </DateWrapper>
            {props.cost && <Cost>Cost: ${props.cost}</Cost>}
          </TopWrapper>
          <TitleWrapper>
            <Title>{props.title}</Title>
            {props.instructor && (
              <Subtitle>Featured Speaker: {props.instructor}</Subtitle>
            )}
            <Subtitle>{props.venue}</Subtitle>
          </TitleWrapper>
        </ContentWrapper>
      </EventCard>
      <EventDialog open={open} handleClose={handleClose} props={props} />
    </>
  );
};

export default Card;
