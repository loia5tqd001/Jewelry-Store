import React from 'react';

import HeaderTopBar from '../organisms/header/header-top-bar.component';
import HeaderLogo from '../organisms/header/header-logo.component';
import HeaderNav from '../organisms/header/header-nav.component';

function Header() {
  return (
    <header>
      <HeaderTopBar></HeaderTopBar>
      <HeaderLogo></HeaderLogo>
      <HeaderNav></HeaderNav>
    </header>
  );
}

export default Header;
