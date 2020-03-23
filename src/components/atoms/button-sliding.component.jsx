import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button } from './button-sliding.styles';

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
  bgStatic: PropTypes.string,
  fgStatic: PropTypes.string,
  bgSliding: PropTypes.string,
  fgSliding: PropTypes.string,
};

ButtonSliding.defaultProps = {
  as: 'button',
  padding: '1.5rem 3rem',
  fontSize: '.9em',
  bgStatic: 'white',
  fgStatic: 'black',
  bgSliding: 'transparent',
  fgSliding: 'white',
};

export default ButtonSliding;
