import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'antd';
import Logo from '../../images/logo.png';

const Menu = ({ siteTitle }) => (
  <header id="header" className="header">
    <Row gutter={32} type="flex" justify="space-around" align="middle">
      <Col flex="1 1">
        <Link to="/">
          <img
            style={{ maxWidth: '150px' }}
            src={Logo}
            alt={ siteTitle }
          />
        </Link>
      </Col>
    </Row>
  </header>
);

Menu.propTypes = {
  siteTitle: PropTypes.string,
};

Menu.defaultProps = {
  siteTitle: '',
};

export default Menu;
