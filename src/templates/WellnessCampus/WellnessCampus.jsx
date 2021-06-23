import React from "react";

import Layout from "@layouts";
import Seo from "@layouts/common/seo";

const WellnessCampus = ({ title }) => {
  return (
    <Layout dark>
      <Seo title={title} />
    </Layout>
  );
};

export default WellnessCampus;
