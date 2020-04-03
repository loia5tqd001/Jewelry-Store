import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './utils/routes';

import Header from './components/templates/header.comp';
import SideNav from './components/templates/side-nav.comp';
import Footer from './components/templates/footer.comp';
import NotFoundPage from './components/pages/404-page.comp';
import HomePage from './components/pages/home-page.comp';
import ProductsPage from './components/pages/products-page.comp';
import AboutPage from './components/pages/about-page.comp';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Switch>
        <Route path={routes.home.path} component={HomePage} exact />
        <Route path={routes.products.path} component={ProductsPage} exact />
        <Route path={`${routes.products.path}/:productId`} component={ProductsPage} exact />
        <Route path={routes.about.path} component={AboutPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
