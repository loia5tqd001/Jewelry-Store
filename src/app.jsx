import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './utils/routes';
import { useSubscribeUser } from './hooks/use-subscribe-user';
import { fetchProductsAsync } from './redux/products/actions';
import { useDispatch } from 'react-redux';

import Loader from './components/atoms/loader.comp';
import Header from './components/templates/header.comp';
import SideNav from './components/templates/side-nav.comp';
import Footer from './components/templates/footer.comp';
import PopupContact from './components/templates/popup-contact.comp';
import ScrollToTop, { ScrollToTopIndicator } from './components/templates/scroll-to-top.comp';

const HomePage = lazy(() => import('./components/pages/home-page.comp'));
const ProductsPage = lazy(() => import('./components/pages/products-page.comp'));
const ProductDetailPage = lazy(() => import('./components/pages/product-detail-page.comp'));
const CartPage = lazy(() => import('./components/pages/cart-page.comp'));
const AboutPage = lazy(() => import('./components/pages/about-page.comp'));
const AccountPages = lazy(() => import('./components/pages/account-pages.comp'));
const SearchPage = lazy(() => import('./components/pages/search-page.comp'));
const CheckoutPage = lazy(() => import('./components/pages/checkout-page.comp'));
const NotFoundPage = lazy(() => import('./components/pages/404-page.comp'));

export default function App() {
  useSubscribeUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route component={ScrollToTop} />
      <ScrollToTopIndicator />
      <PopupContact />
      <Header />
      <SideNav />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home.path} component={HomePage} exact />
          <Route
            path={routes.rerenderProducts.path}
            render={() => <Redirect to={routes.products.path} />}
            exact
          />
          <Route path={routes.products.path} component={ProductsPage} exact />
          <Route path={`${routes.products.path}/:collectionId`} component={ProductsPage} exact />
          <Route
            path={`${routes.productDetail.path}/:productId`}
            component={ProductDetailPage}
            exact
          />
          <Route path={routes.cart.path} component={CartPage} exact />
          <Route path={routes.about.path} component={AboutPage} exact />
          <Route path={routes.search.path} component={SearchPage} exact />
          <Route path={routes.checkout.path} component={CheckoutPage} exact />
          <Route path={routes.account.path} component={AccountPages} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
