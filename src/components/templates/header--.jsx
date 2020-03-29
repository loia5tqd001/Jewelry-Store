import React from 'react';

import HeaderTopBar from '../organisms/header/header-top-bar--';
import HeaderLogo from '../organisms/header/header-logo--';
import HeaderNav from '../organisms/header/header-nav--';
import SearchBar from '../organisms/header/search-bar--';

import { useStickyHeader } from './header.hooks';
import { HeaderContainer } from './header.styled';

function Header() {
  const { isStuck, headerRef } = useStickyHeader();

  return (
    <HeaderContainer isStuck={isStuck} ref={headerRef}>
      <HeaderTopBar />
      <HeaderLogo />
      <HeaderNav />
      <SearchBar />
    </HeaderContainer>
  );
}

export default Header;
