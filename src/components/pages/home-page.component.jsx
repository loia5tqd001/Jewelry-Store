import React from 'react';
import PropTypes from 'prop-types';

import HomePageSlick from '../molecules/home-page-slick.component';
import SliderNewProducts from '../organisms/slider-new-products.component';
import SectionBrands from '../organisms/section-brands.component';
import SectionBanner from '../organisms/section-banner.component';
import SectionHotProducts from '../organisms/section-hot-products.component';

function HomePage(props) {
  return (
    <div>
      <HomePageSlick></HomePageSlick>
      <SectionBrands></SectionBrands>
      <SliderNewProducts></SliderNewProducts>
      <SectionBanner></SectionBanner>
      <SectionHotProducts></SectionHotProducts>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
