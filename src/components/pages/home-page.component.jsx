import React from 'react';
import PropTypes from 'prop-types';

import HomePageSlick from '../molecules/home-page-slick.component';
import SliderProductItem from '../molecules/slider-product-item.component';

function HomePage(props) {
  return (
    <div>
      <HomePageSlick></HomePageSlick>
      <SliderProductItem></SliderProductItem>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
