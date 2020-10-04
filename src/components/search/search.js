import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { RiAccountPinCircleLine, RiGitRepositoryLine } from 'react-icons/all';

// TODO test production build of sign in (window object)
const labelCol = {
  xs: {
    span: 24,
  },
  sm: {
    span: 6,
  },
};

const wrapperCol = {
  xs: {
    span: 24,
  },
  sm: {
    span: 18,
  },
};

const SearchForm = ({
  searchForm, Search, loading, Reset,
}) => (
  <Form
    form={searchForm}
    size="large"
    name="repository_search"
    labelCol={labelCol}
    wrapperCol={wrapperCol}
    onFinish={({ name, owner }) => Search(name, owner)}
  >
    <Form.Item
      name="name"
      label="Repository name"
      rules={[
        {
          required: true,
          message: 'Please input the repository name!',
        },
      ]}
    >
      <Input
        placeholder="saleor"
        prefix={<RiGitRepositoryLine />}
      />
    </Form.Item>
    <Form.Item
      name="owner"
      label="Owner name"
      rules={[
        {
          required: true,
          message: 'Please input the repository owner!',
        },
      ]}
    >
      <Input
        placeholder="mirumee"
        prefix={<RiAccountPinCircleLine />}
      />
    </Form.Item>
    <Form.Item labelCol={labelCol} wrapperCol={wrapperCol} label=" " colon={false}>
      <Space>
        <Button
          size="large"
          htmlType="submit"
          loading={loading}
        >
          Get a list of contributors
        </Button>
        <Button
          size="large"
          htmlType="reset"
          onClick={Reset}
        >
          Reset
        </Button>
      </Space>
    </Form.Item>
  </Form>
);

export default SearchForm;
