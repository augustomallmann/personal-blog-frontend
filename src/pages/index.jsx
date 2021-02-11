/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const AboutPage = ({ data }) => {
  const { headingOne, subtitle, description } = data.strapiHero;
  return (

    <Layout>
      <Hero
        headingOne={headingOne}
        subtitle={subtitle}
        description={description}
      />
    </Layout>

  );
};

export const query = graphql`
  query Hero{
    strapiHero{
      headingOne
      subtitle
      description
    }
  }
`;
export default AboutPage;
