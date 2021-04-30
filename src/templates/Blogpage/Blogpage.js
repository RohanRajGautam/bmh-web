import React from "react";
import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import { Categories, CategorySlider, RecentPost } from "./components";

const BlogPage = props => {
  return (
    <Layout dark>
      <Seo title="Blog" />
      <Categories data={props && props.data.category.edges[0].node} />
      <RecentPost data={props && props.data.categoryTwo.edges[0].node} />
      <CategorySlider data={props.data.allPost.nodes} />
    </Layout>
  );
};

export default BlogPage;
