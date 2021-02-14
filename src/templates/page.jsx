/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Posts/styled';

const BlogPost = ({ data }) => {
  const post = data.strapiPages;

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description}
      />
      <S.PostHeader style={{ backgroundImage: ` url(${post.thumbnail.childImageSharp.fluid.src})` }}>
        <S.Shadow />
        <S.PostTitle>
          {post.title}
        </S.PostTitle>
        <S.PostDescription>{post.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <Markdown source={post.content} escapeHtml={false} />
      </S.MainContent>
    </Layout>
  );
};

export const query = graphql`
  query Pages {
    strapiPages{
      slug
      title
      description
      content
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 960) {
            src
          }
        }
      }
    }
  }
`;

export default BlogPost;
