import React from 'react';
import PropTypes from 'prop-types';

import HomePageSlick from '../organisms/home-page/home-page-slick.component';
import SliderNewProducts from '../organisms/home-page/slider-new-products.component';
import SectionBrands from '../organisms/home-page/section-brands.component';
import SectionBanner from '../organisms/home-page/section-banner.component';
import SectionHotProducts from '../organisms/home-page/section-hot-products.component';
import SectionPreviewArticles from '../organisms/home-page/section-preview-articles.component';
import SectionAboutUs from '../organisms/home-page/section-about-us.component';
import SectionGallery from '../organisms/home-page/section-gallery.component';
import Footer from '../templates/footer.component';

function HomePage(props) {
  return (
    <div>
      <HomePageSlick></HomePageSlick>
      <SectionBrands></SectionBrands>
      <SliderNewProducts></SliderNewProducts>
      <SectionBanner></SectionBanner>
      <SectionHotProducts></SectionHotProducts>
      <SectionPreviewArticles></SectionPreviewArticles>
      <SectionAboutUs></SectionAboutUs>
      <SectionGallery></SectionGallery>
      <Footer></Footer>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
