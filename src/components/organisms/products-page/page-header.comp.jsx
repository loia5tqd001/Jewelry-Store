import React from 'react';
import PropTypes, { collectionProps } from '../../../utils/prop-types';
import routes from '../../../utils/routes';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumb from '../../atoms/breadcrumb.comp';

import { ImageContainer } from './page-header.styled';

function PageHeader({ collection }) {
  const breadcrumbPaths = [routes.home, routes.products];
  const imgProperties = {
    src: 'https://file.hstatic.net/1000327411/collection/landingpage_banner_rings.jpg',
  };

  if (collection) {
    breadcrumbPaths.push(collection.collection);
    imgProperties.src = collection.image;
    imgProperties.alt = collection.collection;
  } else {
    breadcrumbPaths.push('Tất cả');
  }

  return (
    <>
      <Breadcrumb paths={breadcrumbPaths} />

      <ImageContainer>
        <LazyLoadImage alt="banner" {...imgProperties} />
      </ImageContainer>
    </>
  );
}

PageHeader.propTypes = {
  collection: PropTypes.shape(collectionProps),
};

PageHeader.defaultProps = {
  collection: null,
};

export default PageHeader;
