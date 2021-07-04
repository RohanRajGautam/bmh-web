import React from "react";
import styled from "styled-components";

import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import { Container } from "@components/Container";
import { Categories, CategorySlider } from "./components";
import FullLogoAlt from "@images/icons/full-logo-alt";

const BlogPageWrapper = styled(Container)`
  padding: 5.2rem 10rem;

  @media (max-width: 1500px) {
    padding: 5.2rem 7rem;
  }

  @media (max-width: 1024px) {
    padding: 5.2rem 5vw;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 5.2rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

const BlogPage = props => {
  return (
    <Layout dark>
      <Seo title="Blog" />
      <BlogPageWrapper>
        <LogoWrapper>
          <FullLogoAlt to="/" />
        </LogoWrapper>
        <Categories data={props && props.data.category.edges[0].node} />
        {/* <RecentPost data={props && props.data.categoryTwo.edges[0].node} /> */}
        <CategorySlider data={props.data.allPost.nodes} />
      </BlogPageWrapper>
    </Layout>
  );
};

export default BlogPage;
