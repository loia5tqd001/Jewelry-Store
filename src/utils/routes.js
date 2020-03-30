import { Link, NavLink, useHistory } from 'react-router-dom';
import StyledLink from '../components/atoms/styled-link.comp';

export { Link, NavLink, StyledLink, useHistory };

// for more convenient Breadcrumb
// display: ## means the path will not likely be displayed on a breadcrumb
export default {
  home: {
    path: '/',
    display: 'Trang chủ',
  },
  about: {
    path: '/about',
    display: 'Giới thiệu',
  },
  blog: {
    path: '/blog',
    display: 'Tin tức',
  },
  newArticles: {
    path: '/blog/new-articles',
    display: 'Bài viết mới nhất',
  },
  search: {
    path: '/search',
    display: '##Tìm kiếm##',
  },
  returnPolicy: {
    path: '/return-policy',
    display: 'Chính sách đổi trả',
  },
  privacyPolicy: {
    path: '/privary-policy',
    display: 'Chính sách bảo mật',
  },
  termsOfService: {
    path: '/terms-of-service',
    display: 'Điều khoản dịch vụ',
  },
  account: {
    path: '/account',
    display: '##Tài khoản##',
  },
  cart: {
    path: '/cart',
    display: 'Giỏ hàng',
  },
  products: {
    path: '/products',
    display: 'Sản phẩm',
  },
  hotProducts: {
    path: '/products/hot-products',
    display: 'Sản phẩm bán chạy',
  },
  newProducts: {
    path: '/products/new-products',
    display: 'Sản phẩm mới',
  },
  brands: {
    path: '/brands',
    display: 'Nhãn hiệu',
  },
  brandEmbassadors: {
    path: '/brand-embassadors',
    display: 'Đại sứ thương hiệu',
  },
  collections: {
    path: '/collections',
    display: 'Bộ sưu tập',
  },
};
