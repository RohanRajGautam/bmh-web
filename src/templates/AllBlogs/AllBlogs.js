import React from "react";
import Layout from "@layouts";
import SEO from "@layouts/common/seo";
import {
  AllCardWrapper,
  AllBlogPageWrapper,
  AllBlogHeading,
} from "./AllBlogs.styles";
import { BlogCard } from "../Homepage/components/Blog/components";

const AllBlogs = ({ data }) => {
  console.log(data);
  return (
    <Layout dark>
      <SEO title="Blog" />
      <AllBlogPageWrapper>
        <AllBlogHeading clean>Beautiful Minds Blogs</AllBlogHeading>
        <AllCardWrapper>
          {data?.allWpPost.nodes.length &&
            data.allWpPost.nodes.map((item, index) => (
              <BlogCard
                key={index}
                url={item.uri}
                title={item.title}
                thumbnail={
                  item.featuredImage.node && item.featuredImage.node.sourceUrl
                }
                desc={item.excerpt?.replace(/<[^>]+>/g, "")}
              />
            ))}
        </AllCardWrapper>
      </AllBlogPageWrapper>
    </Layout>
  );
};

export default AllBlogs;
