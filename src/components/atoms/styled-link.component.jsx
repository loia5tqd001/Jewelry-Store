import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import { LinkStyled } from './styled-link.styles';

function StyledLink(props) {
  return props.as === 'a' ? (
    <LinkStyled
      title={props.children}
      href={props.to}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ) : (
    <LinkStyled title={props.children} {...props} />
  );
}

StyledLink.propTypes = {
  as: PropTypes.oneOf(['a', Link, NavLink]),
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

StyledLink.defaultProps = {
  as: Link,
};

export default StyledLink;
