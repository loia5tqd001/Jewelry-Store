import React from 'react';

import HomePageSlick from '../organisms/home-page/home-page-slick.comp';
import SliderNewProducts from '../organisms/home-page/slider-new-products.comp';
import SectionBrands from '../organisms/home-page/section-brands.comp';
import SectionBanner from '../organisms/home-page/section-banner.comp';
import SectionHotProducts from '../organisms/home-page/section-hot-products.comp';
import SectionPreviewArticles from '../organisms/home-page/section-preview-articles.comp';
import SectionAboutUs from '../organisms/home-page/section-about-us.comp';
import SectionGallery from '../organisms/home-page/section-gallery.comp';

function HomePage() {
  return (
    <main>
      <HomePageSlick />
      <SectionBrands />
      <SliderNewProducts />
      <SectionBanner />
      <SectionHotProducts />
      <SectionPreviewArticles />
      <SectionAboutUs />
      <SectionGallery />
    </main>
  );
}

export default HomePage;
