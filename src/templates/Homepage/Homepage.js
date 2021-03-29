import * as React from "react";

import Layout from "@layouts";
import SEO from "@layouts/common/seo";
import { Blog, Hero, Footer, FullPageText, Newsletter } from "./components";

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <FullPageText />
      <Blog />
      <Newsletter />
      <Footer />
    </Layout>
  );
};

export default Homepage;
