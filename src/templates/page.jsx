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
        title={post.Title}
        description={post.Description}
      />
      <S.PostHeader style={{ backgroundImage: ` url(${post.Thumbnail.childImageSharp.fluid.src})` }}>
        <S.Shadow />

        <S.PostTitle>
          {post.Title}
        </S.PostTitle>
        <S.PostDescription>{post.Description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <Markdown source={post.Content} escapeHtml={false} />
      </S.MainContent>
    </Layout>
  );
};

export const query = graphql`
  query Pages {
    strapiPages{
      Slug
      Title
      Description
      Content
      Thumbnail {
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
