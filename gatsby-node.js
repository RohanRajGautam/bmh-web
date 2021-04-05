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
      allWpPost {
        nodes {
          id
          uri
          slug
          title
          date
          authorId
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);
  const postTemplate = path.resolve(`./src/templates/BlogSinglePage/index.js`);
  allPosts.forEach(post => {
    createPage({
      // will be the url for the page
      path: post.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    });
  });
};
