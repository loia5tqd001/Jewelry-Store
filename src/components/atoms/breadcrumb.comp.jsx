import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from '../../utils/routes';

import { BreadcrumbContainer, BreadcrumbItem } from './breadcrumb.styled';

function Breadcrumb({ paths }) {
  return (
    <BreadcrumbContainer>
      {paths.map((value, index) => (
        <BreadcrumbItem key={index}>
          {typeof value === 'string' ? (
            <span>{value}</span>
          ) : (
            <StyledLink to={value.path}>{value.display}</StyledLink>
          )}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
}

Breadcrumb.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        display: PropTypes.string.isRequired,
      }),
    ]),
  ),
};

export default Breadcrumb;
