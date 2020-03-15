import React from 'react';
import PropTypes from 'prop-types';

import HomePageSlick from '../molecules/home-page-slick.component';
import SliderNewProducts from '../organisms/slider-new-products.component';

function HomePage(props) {
  return (
    <div>
      <HomePageSlick></HomePageSlick>
      <SliderNewProducts></SliderNewProducts>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
