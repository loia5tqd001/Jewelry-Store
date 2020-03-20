import React from 'react';
import PropTypes from 'prop-types';

import { LinkStyled } from './styled-link.styles';

function StyledLink({ children, ...otherProps }) {
  return (
    <LinkStyled title={children} {...otherProps}>
      {children}
    </LinkStyled>
  );
}

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledLink;
