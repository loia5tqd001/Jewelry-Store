import React from 'react';

import StyledLink from '../../atoms/styled-link.comp';

import { FooterBottomContainer, SocialList, IconRotate } from './footer-bottom.styled';

const LinkRotate = (props) => (
  <IconRotate {...props} target="_blank" rel="noopener noreferrer" />
)

function FooterBottom(props) {
  return (
    <FooterBottomContainer>
      <p>
        Copyright &copy; 2020 JqueryStore - Nguyen Huynh Loi.{' '}
        <StyledLink as="a" to="https://jwelry-store.myharavan.com/">
          Power by Haravan.
        </StyledLink>
      </p>
      <SocialList>
        <LinkRotate title="Stackoverflow" href="https://stackoverflow.com/users/9787887">
          <ion-icon name="logo-stackoverflow" />
        </LinkRotate>
        <LinkRotate title="Github" href="https://github.com/loia5tqd001">
          <ion-icon name="logo-github" />
        </LinkRotate>
        <LinkRotate title="Linkedin" href="https://linkedin.com/in/loia5tqd001/">
          <ion-icon name="logo-linkedin" />
        </LinkRotate>
        <LinkRotate title="Facebook" href="https://facebook.com/loia5tqd001">
          <ion-icon name="logo-facebook" />
        </LinkRotate>
      </SocialList>
    </FooterBottomContainer>
  );
}

export default FooterBottom;
