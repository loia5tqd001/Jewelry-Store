import React from 'react';

import HomePageSlick from '../organisms/home-page/home-page-slick.component';
import SliderNewProducts from '../organisms/home-page/slider-new-products.component';
import SectionBrands from '../organisms/home-page/section-brands.component';
import SectionBanner from '../organisms/home-page/section-banner.component';
import SectionHotProducts from '../organisms/home-page/section-hot-products.component';
import SectionPreviewArticles from '../organisms/home-page/section-preview-articles.component';
import SectionAboutUs from '../organisms/home-page/section-about-us.component';
import SectionGallery from '../organisms/home-page/section-gallery.component';

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
