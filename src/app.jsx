import React from 'react';

import Header from './components/templates/header.component';
import HomePage from './components/pages/home-page.component';

export default function App(props) {
  return (
    <React.Fragment>
      <Header></Header>
      <HomePage></HomePage>
    </React.Fragment>
  );
}
