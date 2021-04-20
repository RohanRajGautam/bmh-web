import React from "react";
import BlogSinglePage from "../templates/BlogSinglePage";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  console.log(data);
  return <BlogSinglePage title="Blog page" />;
};

export default BlogPage;

export const query = graphql`
  query {
    allPost: allWpPost {
      nodes {
        id
        uri
        slug
        title
        date
        excerpt
        authorId
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
