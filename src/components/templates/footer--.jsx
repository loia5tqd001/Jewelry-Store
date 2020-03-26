import React from 'react';

import FooterTop from '../organisms/footer/footer-top--';
import FooterBottom from '../organisms/footer/footer-bottom--';

import { FooterContainer } from './footer.styled';

function Footer() {
  return (
    <FooterContainer>
      <FooterTop />
      <FooterBottom />
    </FooterContainer>
  );
}

export default Footer;
