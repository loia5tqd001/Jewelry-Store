import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { SliderItem, SliderDots } from './home-page-slick.styles';

const DATA = [
  {
    src: 'https://file.hara.vn/1000113711/file/slideshow_1_a1478ced71e94f6f9ab26f324389325e.jpg',
    alt: 'Trọn bộ trang sức 1999k',
  },
  {
    src: 'https://file.hara.vn/1000113711/file/slideshow_2_acb81f0e386049b7831f14f68fc4ad0f.jpg',
    alt: 'Bộ sưu tập mùa đông 2999k',
  },
  {
    src: 'https://file.hara.vn/1000113711/file/slideshow_3_da290cf169a64b7595ece01fa5695a74.jpg',
    alt: 'Hàng mới về 999k',
  },
];

const slickSettings = {
  dots: true,
  arrows: false,
  autoplay: true,
  pauseOnHover: false,
  appendDots: (dots) => (
    <SliderDots>
      <ul>{dots}</ul>
    </SliderDots>
  ),
};

function HomePageSlick(props) {
  return (
    <Slider {...slickSettings}>
      {DATA.map((item) => (
        <SliderItem key={item.src}>
          <img src={item.src} alt={item.alt} />
        </SliderItem>
      ))}
    </Slider>
  );
}

HomePageSlick.propTypes = {};

export default HomePageSlick;
