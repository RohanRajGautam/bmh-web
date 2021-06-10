import React from "react";
import MedicalPage from "./MedicalPage";
import WellnessPage from "./WellnessPage";
import { Container, Medical, Wellness } from "./DualPage.styles";

const DualPage = () => {
  return (
    <Container id="medical-wellness">
      <Medical>
        <MedicalPage />
      </Medical>
      <Wellness>
        <WellnessPage />
      </Wellness>
    </Container>
  );
};

export default DualPage;
