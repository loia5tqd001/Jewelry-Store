import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button } from './button-sliding.styled';

function ButtonSliding({ children, ...otherProps }) {
  return (
    <Button title={typeof children === 'string' ? children : ''} {...otherProps}>
      {children}
    </Button>
  );
}

ButtonSliding.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['button', 'a', Link]),
  padding: PropTypes.string,
  padding_responsive: PropTypes.string,
  disabled: PropTypes.bool,
  font_size: PropTypes.string,
  bg_static: PropTypes.string,
  fg_static: PropTypes.string,
  bg_sliding: PropTypes.string,
  fg_sliding: PropTypes.string,
};

ButtonSliding.defaultProps = {
  as: 'button',
  padding: '1.5rem 3rem',
  padding_responsive: '1.2rem 2.4rem',
  disabled: false,
  font_size: '0.9em',
  bg_static: 'white',
  fg_static: 'black',
  bg_sliding: 'transparent',
  fg_sliding: 'white',
};

export default ButtonSliding;
