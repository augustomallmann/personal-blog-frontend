const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
  {
    allStrapiPages{
      edges{
        node{
          Slug
        }
      }
    }
    allStrapiBlogPosts(sort:{fields: Data, order: DESC}){
      edges{
        node{
          Title
          Data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          Subtitle
          Content
          Slug
          SEO{
            Title
            Description
          }
        }
        next{
          Title
          Slug
        }
        previous{
          Title
          Slug
        }
      }
    }
    }
  `).then((result) => {
    const posts = result.data.allStrapiBlogPosts.edges;
    const pages = result.data.allStrapiPages.edges;

    posts.forEach(({ node, previous, next }) => {
      createPage({
        path: `/blog/${node.Slug}`,
        component: path.resolve('./src/templates/blog-post.jsx'),
        context: {
          slug: node.slug,
          nextPost: previous,
          previousPost: next,
        },
      });
    });

    pages.forEach(({ node }) => {
      createPage({
        path: node.Slug,
        component: path.resolve('./src/templates/page.jsx'),
        context: {
          slug: node.Slug,
        },
      });
    });

    const postsPerPage = 5;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/blog' : `/blog/pagina/${index + 1}`,
        component: path.resolve('./src/templates/blog-list.jsx'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
};
