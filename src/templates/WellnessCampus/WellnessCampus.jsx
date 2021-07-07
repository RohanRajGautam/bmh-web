import React from "react";
import styled from "styled-components";

import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import { Container } from "@components/Container";

import { Banner } from "./components";
import {
  FutureSectionWholistic,
  FutureSectionHealthy,
} from "./components/FutureSection";
import { ImageSliderFirst, ImageSliderSecond } from "./components/ImageSlider";
import FullPageImage from "./components/FullPageImage";

const WellnessContainer = styled(Container)``;

const WellnessCampus = ({ title }) => {
  return (
    <Layout dark>
      <Seo title={title} />
      <WellnessContainer>
        <Banner />
        <FutureSectionWholistic />
        <ImageSliderFirst />
        <FutureSectionHealthy />
        <ImageSliderSecond />
        <FullPageImage />
      </WellnessContainer>
    </Layout>
  );
};

export default WellnessCampus;
