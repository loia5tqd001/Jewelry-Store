import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from '../../utils/routes';

import { BreadcrumbContainer, BreadcrumbItem } from './breadcrumb.styled';

function Breadcrumb({ paths }) {
  return (
    <BreadcrumbContainer>
      {paths.map((value, index) =>
        index === paths.length - 1 ? (
          <span key={index}>{value.display}</span>
        ) : (
          <BreadcrumbItem key={index}>
            <StyledLink to={value.path}>{value.display}</StyledLink>
          </BreadcrumbItem>
        ),
      )}
    </BreadcrumbContainer>
  );
}

Breadcrumb.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    }),
  ),
};

export default Breadcrumb;
