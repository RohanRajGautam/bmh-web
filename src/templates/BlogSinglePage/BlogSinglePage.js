import React from "react";
import Layout from "@layouts";
import {
  BlogPageHero,
  BlogPageHeroInner,
  BlogPageMeta,
  BlogPageMetaWrapper,
  BlogPageTextWrapper,
  BlogPageTitle,
  BlogPageTitleWrapper,
  BlogContentWrapper,
  BlogContentWithSidebar,
  BlogContent,
  BlogSidebar,
  BlogSidebarTitle,
  BlogViewMore,
} from "./BlogSinglePage.styles";
import Seo from "@layouts/common/seo";
import { graphql } from "gatsby";
import { RecentBlog } from "../Homepage/components/Blog/components";
import SocialShare from "@components/SocialShare";

const BlogSinglePage = ({ data, ...props }) => {
  const post = data?.allWpPost?.edges[0].node;
  return (
    <Layout>
      <Seo title={post?.title} />
      <BlogPageHero image={post?.featuredImage.node.sourceUrl}>
        <BlogPageHeroInner>
          <BlogPageTextWrapper>
            <BlogPageTitleWrapper>
              <BlogPageTitle>{post?.title}</BlogPageTitle>
              <BlogPageMetaWrapper>
                <BlogPageMeta>{post?.author.node.name}</BlogPageMeta>
                <BlogPageMeta>- {post?.date.substring(0, 10)}</BlogPageMeta>
              </BlogPageMetaWrapper>
            </BlogPageTitleWrapper>
            <SocialShare slug={post?.slug} title={post?.title} />
          </BlogPageTextWrapper>
        </BlogPageHeroInner>
      </BlogPageHero>
      <BlogContentWrapper>
        <BlogContentWithSidebar>
          <BlogContent>
            <div dangerouslySetInnerHTML={{ __html: post?.content }} />
          </BlogContent>
          <BlogSidebar>
            <BlogSidebarTitle>Recent Articles</BlogSidebarTitle>
            <RecentBlog />
            <BlogViewMore to="/blogs">View More</BlogViewMore>
          </BlogSidebar>
        </BlogContentWithSidebar>
      </BlogContentWrapper>
    </Layout>
  );
};

export default BlogSinglePage;

export const query = graphql`
  query($id: String!) {
    allWpPost(filter: { id: { eq: $id } }) {
      edges {
        node {
          title
          id
          slug
          author {
            node {
              name
            }
          }
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          content
        }
      }
    }
  }
`;
