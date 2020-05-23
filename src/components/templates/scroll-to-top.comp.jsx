import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './scroll-to-top.styled';

// ScrollToTop component: https://github.com/NearHuscarl/nearacademy/blob/bdb7c970443faf3f33896cfec9be124687141eda/src/components/ScrollToTop.jsx
function ScrollToTop() {
  const history = useHistory();

  if (history.action === 'PUSH') {
    window.scrollTo(0, 0);
  }

  return null;
}

export function ScrollToTopIndicator() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const THRESHOLD = 400;

    const handleScroll = () => {
      if (atTop && window.scrollY >= THRESHOLD) {
        setAtTop(false);
      } else if (!atTop && window.scrollY < THRESHOLD) {
        setAtTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [atTop]);

  const scrollToTopSmoothly = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      }),
    [],
  );

  return (
    <Container onClick={scrollToTopSmoothly} atTop={atTop}>
      <ion-icon name="caret-up"></ion-icon>
    </Container>
  );
}

export default ScrollToTop;
