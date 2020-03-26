import React from 'react';
import routes, { StyledLink } from '../../routes';

import { PageContainer, Heading, Para, Link } from './404-page.styled';

function NotFoundPage() {
  return (
    <PageContainer>
      <Heading>Không tìm thấy trang</Heading>
      <Para>Xin lỗi, chúng tôi không tìm thấy trang này</Para>
      <Link as={StyledLink} to={routes.home.path}>
        Trở về trang chủ
      </Link>
    </PageContainer>
  );
}

export default NotFoundPage;
