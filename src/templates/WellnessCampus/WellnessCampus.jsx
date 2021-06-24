import React from "react";
import styled from "styled-components";

import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import { Container } from "@components/Container";

import { Banner } from "./components";

const WellnessContainer = styled(Container)``;

const WellnessCampus = ({ title }) => {
  return (
    <Layout dark>
      <Seo title={title} />
      <WellnessContainer>
        <Banner />
      </WellnessContainer>
    </Layout>
  );
};

export default WellnessCampus;
