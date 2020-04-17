import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Collapse } from 'react-collapse';

import { useIsOpenResponsive } from '../../hooks/use-is-open-responsive';
import { Container, Heading } from './collapsible-footer-block.styled';

function CollapsibleFooterBlock({ color, heading, children }) {
  const { colors } = useContext(ThemeContext);

  const isOpenAnyway = useCallback((windowSize) => windowSize.width > 600, []);
  const { isOpen, toggleIsOpen } = useIsOpenResponsive(false, isOpenAnyway);

  return (
    <Container>
      <Heading onClick={toggleIsOpen} color={color || colors.greyLight2} isOpen={isOpen}>
        {heading}
        <ion-icon name="chevron-down-outline"></ion-icon>
      </Heading>

      <Collapse isOpened={isOpen}>{children}</Collapse>
    </Container>
  );
}

CollapsibleFooterBlock.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsibleFooterBlock;
