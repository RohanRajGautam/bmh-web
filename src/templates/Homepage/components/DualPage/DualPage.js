import React from "react";
import { MedicalPage, WellnessPage } from "./components";
import { Container, Medical, Wellness } from "./DualPage.styles";

const DualPage = () => {
  return (
    <Container>
      <Medical data-aos="fade-right">
        <MedicalPage />
      </Medical>
      <Wellness data-aos="fade-left">
        <WellnessPage />
      </Wellness>
    </Container>
  );
};

export default DualPage;
