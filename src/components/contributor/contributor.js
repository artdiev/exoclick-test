import React from 'react';
import {
  Card, Avatar, Skeleton, Col,
} from 'antd';
import { AiFillGithub, RiGitRepositoryCommitsLine } from 'react-icons/all';

const { Meta } = Card;

const ContributorCard = ({ user, loading }) => (
  <Col flex="1 0 250px">
    <Card
      actions={[
        <a href={user.html_url}><AiFillGithub key="link" /> Link</a>,
        <div><RiGitRepositoryCommitsLine key="commits" />{user.contributions}</div>,
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={
            <Avatar size={64} src={user.avatar_url} />
          }
          title={user.name}
          description={user.login}
        />
      </Skeleton>
    </Card>
  </Col>
);

export default ContributorCard;
