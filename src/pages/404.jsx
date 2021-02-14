import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import NotFound from '../components/404';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
  </Layout>
);

export default NotFoundPage;
