import React from "react";
import styled from "styled-components";

import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import { Container } from "@components/Container";
import { Categories, CategorySlider } from "./components";

const BlogPageWrapper = styled(Container)`
  padding: 8.4rem 10rem;

  @media (max-width: 1500px) {
    padding: 8.4rem 7rem;
  }

  @media (max-width: 1024px) {
    padding: 13.3rem 5vw;
  }
`;

const BlogPage = props => {
  return (
    <Layout dark>
      <Seo title="Blog" />
      <BlogPageWrapper>
        <Categories data={props && props.data.category.edges[0].node} />
        {/* <RecentPost data={props && props.data.categoryTwo.edges[0].node} /> */}
        <CategorySlider data={props.data.allPost.nodes} />
      </BlogPageWrapper>
    </Layout>
  );
};

export default BlogPage;
