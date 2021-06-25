import React from "react";
import {
  Wrapper,
  HeadingWrapper,
  Title,
  Subtitle,
  ServicesWrapper,
  ServicesItemWrapper,
  WellnessServicesItems,
  Anchor,
} from "./DualPage.styles";
import { WellnessTitle, WellnessDesc, WellnessServices } from "./DualPage.data";
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
      <WellnessServicesItems img={props.img}>
        <Anchor onClick={handleClickOpen}>{props.title}</Anchor>
      </WellnessServicesItems>
      <ServicePopup open={open} handleClose={handleClose} props={props} />
    </>
  );
};

const WellnessPage = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title>{WellnessTitle}</Title>
        <Subtitle>{WellnessDesc}</Subtitle>
      </HeadingWrapper>
      <ServicesWrapper>
        <ServicesItemWrapper style={{ maxWidth: "85rem" }}>
          {WellnessServices.map((item, index) => (
            <ItemWrapper key={index} props={item} />
          ))}
        </ServicesItemWrapper>
      </ServicesWrapper>
    </Wrapper>
  );
};

export default WellnessPage;
