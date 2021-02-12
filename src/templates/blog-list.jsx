/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';
import HeaderDetails from '../components/HeaderDetails';
import * as S from '../components/ListWrapper/styled';

const BlogPost = (props) => {
  const postList = props.data.allStrapiBlogPosts.edges;
  const blogDetails = props.data.allStrapiBlog.edges;
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/pagina/${currentPage - 1}`;
  const nextPage = `/blog/pagina/${currentPage + 1}`;
  return (
    <Layout>
      <SEO title="Home" />
      {isFirst ? <HeaderDetails details={blogDetails} /> : null}
      <S.ListWrapper>

        {postList.map(({
          node: {
            Title,
            Data,
            Subtitle,
            Slug,
            Thumbnail,

          },
        }) => (
          <PostItem
            slug={Slug}
            date={Data}
            title={Title}
            description={Subtitle}
            thumbnail={Thumbnail}
          />
        ))}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
{
  allStrapiBlog {
    edges {
      node {
        description
        title
      }
    }
  }
  allStrapiBlogPosts(sort: {fields: Data, order: DESC}) {
    edges {
      node {
        Title
        Data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        Subtitle
        Content
        Slug
        Thumbnail {
          childImageSharp {
            fluid(maxWidth: 960) {
              src
            }
          }
        }
      }
    }
  }
}

 
`;

export default BlogPost;
