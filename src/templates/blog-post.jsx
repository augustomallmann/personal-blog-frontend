/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Posts/styled';

import RecommendedPosts from '../components/RecommendedPosts';

const BlogPost = ({ data, pageContext }) => {
  const post = data.strapiBlogPosts;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  return (
    <Layout>
      <SEO
        title={post.Title}
        description={post.SEO.Description}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.Data}
        </S.PostDate>
        <S.PostTitle>
          {post.Title}
        </S.PostTitle>
        <S.PostDescription>{post.Description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <Markdown source={post.Content} escapeHtml={false} />

      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  );
};

export const query = graphql`
  query Posts {
    strapiBlogPosts{
      Title
      Subtitle
      Data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      Content
      SEO{
        Description
        Title
      }
    }
  }
`;

export default BlogPost;
