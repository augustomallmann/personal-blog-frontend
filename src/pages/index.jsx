import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      category="Misc"
      background="red"
      date="30 de julho de 2019"
      timeToRead="3"
      title="Diga não ao medium: tenha sua própria plataforma"
      description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium"
    />
  </Layout>
);

export default IndexPage;
