import React from 'react';
import PropTypes from 'prop-types';

import { HeaderLogoContainer, LogoHeading } from './header-logo.styles';

function HeaderLogo(props) {
  return (
    <HeaderLogoContainer>
      <LogoHeading>Jquery Store</LogoHeading>
    </HeaderLogoContainer>
  );
}

HeaderLogo.propTypes = {};

export default HeaderLogo;
