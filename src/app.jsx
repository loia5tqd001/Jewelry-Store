import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './utils/routes';

import Header from './components/templates/header.comp';
import SideNav from './components/templates/side-nav.comp';
import Footer from './components/templates/footer.comp';

const HomePage = lazy(() => import('./components/pages/home-page.comp'));
const ProductsPage = lazy(() => import('./components/pages/products-page.comp'));
const ProductDetailPage = lazy(() => import('./components/pages/product-detail-page.comp'));
const AboutPage = lazy(() => import('./components/pages/about-page.comp'));
const NotFoundPage = lazy(() => import('./components/pages/404-page.comp'));

const LazyFallback = () => <div style={{ height: '100vh', background: 'white' }} />;

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <SideNav />
      <Suspense fallback={<LazyFallback />}>
        <Switch>
          <Route path={routes.home.path} component={HomePage} exact />
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
