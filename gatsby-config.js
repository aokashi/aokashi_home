const { resolve } = require('path');
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Aokashi Home`,
    description: `Aokashi の個人サイトです。`,
    author: `@aokashi`,
    siteUrl: `https://www.aokashi.net`,
    openGraphImage: `/images/ah-ogp_image.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      }
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://aokashi.hatenablog.jp/rss`,
        name: `AokashiRoom`,
      }
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280
            }
          }
        ]
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aokashi Home`,
        short_name: `ah`,
        start_url: `/`,
        background_color: `#c0c0c0`,
        theme_color: `#000080`,
        display: `minimal-ui`,
        icon: `src/images/ah-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Nunito`]
        }
      }
    },
    `gatsby-plugin-catch-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
