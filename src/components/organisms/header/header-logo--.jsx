import React from 'react';
import routes, { Link } from '../../../utils/routes';

import { HeaderLogoContainer, LogoHeading } from './header-logo.styled';

function HeaderLogo() {
  return (
    <HeaderLogoContainer>
      <LogoHeading title="Jquery Store">
        <Link to={routes.home.path}>Jquery Store</Link>
      </LogoHeading>
    </HeaderLogoContainer>
  );
}

export default HeaderLogo;
