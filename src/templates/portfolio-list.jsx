/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';
import HeaderDetails from '../components/HeaderDetails';
import * as S from '../components/ListWrapper/styled';

const Portfolios = (props) => {
  const postList = props.data.allStrapiPortfolios.edges;
  const portfolioDetails = props.data.strapiPortofolio;

  const { currentPage, numPortfolioPages } = props.pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPortfolioPages;

  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/pagina/${currentPage - 1}`;
  const nextPage = `/blog/pagina/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Home" />
      {isFirst ? <HeaderDetails details={portfolioDetails} /> : null}
      <S.ListWrapper>
        {postList.map(({
          node: {
            slug,
            data,
            title,
            description,
            thumbnail,

          },
        }) => (
          <PostItem
            slug={slug}
            date={data}
            title={title}
            description={description}
            thumbnail={thumbnail}
          />
        ))}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPortfolioPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
query ( $skip: Int!, $limit: Int!) {
  strapiPortofolio {
    title
    description
  }
  allStrapiPortfolios(limit: $limit, skip: $skip, sort: {order: DESC, fields: date}) {
    edges {
      node {
        Content
        date
        slug
        description
        title
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

export default Portfolios;
