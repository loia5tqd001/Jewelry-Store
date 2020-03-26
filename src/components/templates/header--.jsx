import React from 'react';

import HeaderTopBar from '../organisms/header/header-top-bar--';
import HeaderLogo from '../organisms/header/header-logo--';
import HeaderNav from '../organisms/header/header-nav--';
import SearchBar from '../organisms/header/search-bar--';

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
