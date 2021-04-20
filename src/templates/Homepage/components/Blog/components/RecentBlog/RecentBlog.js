import React from "react";
import ArticleCard from "@components/ArticleCard";
import { BlogWrapper, BlogArticleWrapper } from "./RecentBlog.styles";
import { graphql, StaticQuery } from "gatsby";
import { CardContent } from "../../../../../BlogSinglePage/BlogSinglePage.data";

const RecentBlog = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          category: allWpCategory(filter: { name: { eq: "Addiction" } }) {
            nodes {
              name
              posts {
                nodes {
                  title
                  id
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
      `}
      render={data => (
        <BlogWrapper>
          {console.log(data)}
          {data &&
            data.category.nodes[0].posts.nodes.length &&
            data.category.nodes[0].posts.nodes.map((item, index) => (
              <BlogArticleWrapper key={index}>
                <ArticleCard
                  title={item.title}
                  date={item.date.substring(0, 10)}
                  image={item.featuredImage.node.sourceUrl}
                />
              </BlogArticleWrapper>
            ))}
        </BlogWrapper>
      )}
    />
  );
};

export default RecentBlog;
