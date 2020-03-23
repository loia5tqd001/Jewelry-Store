import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/_global.styles';
import styles from './styles/theme.styles';
import media from './styles/media.styles';
import colors from './styles/colors.styles';
import * as animations from './styles/animations.styles';
import * as mixins from './styles/mixins.styles';
import * as variables from './styles/variables.styles';

import App from './app';

import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  // Usage:
  // props => props.theme.colors.white
  // props => props.theme.animations.pulse
  // props => props.theme.mixins.imageFrame
  <ThemeProvider theme={{ ...variables, styles, media, colors, animations, mixins }}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
