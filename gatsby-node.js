const path = require('path');

// const { createFilePath } = require('gatsby-source-filesystem');

// // To add the slug field to each post
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   // Ensures we are processing only markdown files
//   if (node.internal.type === 'MarkdownRemark') {
//     // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: 'pages',
//     });

//     // Creates new query'able field with name of 'slug'
//     createNodeField({
//       node,
//       name: 'slug',
//       value: `/${slug.slice(12)}`,
//     });
//   }
// };

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
  {
    allStrapiPages {
      edges {
        node {
          slug
        }
      }
    }
    allStrapiBlogPosts(sort: {fields: data, order: DESC}) {
      edges {
        node {
          title
          data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          slug
        }
      }
      totalCount
    }
    allStrapiPortfolios(sort: {order: DESC, fields: date}) {
      edges {
        node {
          title
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          slug
        }
      }
      totalCount
    }
  }
  
  
  
  
  `).then((result) => {
    const posts = result.data.allStrapiBlogPosts.edges;
    const pages = result.data.allStrapiPages.edges;
    const portfolios = result.data.allStrapiPortfolios.edges;

    // create a page for each blog post
    posts.forEach(({ node, previous, next }) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve('./src/templates/blog-post.jsx'),
        context: {
          slug: node.slug,
          nextPost: previous,
          previousPost: next,
        },
      });
    });

    // create a page for each portfolio post
    portfolios.forEach(({ node }) => {
      createPage({
        path: `/portfolio/${node.slug}`,
        component: path.resolve('./src/templates/portfolio.jsx'),
        context: {
          slug: node.slug,

        },
      });
    });

    // create the static regular pages
    pages.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/page.jsx'),
        context: {
          slug: node.slug,
        },
      });
    });

    // pagination configuration
    const postsPerPage = 6;

    // blog pagination config
    const totalPosts = result.data.allStrapiBlogPosts.totalCount;
    const numBlogPages = Math.ceil(totalPosts / postsPerPage);

    // portfolio pagination config
    const totalPortfolioPosts = result.data.allStrapiPortfolios.totalCount;
    const numPortfolioPages = Math.ceil(totalPortfolioPosts / postsPerPage);

    // Blog page creation
    Array.from({ length: numBlogPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/blog' : `/blog/pagina/${index + 1}`,
        component: path.resolve('./src/templates/blog-list.jsx'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numBlogPages,
          currentPage: index + 1,
        },
      });
    });

    // Portfolio page creation
    Array.from({ length: numPortfolioPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/portfolio' : `/portfolio/pagina/${index + 1}`,
        component: path.resolve('./src/templates/portfolio-list.jsx'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPortfolioPages,
          currentPage: index + 1,
        },
      });
    });
  });
};
