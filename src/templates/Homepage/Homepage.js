import * as React from "react";

import Layout from "@layouts";
import SEO from "@layouts/common/seo";
import { Blog, Hero, Footer, FullPageText, Event } from "./components";

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <FullPageText />
      <Blog />
      <Event />
      <Footer />
    </Layout>
  );
};

export default Homepage;
