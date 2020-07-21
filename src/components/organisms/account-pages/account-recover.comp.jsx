import React, { useContext } from 'react';
import ButtonSliding from '../../atoms/button-sliding.comp';

import { PageContainer, Title, Form, Input } from './common.styled';
import { Heading, ButtonContainer } from './account-recover.styled';
import { ThemeContext } from 'styled-components';
import routes, { Link } from '../../../utils/routes';
import { BackLink } from './account-register.styled';

function AccountRecover(props) {
  const { colors } = useContext(ThemeContext);

  return (
    <PageContainer>
      <div>
        <Title>Đăng nhập</Title>
      </div>
      <div>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Heading>Phục hồi mật khẩu</Heading>
          <Input type="email" placeholder="Email" required/>
          <ButtonContainer>
            <ButtonSliding
              bg_static={colors.blueDarker2}
              fg_static={colors.white}
              bg_sliding={colors.white}
              fg_sliding={colors.greyDark1}
              padding="1.5em"
              children="Gửi"
              as={Link}
              to={routes.accountLogin.path}
            />
          </ButtonContainer>
          <BackLink title={null} to={routes.accountLogin.path}>
            <ion-icon name="return-down-back" />
            Quay lại
          </BackLink>
        </Form>
      </div>
    </PageContainer>
  );
}

export default AccountRecover;
