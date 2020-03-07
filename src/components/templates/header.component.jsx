import React from 'react';
import PropTypes from 'prop-types';

import HeaderTopBar from '../molecules/header-top-bar.component';
import HeaderLogo from '../molecules/header-logo.component';
import HeaderNav from '../molecules/header-nav.component';

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
