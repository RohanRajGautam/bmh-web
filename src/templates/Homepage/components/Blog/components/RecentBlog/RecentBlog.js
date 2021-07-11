import React from "react";
import { BlogWrapper } from "./RecentBlog.styles";
import { graphql, StaticQuery } from "gatsby";
import BlogCard from "../Card/Card";

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
                      fluid(maxWidth: 600) {
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
          {console.log(data)}
          {data?.category.nodes.length &&
            data.category.nodes.map((item, index) => (
              // <>
              //   <BlogArticleWrapper key={index}>
              //     <ArticleCard
              //       title={item.title}
              //       date={item.date.substring(0, 10)}
              //       image={item.featuredImage.node.sourceUrl}
              //       url={item.uri}
              //     />
              //   </BlogArticleWrapper>
              // </>
              <BlogCard
                url={item.uri}
                title={item.title}
                date={item.date}
                thumbnail={
                  item.featuredImage.node &&
                  item.featuredImage.node.localFile.childImageSharp.fluid
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
