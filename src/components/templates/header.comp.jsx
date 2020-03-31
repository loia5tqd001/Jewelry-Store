import React from 'react';

import HeaderTopBar from '../organisms/header/header-top-bar.comp';
import HeaderLogo from '../organisms/header/header-logo.comp';
import HeaderNav from '../organisms/header/header-nav.comp';
import SearchBar from '../organisms/header/search-bar.comp';

import { useStickyHeader } from './header.hooks';
import { HeaderContainer } from './header.styled';

function Header() {
  const { isStuck, headerRef } = useStickyHeader();

  return (
    <HeaderContainer isStuck={isStuck} ref={headerRef}>
      <HeaderTopBar isHeaderStuck={isStuck} />
      <HeaderLogo isHeaderStuck={isStuck} />
      <HeaderNav isHeaderStuck={isStuck} />
      <SearchBar isHeaderStuck={isStuck} />
    </HeaderContainer>
  );
}

export default Header;
