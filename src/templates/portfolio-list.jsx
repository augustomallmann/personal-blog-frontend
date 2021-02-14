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

const Portfolios = (props) => {
  const postList = props.data.allStrapiPortfolios.edges;
  const portfolioDetails = props.data.strapiPortofolio;

  console.log(portfolioDetails);
  const { currentPage, numPages } = props.pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/pagina/${currentPage - 1}`;
  const nextPage = `/blog/pagina/${currentPage + 1}`;

  return (
    <Layout>
      <SEO title="Home" />
      {isFirst ? <HeaderDetails details={portfolioDetails} /> : null}
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
query ( $skip: Int!, $limit: Int!) {
  strapiPortofolio {
    title
    description
  }
  allStrapiPortfolios(limit: $limit, skip: $skip, sort: {order: DESC, fields: Date}) {
    edges {
      node {
        Content
        Date
        Description
        Title
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

export default Portfolios;
