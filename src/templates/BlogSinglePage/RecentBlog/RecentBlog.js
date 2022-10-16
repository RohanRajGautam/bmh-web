import React from "react";
import { BlogWrapper } from "./RecentBlog.styles";
import { graphql, StaticQuery } from "gatsby";
import BlogCard from "../../Homepage/components/Blog/components/Card/Card";

const RecentBlog = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          category: allWpPost(sort: { fields: date, order: DESC }, limit: 4) {
            nodes {
              title
              date
              uri
              featuredImage {
                node {
                  sourceUrl
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 600, quality: 64) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <BlogWrapper>
          {data?.category.nodes.length &&
            data.category.nodes.map((item, index) => (
              <BlogCard
                url={item.uri}
                title={item.title}
                date={item.date}
                thumbnail={
                  item.featuredImage.node &&
                  item.featuredImage.node?.localFile?.childImageSharp?.fluid
                }
                key={index}
              />
            ))}
        </BlogWrapper>
      )}
    />
  );
};

export default RecentBlog;
