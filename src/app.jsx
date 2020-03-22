import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

import Header from './components/templates/header.component';
import Footer from './components/templates/footer.component';
import NotFoundPage from './components/pages/404-page.component';
import HomePage from './components/pages/home-page.component';
import AboutPage from './components/pages/about-page.component';

export default function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={routes.home.path} component={HomePage} exact />
        <Route path={routes.about.path} component={AboutPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
