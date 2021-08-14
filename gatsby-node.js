const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@static": path.resolve(__dirname, "static"),
        "@images": path.resolve(__dirname, "src/images"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@data": path.resolve(__dirname, "src/data"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
      },
    },
  });
};

const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost(sort: { order: DESC, fields: [date] }) {
        nodes {
          id
          uri
          title
          slug
          date
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const postTemplate = path.resolve(
    `./src/templates/BlogSinglePage/BlogSinglePage.js`
  );

  allPosts.forEach((post, i) => {
    createPage({
      path: `/blogs${post.uri}`,
      component: slash(postTemplate),
      context: {
        id: post.id,
        prev: i === 0 ? null : allPosts[i - 1],
        next: i === allPosts.length - 1 ? null : allPosts[i + 1],
      },
    });
  });
};
