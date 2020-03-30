import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button } from './button-sliding.styled';

function ButtonSliding({ children, ...otherProps }) {
  return (
    <Button title={children} {...otherProps}>
      {children}
    </Button>
  );
}

ButtonSliding.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['button', 'a', Link]),
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  'data-bg-static': PropTypes.string,
  'data-fg-static': PropTypes.string,
  'data-bg-sliding': PropTypes.string,
  'data-fg-sliding': PropTypes.string,
};

ButtonSliding.defaultProps = {
  as: 'button',
  padding: '1.5rem 3rem',
  fontSize: '.9em',
  'data-bg-static': 'white',
  'data-fg-static': 'black',
  'data-bg-sliding': 'transparent',
  'data-fg-sliding': 'white',
};

export default ButtonSliding;
