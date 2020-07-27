import { Link, NavLink, useHistory, useParams } from 'react-router-dom';
import StyledLink from '../components/atoms/styled-link.comp';

export { Link, NavLink, StyledLink, useHistory, useParams };

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
    path: '/privacy-policy',
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
  accountAddresses: {
    path: '/account/addresses',
    display: '##Danh sách địa chỉ##',
  },
  accountProducts: {
    path: '/account/products',
    display: '##Danh sách sản phẩm##',
  },
  accountLogin: {
    path: '/account/login',
    display: '##Đăng nhập##',
  },
  accountRecover: {
    path: '/account/recover',
    display: '##Quên mật khẩu##',
  },
  accountRegister: {
    path: '/account/register',
    display: '##Đăng ký##',
  },
  cart: {
    path: '/cart',
    display: 'Giỏ hàng',
  },
  products: {
    path: '/products',
    display: 'Sản phẩm',
  },
  rerenderProducts: {
    path: '/rerender-products',
    display: 'Sản phẩm',
  },
  productDetail: {
    path: '/product-detail',
    display: 'Chi tiết sản phẩm',
  },
  hotProducts: {
    path: '/hot-products',
    display: 'Sản phẩm bán chạy',
  },
  newProducts: {
    path: '/new-products',
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
