import React from 'react';

import FooterTop from '../organisms/footer/footer-top.component';
import FooterBottom from '../organisms/footer/footer-bottom.component';

import { FooterContainer } from './footer.styles';

function Footer() {
  return (
    <FooterContainer>
      <FooterTop />
      <FooterBottom />
    </FooterContainer>
  );
}

export default Footer;
