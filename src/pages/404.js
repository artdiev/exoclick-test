import React from 'react';

import { Result } from 'antd';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Result
      status="404"
      title="404"
      subTitle="Oops! The link you followed does not lead anywhere."
    />
  </Layout>
);

export default NotFoundPage;
