import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { Container, Heading, Content } from './collapsible-block.styles';

// Animated Accordion in React: https://www.youtube.com/watch?v=MAD2HnUFjgg&lc=UgyBPbBQKFDTn4fF8ud4AaABAg

function CollapsibleBlock({ color, heading, children }) {
  const { colors } = useContext(ThemeContext);

  const [isFolded, setIsFolded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.height = isFolded ? '0px' : `${contentRef.current.scrollHeight + 1}px`;
    // NOTE 1:
    // we must set height to 'px' unit to make the content animated,
    // units like 'max-content', '%' are "vague" units, won't be animatable

    // NOTE 2:
    // We need + 1 px like above, because sometimes it'd lack 1px
    // Look at .github/images/border-stripped.jpg to see the captured image
  }, [contentRef, isFolded]);

  return (
    <Container>
      <Heading
        onClick={() => setIsFolded(!isFolded)}
        color={color || colors.greyLight2}
        isFolded={isFolded}
      >
        {heading}
        <ion-icon name="chevron-down-outline"></ion-icon>
      </Heading>

      <Content ref={contentRef}>{children}</Content>
    </Container>
  );
}

CollapsibleBlock.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsibleBlock;
