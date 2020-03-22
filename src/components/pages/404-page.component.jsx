import React from 'react';
import PropTypes from 'prop-types';

import StyledLink from '../atoms/styled-link.component';

import { PageContainer, Para } from './404-page.styles';

function NotFoundPage(props) {
  return (
    <PageContainer>
      <h1>Không tìm thấy trang</h1>
      <Para>Xin lỗi, chúng tôi không tìm thấy trang này</Para>
      <StyledLink>Trở về trang chủ</StyledLink>
    </PageContainer>
  );
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
