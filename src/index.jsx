import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './app';
import store from './redux/store';

import GlobalStyle from './styles/_global';
import styles from './styles/theme';
import media from './styles/media';
import colors from './styles/colors';
import * as animations from './styles/animations';
import * as mixins from './styles/mixins';
import * as variables from './styles/variables';

import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={{ ...variables, styles, media, colors, animations, mixins }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
