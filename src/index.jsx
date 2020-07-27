import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import App from './app';
import { store, persistor } from './redux/store';

// styles
import GlobalStyle from './styles/_global';
import styles from './styles/theme';
import media from './styles/media';
import colors from './styles/colors';
import * as animations from './styles/animations';
import * as mixins from './styles/mixins';
import * as variables from './styles/variables';
import './styles/__plugins.js';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={{ ...variables, styles, media, colors, animations, mixins }}>
        <SnackbarProvider>
          <GlobalStyle/>
          <App/>
        </SnackbarProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
