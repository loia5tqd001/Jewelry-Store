import React from 'react';
import PropTypes from 'prop-types';

import HeaderTopBar from '../molecules/header-top-bar.component';

function Header(props) {
  return (
    <div>
      <HeaderTopBar></HeaderTopBar>
    </div>
  );
}

Header.propTypes = {};

export default Header;
