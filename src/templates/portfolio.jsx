/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../components/Posts/styled';

const Portfolios = ({ data }) => {
  const portfolio = data.strapiPortfolios;

  return (
    <Layout>
      <SEO
        title={portfolio.Title}
        description={portfolio.Description}
      />
      <S.PostHeader style={{ backgroundImage: ` url(${portfolio.Thumbnail.childImageSharp.fluid.src})` }}>
        <S.Shadow />
        <S.PostTitle>
          {portfolio.Title}
        </S.PostTitle>
        <S.PostDescription>{portfolio.Description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <Markdown source={portfolio.Content} escapeHtml={false} />
      </S.MainContent>
    </Layout>
  );
};

export const query = graphql`
query Portfolio {
  strapiPortfolios {
    Title
    Date
    Description
    Content
    Thumbnail {
      childImageSharp {
        fluid{

        src}
      }
    }
  }
}

`;

export default Portfolios;
