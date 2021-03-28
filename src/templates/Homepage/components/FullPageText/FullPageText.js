import React from "react";
import styled from "styled-components";
import { Hidden } from "@material-ui/core";
import logoSm from "../../../../images/icons/logo.svg";

const FullPageText = () => {
  return (
    <TextContainer>
      <Hidden mdUp>
        <MobileTextContainer>
          <MobileView>
            <Quote>“</Quote>
            <br />
            It’s not
            <br />
            just what we do.
            <br />
            <FadedText>It’s who we are.</FadedText>
            <Quote>”</Quote>
          </MobileView>
          <Divider />
          <LogoImg src={logoSm} alt="bmh-logo" draggable="false" />
        </MobileTextContainer>
      </Hidden>
      <Hidden smDown>
        <Message>
          Leading
          <br />
          in Wholistic Mental Health
        </Message>
      </Hidden>
    </TextContainer>
  );
};

export default FullPageText;

const TextContainer = styled.div`
  background: #2c3336;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  transition: 2s ease;
  padding: 0 5vw;
`;
const Message = styled.h1`
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 7rem;
  line-height: 140.5%;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  user-select: none;
  transition: 2s ease;
`;

const MobileView = styled.h1`
  font-family: Merriweather;
  font-style: normal;
  font-weight: normal;
  font-size: 4rem;
  line-height: 140%;
  text-align: left;
  letter-spacing: 0.1px;
  color: #ffffff;
  user-select: none;
  transition: 2s ease;
`;

const MobileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 10;
`;

const Divider = styled.div`
  width: 8rem;
  height: 0px;
  background: #6ca448;
  margin-top: 7em;
  border: 2px solid #6ca448;
`;

const Quote = styled.span`
  color: #6ca448;
`;

const FadedText = styled.span`
  opacity: 0.2;
`;

const LogoImg = styled.img`
  opacity: 0.04;
  height: 95px;
  width: 100px;
  margin: 3em 2em 2em auto;
`;
