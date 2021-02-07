/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = ({ data }) => {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: {
          fields: { slug },
          frontmatter: {
            background, category, date, description, title,
          },
          timeToRead,
        },
      }) => (
        <PostItem
          slug={slug}
          category={category}
          background={background}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}

    </Layout>
  );
};

export const query = graphql`
query PostList {
  allMarkdownRemark(sort:{fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          background
          category
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
        }
        timeToRead
      }
    }
  }
}
`;
export default IndexPage;
