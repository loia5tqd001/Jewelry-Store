import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Collapse } from 'react-collapse';

import { Container, Heading } from './collapsible-block.styles';

function CollapsibleBlock({ color, heading, children }) {
  const { colors } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container>
      <Heading
        onClick={() => setIsOpen(!isOpen)}
        color={color || colors.greyLight2}
        isOpen={isOpen}
      >
        {heading}
        <ion-icon name="chevron-down-outline"></ion-icon>
      </Heading>

      <Collapse isOpened={isOpen}>{children}</Collapse>
    </Container>
  );
}

CollapsibleBlock.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsibleBlock;
