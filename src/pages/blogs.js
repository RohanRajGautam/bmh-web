import React from "react";
import Page from "../templates/AllBlogs";
import { graphql } from "gatsby";

const Blogs = ({ data }) => {
  return <Page data={data} />;
};

export const query = graphql`
  query {
    allWpPost(sort: { fields: date, order: DESC }) {
      nodes {
        title
        date
        uri
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default Blogs;
