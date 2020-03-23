import React from 'react';
import ReactMarkdown from 'react-markdown';
import DATA from './section-about-us.data';

import routes, { Link } from '../../../routes';

import ButtonSliding from '../../atoms/button-sliding.component';

import { SectionContainer, Left, Heading, Right } from './section-about-us.styles';

function SectionAboutUs() {
  return (
    <SectionContainer>
      <Left bgImage={DATA.bgImageUrl}>
        <Heading>Về chúng tôi</Heading>
        <ButtonSliding as={Link} to={routes.about.path}>
          Xem ngay
        </ButtonSliding>
      </Left>
      <Right>
        <ReactMarkdown escapeHtml={false} source={DATA.aboutContent} />
      </Right>
    </SectionContainer>
  );
}

export default SectionAboutUs;
