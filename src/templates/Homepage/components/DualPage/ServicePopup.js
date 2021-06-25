import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Button from "@components/Button";
import placeholderImg from "@images/icons/placeholder-logo.png";

const useStyles = makeStyles(() => ({
  closeButton: {
    position: "absolute",
    right: "1rem",
    top: "1rem",
    color: "#8CA8BE",

    "&:hover": {
      color: "#6CA448",
    },
  },
}));

const Container = styled.div`
  .MuiDialog-paperWidthSm {
    max-width: 635px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background: #fff; */
  box-shadow: 5px 4px 45px rgba(0, 0, 0, 0.12);
  padding: 3.2rem;
  position: relative;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const ImageWrapper = styled.div`
  height: 201px;
  width: 169px;
  border-radius: 24px;
  background: url(${props => props.img}), #6ca448;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 700px) {
    margin-bottom: 3.2rem;
  }
`;
const ContentDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40rem;
  padding-left: 3.2rem;

  @media (max-width: 700px) {
    padding-left: 0;
  }
`;
const Description = styled.p`
  font-family: Mulish;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem;
  letter-spacing: 0em;
  text-align: left;
`;
const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const DialogTitle = styled.div`
  padding-bottom: 3.2rem;
`;

const EventTitle = styled.h4`
  font-family: Merriweather;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
`;
const DialogContent = styled.div`
  z-index: 1;
`;
const PlaceholderLogo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const ServicePopup = ({ open, handleClose, props, onClose }) => {
  const classes = useStyles();

  return (
    <Container>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        PaperProps={{
          style: { borderRadius: 24, maxWidth: 635 },
        }}
      >
        <Wrapper>
          <DialogTitle>
            <EventTitle>{props.title}</EventTitle>
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <ContentWrapper>
              <ImageWrapper img={props.img} />
              <ContentDesc>
                <Description>{props.desc}</Description>
                <ButtonWrapper>
                  <Button to={props.to} text="More" nextPage />
                </ButtonWrapper>
              </ContentDesc>
            </ContentWrapper>
          </DialogContent>
          <PlaceholderLogo>
            <img
              src={placeholderImg}
              alt="placeholder-logo"
              draggable={false}
            />
          </PlaceholderLogo>
        </Wrapper>
      </Dialog>
    </Container>
  );
};

export default ServicePopup;
