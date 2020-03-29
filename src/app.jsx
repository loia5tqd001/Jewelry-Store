import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './utils/routes';

import Header from './components/templates/header--';
import SideNav from './components/templates/side-nav--';
import Footer from './components/templates/footer--';
import NotFoundPage from './components/pages/404-page--';
import HomePage from './components/pages/home-page--';
import AboutPage from './components/pages/about-page--';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Switch>
        <Route path={routes.home.path} component={HomePage} exact />
        <Route path={routes.about.path} component={AboutPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
