import React from 'react';
import routes, { StyledLink } from '../../../utils/routes';
import { signOut } from '../../../firebase/utils';
import { useLocation } from 'react-router-dom';

import AccountInformationComp from '../../molecules/account-information.comp';
import { Header, Main, AsideItem } from './account.styled';
import AccountAddressedComp from '../../molecules/account-addressed.comp';
import AccountProductsComp from '../../molecules/account-products.comp';

function Account() {
  const location = useLocation();

  return (
    <div>
      <Header>Tài khoản</Header>
      <Main>
        <aside>
          <ul>
            <AsideItem>
              <StyledLink to={routes.account.path}>
                Thông tin tài khoản
              </StyledLink>
            </AsideItem>
            <AsideItem>
              <StyledLink to={routes.accountAddresses.path}>
                Danh sách địa chỉ
              </StyledLink>
            </AsideItem>
            <AsideItem>
              <StyledLink to={routes.accountProducts.path}>
                Sản phẩm đã đặt hàng
              </StyledLink>
            </AsideItem>
            <AsideItem>
              <StyledLink onClick={signOut} to={routes.account.path}>
                Đăng xuất
              </StyledLink>
            </AsideItem>
          </ul>
        </aside>
        <div>
          {
            location.pathname === routes.account.path ?
              <AccountInformationComp/> :
              location.pathname === routes.accountProducts.path ?
                <AccountProductsComp/> :
                location.pathname === routes.accountAddresses.path ?
                  <AccountAddressedComp/> :
                  null
          }
        </div>
      </Main>
    </div>
  );
}

export default Account;
