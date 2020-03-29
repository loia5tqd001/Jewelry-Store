import React from 'react';
import ReactMarkdown from 'react-markdown';

import routes, { Link } from '../../../utils/routes';
import ButtonSliding from '../../atoms/button-sliding--';

import DATA from './section-about-us.data';
import { SectionContainer, Left, Heading, Right } from './section-about-us.styled';

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
