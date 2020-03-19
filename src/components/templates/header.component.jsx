import React from 'react';
import PropTypes from 'prop-types';

import HeaderTopBar from '../organisms/header/header-top-bar.component';
import HeaderLogo from '../organisms/header/header-logo.component';
import HeaderNav from '../organisms/header/header-nav.component';

function Header(props) {
  return (
    <div>
      <HeaderTopBar></HeaderTopBar>
      <HeaderLogo></HeaderLogo>
      <HeaderNav></HeaderNav>
    </div>
  );
}

Header.propTypes = {};

export default Header;
