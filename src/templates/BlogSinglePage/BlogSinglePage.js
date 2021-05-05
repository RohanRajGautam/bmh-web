import React from "react";
import Layout from "@layouts";
import {
  BlogPageHero,
  BlogPageHeroInner,
  BlogPageMeta,
  BlogPageMetaWrapper,
  BlogPageShare,
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
            {/* <BlogPageShare>
              <span>Share</span>
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8228 18.5926C12.8576 18.6038 11.9429 18.1602 11.3505 17.3936C10.7582 16.6271 10.5564 15.6259 10.8053 14.6878L5.22178 11.4776C4.25695 12.3667 2.84269 12.5549 1.68121 11.9487C0.519731 11.3425 -0.141569 10.0709 0.025664 8.76543C0.192897 7.45994 1.15304 6.39858 2.42936 6.10834C3.70568 5.81809 5.02631 6.36079 5.73553 7.46696L10.8044 4.55188C10.7388 4.30261 10.7041 4.04616 10.701 3.78834C10.6882 2.28702 11.7247 0.98284 13.1834 0.664935C14.6421 0.34703 16.1223 1.10271 16.7284 2.47472C17.3344 3.84674 16.8999 5.45828 15.6878 6.33422C14.4756 7.21017 12.8187 7.10995 11.7196 6.09421L6.23324 9.24796C6.2278 9.48063 6.19548 9.71187 6.13691 9.93703L11.7196 13.1464C12.7473 12.1976 14.2765 12.0512 15.4638 12.7878C16.6511 13.5244 17.2073 14.9648 16.8258 16.3145C16.4442 17.6642 15.2177 18.5946 13.8228 18.5926ZM13.8228 14.1064C13.0838 14.1064 12.4848 14.709 12.4848 15.4523C12.4848 16.1956 13.0838 16.7981 13.8228 16.7981C14.5617 16.7981 15.1607 16.1956 15.1607 15.4523C15.1607 14.709 14.5617 14.1064 13.8228 14.1064ZM3.11947 7.82585C2.38057 7.82585 1.78157 8.42841 1.78157 9.17169C1.78157 9.91498 2.38057 10.5175 3.11947 10.5175C3.85838 10.5175 4.45738 9.91498 4.45738 9.17169C4.45738 8.42841 3.85838 7.82585 3.11947 7.82585ZM13.8228 2.4425C13.0838 2.4425 12.4848 3.04505 12.4848 3.78834C12.4848 4.53162 13.0838 5.13418 13.8228 5.13418C14.5617 5.13418 15.1607 4.53162 15.1607 3.78834C15.1607 3.04505 14.5617 2.4425 13.8228 2.4425Z"
                  fill="white"
                />
              </svg>
            </BlogPageShare> */}
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
