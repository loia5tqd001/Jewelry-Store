import routes from '../../../utils/routes';
import { v4 as uuidv4 } from 'uuid';

export default [
  {
    id: uuidv4(),
    srcImage:
      'https://file.hara.vn/1000113711/file/block_home_category1_4a27b3688c9d4ca285b9e1cdb5bd79b1.jpg',
    title: 'Đại sứ thương hiệu',
    buttonTitle: 'Họ là ai',
    path: routes.brandEmbassadors.path,
  },
  {
    id: uuidv4(),
    srcImage:
      'https://file.hara.vn/1000113711/file/block_home_category2_25091c60dbb34a15a87df5b1eedd0c91.jpg',
    title: 'Thương hiệu',
    buttonTitle: 'Tìm hiểu thêm',
    path: routes.brands.path,
  },
  {
    id: uuidv4(),
    srcImage:
      'https://file.hara.vn/1000113711/file/block_home_category3_06f0f915efe14d6faeee0003aab81dbc.jpg',
    title: 'Blog',
    buttonTitle: 'Xem những bài viết',
    path: routes.blog.path,
  },
];
