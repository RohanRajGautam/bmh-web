import React from "react";
import {
  Wrapper,
  HeadingWrapper,
  Title,
  Subtitle,
  ServicesWrapper,
  ServicesItemWrapper,
  ServicesItems,
  Anchor,
} from "./DualPage.styles";
import { MedicalTitle, MedicalDesc, MedicalServices } from "./DualPage.data";
import ServicePopup from "./ServicePopup";

const ItemWrapper = ({ props }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ServicesItems img={props.img}>
        <Anchor onClick={handleClickOpen}>{props.title}</Anchor>
      </ServicesItems>
      <ServicePopup open={open} handleClose={handleClose} props={props} />
    </>
  );
};

const MedicalPage = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title>{MedicalTitle}</Title>
        <Subtitle>{MedicalDesc}</Subtitle>
      </HeadingWrapper>
      <ServicesWrapper>
        <ServicesItemWrapper>
          {MedicalServices?.map((item, index) => (
            <ItemWrapper key={index} props={item} />
          ))}
        </ServicesItemWrapper>
      </ServicesWrapper>
    </Wrapper>
  );
};

export default MedicalPage;
