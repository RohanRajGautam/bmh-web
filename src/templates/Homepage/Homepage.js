import * as React from "react";
import Layout from "@layouts";
import SEO from "@layouts/common/seo";
import { Blog, Hero, Footer, FullPageText, Donate, Newsletter, Event } from "./components";

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <FullPageText />
      <Blog />
      <Event />
      <Donate />
      <Newsletter />
      <Footer />
    </Layout>
  );
};

export default Homepage;
