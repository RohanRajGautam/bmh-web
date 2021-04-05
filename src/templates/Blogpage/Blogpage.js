import React from "react";
import Layout from "@layouts";
import SEO from "@layouts/common/seo";
import { Categories, CategorySlider, RecentPost } from "./components";

const BlogPage = props => {
  console.log(props);
  return (
    <Layout dark>
      <SEO title="Blog" />
      <Categories data={props && props.data.category.edges[0].node} />
      <RecentPost data={props && props.data.categoryTwo.edges[0].node} />
      <CategorySlider data={props.data.allPost.nodes} />
    </Layout>
  );
};

export default BlogPage;
