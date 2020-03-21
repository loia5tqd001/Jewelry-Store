import React from 'react';
import PropTypes from 'prop-types';

import FooterTop from '../organisms/footer/footer-top.component';
import FooterBottom from '../organisms/footer/footer-bottom.component';

import { FooterContainer } from './footer.styles';

function Footer(props) {
  return (
    <FooterContainer>
      <FooterTop />
      <FooterBottom />
    </FooterContainer>
  );
}

Footer.propTypes = {};

export default Footer;
