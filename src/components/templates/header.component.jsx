import React from 'react';

import HeaderTopBar from '../organisms/header/header-top-bar.component';
import HeaderLogo from '../organisms/header/header-logo.component';
import HeaderNav from '../organisms/header/header-nav.component';
import SearchBar from '../organisms/header/search-bar.component';

function Header() {
  return (
    <header>
      <HeaderTopBar />
      <HeaderLogo />
      <HeaderNav />
      <SearchBar />
    </header>
  );
}

export default Header;
