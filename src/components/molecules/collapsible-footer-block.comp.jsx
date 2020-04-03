import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Collapse } from 'react-collapse';

import { useIsOpen } from './collapsible-footer-block.hooks';
import { Container, Heading } from './collapsible-footer-block.styled';

function CollapsibleFooterBlock({ color, heading, children }) {
  const { colors } = useContext(ThemeContext);
  const { getIsOpen, toggleIsOpen } = useIsOpen();

  return (
    <Container>
      <Heading onClick={toggleIsOpen} color={color || colors.greyLight2} isOpen={getIsOpen}>
        {heading}
        <ion-icon name="chevron-down-outline"></ion-icon>
      </Heading>

      <Collapse isOpened={getIsOpen}>{children}</Collapse>
    </Container>
  );
}

CollapsibleFooterBlock.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsibleFooterBlock;
