import React from "react";
import Page from "../templates/Blogpage";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  return <Page data={data} />;
};

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
    category: allWpCategory(filter: { name: { eq: "Mindfulness" } }) {
      edges {
        node {
          name
          posts {
            nodes {
              title
              id
              uri
              date
              author {
                node {
                  name
                }
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
    categoryTwo: allWpCategory(filter: { name: { eq: "Addiction" } }) {
      edges {
        node {
          name
          posts {
            nodes {
              title
              uri
              id
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
