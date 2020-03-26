import React from 'react';

import HomePageSlick from '../organisms/home-page/home-page-slick--';
import SliderNewProducts from '../organisms/home-page/slider-new-products--';
import SectionBrands from '../organisms/home-page/section-brands--';
import SectionBanner from '../organisms/home-page/section-banner--';
import SectionHotProducts from '../organisms/home-page/section-hot-products--';
import SectionPreviewArticles from '../organisms/home-page/section-preview-articles--';
import SectionAboutUs from '../organisms/home-page/section-about-us--';
import SectionGallery from '../organisms/home-page/section-gallery--';

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
