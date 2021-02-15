/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import * as S from '../components/Posts/styled';

const Portfolios = ({ data }) => {
  const portfolio = data.strapiPortfolios;

  return (
    <Layout>
      <SEO
        title={portfolio.title}
        description={portfolio.description}
      />
      <S.PostHeader style={{ backgroundImage: ` url(${portfolio.thumbnail.childImageSharp.fluid.src})` }}>
        <S.Shadow />
        <S.PostTitle>
          {portfolio.title}
        </S.PostTitle>
        <S.PostDescription>{portfolio.description}</S.PostDescription>
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
    title
    date
    description
    Content
    thumbnail {
      childImageSharp {
        fluid{

        src}
      }
    }
  }
}

`;

export default Portfolios;
