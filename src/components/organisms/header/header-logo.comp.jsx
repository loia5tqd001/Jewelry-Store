import React from 'react';
import PropTypes from 'prop-types';
import routes, { Link } from '../../../utils/routes';

import { HeaderLogoContainer, LogoHeading } from './header-logo.styled';

function HeaderLogo({ isHeaderStuck }) {
  return (
    <HeaderLogoContainer isHeaderStuck={isHeaderStuck}>
      <LogoHeading title="Jquery Store">
        <Link to={routes.home.path}>Jquery Store</Link>
      </LogoHeading>
    </HeaderLogoContainer>
  );
}

HeaderLogo.propTypes = {
  isHeaderStuck: PropTypes.bool.isRequired,
};

export default HeaderLogo;
