import React from "react";
import Layout from "@layouts";
import SEO from "@layouts/common/seo";
import { Categories, RecentPost } from "./components";

const BlogPage = props => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Categories />
      <RecentPost />
    </Layout>
  );
};

export default BlogPage;
