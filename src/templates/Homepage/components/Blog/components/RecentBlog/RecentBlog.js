import React from "react";
import ArticleCard from "@components/ArticleCard";
import { BlogWrapper, BlogArticleWrapper } from "./RecentBlog.styles";
import { graphql, StaticQuery } from "gatsby";

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
                }
              }
            }
          }
        }
      `}
      render={data => (
        <BlogWrapper>
          {console.log(data)}
          {data?.category.nodes.length &&
            data.category.nodes.map((item, index) => (
              <>
                <BlogArticleWrapper key={index}>
                  <ArticleCard
                    title={item.title}
                    date={item.date.substring(0, 10)}
                    image={item.featuredImage.node.sourceUrl}
                    url={item.uri}
                  />
                </BlogArticleWrapper>
              </>
            ))}
        </BlogWrapper>
      )}
    />
  );
};

export default RecentBlog;
