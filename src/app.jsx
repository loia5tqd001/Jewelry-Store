import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './utils/routes';

import Loader from './components/atoms/loader.comp';
import Header from './components/templates/header.comp';
import SideNav from './components/templates/side-nav.comp';
import Footer from './components/templates/footer.comp';
import PopupContact from './components/templates/popup-contact.comp';
import ScrollToTop from './components/templates/scroll-to-top.comp';

const HomePage = lazy(() => import('./components/pages/home-page.comp'));
const ProductsPage = lazy(() => import('./components/pages/products-page.comp'));
const ProductDetailPage = lazy(() => import('./components/pages/product-detail-page.comp'));
const AboutPage = lazy(() => import('./components/pages/about-page.comp'));
const NotFoundPage = lazy(() => import('./components/pages/404-page.comp'));

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Header />
      <SideNav />
      <PopupContact />
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
          <Route path={routes.about.path} component={AboutPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
