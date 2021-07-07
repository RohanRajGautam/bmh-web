import { graphql } from "gatsby";
import React from "react";

import Layout from "@layouts";
import Seo from "@layouts/common/seo";
import {
  BlogPageHero,
  BlogPageHeroInner,
  LogoContainer,
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
} from "./BlogSinglePage.styles";
import { RecentBlog } from "../Homepage/components/Blog/components";
import NextArticle from "./NextArticle";
import SocialShare from "@components/SocialShare";
import HomepageLogo from "@components/SvgComponent/homepage-logo";

const BlogSinglePage = ({ data, ...props }) => {
  const post = data?.allWpPost?.edges[0].node;
  return (
    <Layout>
      <Seo title={post?.title} />
      <BlogPageHero image={post?.featuredImage.node.sourceUrl}>
        <BlogPageHeroInner>
          <LogoContainer>
            <HomepageLogo />
          </LogoContainer>
          <BlogPageTextWrapper>
            <BlogPageTitleWrapper>
              <BlogPageTitle>{post?.title}</BlogPageTitle>
              <BlogPageMetaWrapper>
                <BlogPageMeta>
                  By {post?.author.node.name}
                  <span>-</span>
                </BlogPageMeta>
                <BlogPageMeta>{post?.date.substring(0, 10)}</BlogPageMeta>
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
          </BlogSidebar>
        </BlogContentWithSidebar>
        <NextArticle />
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
