/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Seo from '../components/Seo';

const AboutPage = ({ data }) => {
  const { headingOne, subtitle, description } = data.strapiHero;
  const { description: siteDescription, siteName } = data.strapiGlobal;
  return (

    <Layout>
      <Seo title={siteName} description={siteDescription} />
      <Hero
        headingOne={headingOne}
        subtitle={subtitle}
        description={description}
      />
    </Layout>

  );
};

export const query = graphql`
  query{
    strapiGlobal {
      description
      siteName
    }
    strapiHero{
      headingOne
      subtitle
      description
    }
  }
`;
export default AboutPage;
