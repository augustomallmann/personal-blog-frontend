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
  const blogDetails = props.data.strapiBlog;

  const { currentPage, numBlogPages } = props.pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numBlogPages;

  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/pagina/${currentPage - 1}`;
  const nextPage = `/blog/pagina/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Home" />
      {isFirst ? <HeaderDetails details={blogDetails} /> : null}
      <S.ListWrapper>
        {postList.map(({
          node: {
            slug,
            data,
            title,
            subtitle,
            thumbnail,

          },
        }) => (
          <PostItem
            slug={slug}
            date={data}
            title={title}
            description={subtitle}
            thumbnail={thumbnail}
          />
        ))}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numBlogPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
query( $skip: Int!, $limit: Int!){
  strapiBlog {
    description
    title
  }
  allStrapiBlogPosts(sort: {fields: data, order: DESC}, skip: $skip, limit: $limit) {
    edges {
      node {
        title
        data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        subtitle
        content
        slug
        thumbnail {
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
