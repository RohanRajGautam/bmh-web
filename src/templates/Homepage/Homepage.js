import * as React from "react"

import Layout from "../../layouts"
import SEO from "../../layouts/common/seo"
import { Blog, Hero } from "./components";

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Blog />
    </Layout>
  );
}

export default Homepage
