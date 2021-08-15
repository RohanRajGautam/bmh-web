module.exports = {
  siteMetadata: {
    title: `Beautiful Minds Health`,
    description: `Get Your Life Back. We treat and prevent mental illness through wholistic medical care & wellness education.`,
    author: `@webpoint`,
    siteUrl: `https://beautifulmindshealth.com`,
    social: {
      twitter: `beautifulmindshealth`,
    },
  },
  plugins: [
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Merriweather",
            weights: ["300", "400", "700"],
          },
          {
            family: "Mulish",
            weights: ["300", "400", "700"],
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
        ],
      },
    },
    `gatsby-remark-prismjs`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-optimize-svgs",
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beautiful Minds Health`,
        short_name: `BMH`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6CA448`,
        display: `minimal-ui`,
        icon: `src/images/icons/bmh_alt.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/icons/bhm_alt_192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: "maskable",
          },
          {
            src: `src/images/icons/bhm_alt_512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ], // Add or remove icon sizes as desired
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL || `http://bmw.webpoint.io/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
          perPage: 30, // nodes per page
          timeout: 180000,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  null,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://beautifulmindshealth.com`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://beautifulmindshealth.com/",
        sitemap: "https://beautifulmindshealth.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
