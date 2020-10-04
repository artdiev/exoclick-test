import React, { useState } from 'react';
import { Button, Col, Form, notification, Row, Typography } from 'antd';
import { useLazyQuery } from '@apollo/client';
import { AiFillGithub } from 'react-icons/all';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SearchForm from '../components/search';
import ContributorCard from '../components/contributor/contributor';
import QUERY_REPOSITORY_COLLABORATORS from '../graphql/queries';

const { Title } = Typography;

const IndexPage = () => {
  const [searchForm] = Form.useForm();
  const [page, setPage] = useState(1);

  const [getContributors, response] = useLazyQuery(
    QUERY_REPOSITORY_COLLABORATORS, {
      errorPolicy: 'all',
      onCompleted: (data) => Notify(data),
    },
  );

  const LoadMore = () => {
    response.fetchMore({
      variables: { page: page + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        if (fetchMoreResult.repositoryContributors?.length === 30) {
          setPage(page + 1);
        } else {
          setPage(0);
        }
        return {
          ...prev,
          repositoryContributors:
            [...prev.repositoryContributors,
              ...fetchMoreResult.repositoryContributors],
        };
      },
    });
  };

  const Notify = (data) => {
    if (!data?.repositoryContributors?.length > 0) {
      notification.warning({
        message: 'Repository not found',
      });
    } else {
      notification.success({
        message: 'Repository found',
      });
    }
  };

  const Search = (name, owner) => {
    setPage(1);
    getContributors({ variables: { owner, name, page } });
  };

  const Reset = () => {
    searchForm.resetFields();
    setPage(1);
  };

  if (response.error) {
    notification.error({
      message: response.error.message,
    });
  }

  if (response.loading) {
    notification.success({
      message: 'Loading',
    });
  }

  const nextPageMayExist = response?.data?.repositoryContributors?.length > 0 && page !== 0;
  const loadMoreButton = nextPageMayExist ? (
    <Row gutter={[32, 32]} justify="center">
      <Col>
        <Button
          size="large"
          htmlType="submit"
          primary
          loading={response.loading}
          onClick={LoadMore}
        >
          Load More
        </Button>
      </Col>
    </Row>
  ) : null;

  return (
    <Layout>
      <SEO title="Home" />
      <Row gutter={[32, 32]} justify="center" style={{ height: '80vh' }} align="middle">
        <Col flex="0 1 600px">
          <Title style={{ textAlign: 'right' }}>
            <AiFillGithub key="link" />
            {' '}
            GitHub Contributors
          </Title>
          <Title
            level={3}
            style={{ marginTop: '-25px', marginBottom: '25px', textAlign: 'right' }}
          >
            Lookup by Repository
          </Title>
          <SearchForm
            searchForm={searchForm}
            Search={Search}
            loading={response.loading}
            Reset={Reset}
          />
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        {response.data?.repositoryContributors?.map(
          (user) => <ContributorCard key={user.login} user={user} loading={response.loading} />,
        )}
      </Row>
      {loadMoreButton}
    </Layout>
  );
};

export default IndexPage;
