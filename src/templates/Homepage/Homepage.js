import * as React from "react";

import Layout from "../../layouts";
import SEO from "../../layouts/common/seo";
import { Blog, Hero, Footer } from "./components";

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Blog />
      <Footer />
    </Layout>
  );
};

export default Homepage;
