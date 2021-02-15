require('dotenv').config();
const queries = require('./src/utils/algolia-queries');

module.exports = {
  siteMetadata: {
    title: 'Augusto Mallmann',
    position: 'Front-end developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author: '@augustomallmann',
    siteUrl: 'https://www.mallmann.dev',
  },
  plugins: [
    'gatsby-plugin-transition-link',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    // must be the first to work with gatsby-remark-images

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Default to 100
        contentTypes: ['pages', 'blog-posts', 'portfolios'],
        singleTypes: ['hero', 'portofolio', 'menu', 'blog', 'global'],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          { resolve: 'gatsby-remark-relative-images', options: { name: 'uploads' } },
          { resolve: 'gatsby-remark-images', options: { maxWidth: 960, linkImagesToOriginal: false } },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-algolia-search',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
        },
        enablePartialUpdates: true, // default: false
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mallmann.dev',
        short_name: 'Mallmann.dev',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#E45E5D',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
    },

    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
};
