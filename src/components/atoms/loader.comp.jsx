import React from 'react';

import { Container, StyledLoader } from './loader.styled';

function Loader() {
  return (
    <Container>
      <StyledLoader>
        <div></div>
        <div></div>
        <div></div>
      </StyledLoader>
    </Container>
  );
}

export default Loader;
