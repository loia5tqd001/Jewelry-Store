import React from 'react';
import routes, { StyledLink } from '../../routes';

import { PageContainer, Para, Link } from './404-page.styles';

function NotFoundPage() {
  return (
    <PageContainer>
      <h1>Không tìm thấy trang</h1>
      <Para>Xin lỗi, chúng tôi không tìm thấy trang này</Para>
      <Link as={StyledLink} to={routes.home.path}>
        Trở về trang chủ
      </Link>
    </PageContainer>
  );
}

export default NotFoundPage;
