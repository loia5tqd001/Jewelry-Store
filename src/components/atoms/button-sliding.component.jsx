import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './button-sliding.styles';

function ButtonSliding({ tag, children, ...otherProps }) {
  return <Button title={children} {...otherProps}>{children}</Button>;
}

ButtonSliding.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  bgStatic: PropTypes.string,
  fgStatic: PropTypes.string,
  bgSliding: PropTypes.string,
  fgSliding: PropTypes.string,
};

ButtonSliding.defaultProps = {
  tag: 'button',
  padding: '1.5rem 3rem',
  fontSize: '.9em',
  bgStatic: 'white',
  fgStatic: 'black',
  bgSliding: 'transparent',
  fgSliding: 'white',
};

export default ButtonSliding;
