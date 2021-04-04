import React from "react";
import Layout from "@layouts";
import SEO from "@layouts/common/seo";
import { Categories, CategorySlider, RecentPost } from "./components";

const BlogPage = props => {
  return (
    <Layout dark>
      <SEO title="Blog" />
      <Categories />
      <RecentPost />
      <CategorySlider />
    </Layout>
  );
};

export default BlogPage;
