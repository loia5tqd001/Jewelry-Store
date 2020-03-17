import React from 'react';
import PropTypes from 'prop-types';

import ImageSlowlyHover from '../atoms/image-slowly-hover.component';

import { BannerContainer } from './section-banner.styles';

const DATA = [
  {
    srcImage:
      'https://file.hara.vn/1000113711/file/block_home_category1_4a27b3688c9d4ca285b9e1cdb5bd79b1.jpg',
    title: 'Đại sứ thương hiệu',
    buttonTitle: 'Họ là ai',
  },
  {
    srcImage:
      'https://file.hara.vn/1000113711/file/block_home_category2_25091c60dbb34a15a87df5b1eedd0c91.jpg',
    title: 'Thương hiệu',
    buttonTitle: 'Tìm hiểu thêm',
  },
  {
    srcImage:
      'https://file.hara.vn/1000113711/file/block_home_category3_06f0f915efe14d6faeee0003aab81dbc.jpg',
    title: 'Blog',
    buttonTitle: 'Xem những bài viết',
  },
];

function SectionBanner(props) {
  return (
    <BannerContainer>
      {DATA.map((item, i) => (
        <ImageSlowlyHover key={i} {...item} />
      ))}
    </BannerContainer>
  );
}

SectionBanner.propTypes = {};

export default SectionBanner;
