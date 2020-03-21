import React from 'react';
import PropTypes from 'prop-types';

import { FooterBottomContainer, SocialList, Link, IconRotate } from './footer-bottom.styles';

const LinkHaravan = () => (
  <Link href="https://jwelry-store.myharavan.com/" target="_blank" rel="noopener noreferrer">
    Power by Haravan.
  </Link>
);

const LinkRotate = (props) => (
  <IconRotate {...props} target="_blank" rel="noopener noreferrer" />
)

function FooterBottom(props) {
  return (
    <FooterBottomContainer>
      <p>
        Copyright &copy; 2020 JqueryStore - Nguyen Huynh Loi. <LinkHaravan />
      </p>
      <SocialList>
        <LinkRotate href="https://stackoverflow.com/users/9787887">
          <ion-icon name="logo-stackoverflow" />
        </LinkRotate>
        <LinkRotate href="https://github.com/loia5tqd001">
          <ion-icon name="logo-github" />
        </LinkRotate>
        <LinkRotate href="https://linkedin.com/in/loia5tqd001/">
          <ion-icon name="logo-linkedin" />
        </LinkRotate>
        <LinkRotate href="https://facebook.com/loia5tqd001">
          <ion-icon name="logo-facebook" />
        </LinkRotate>
      </SocialList>
    </FooterBottomContainer>
  );
}

FooterBottom.propTypes = {};

export default FooterBottom;
