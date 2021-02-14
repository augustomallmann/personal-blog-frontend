/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import * as S from '../components/Posts/styled';

import RecommendedPosts from '../components/RecommendedPosts';

const BlogPost = ({ data, pageContext }) => {
  const post = data.strapiBlogPosts;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.seo.description}
      />
      <S.PostHeader style={{ backgroundImage: ` url(${post.thumbnail.childImageSharp.fluid.src})` }}>
        <S.Shadow />
        <S.PostDate>
          {post.data}
        </S.PostDate>
        <S.PostTitle>
          {post.title}
        </S.PostTitle>
        <S.PostDescription>{post.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <Markdown source={post.content} escapeHtml={false} />

      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  );
};

export const query = graphql`
query Posts {
  strapiBlogPosts {
    title
    data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
    subtitle
    content
    slug
    seo {
      description
      ogImage {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
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
