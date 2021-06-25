import React from "react";
import MedicalPage from "./MedicalPage";
import WellnessPage from "./WellnessPage";
import { MainContainer, Medical, Wellness } from "./DualPage.styles";

const DualPage = () => {
  return (
    <MainContainer>
      <Medical>
        <MedicalPage />
      </Medical>
      <Wellness>
        <WellnessPage />
      </Wellness>
    </MainContainer>
  );
};

export default DualPage;
