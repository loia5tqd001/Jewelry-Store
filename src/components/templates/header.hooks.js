import { useState, useEffect, useCallback, useRef } from 'react';
import throttle from 'lodash/throttle';

export const useStickyHeader = () => {
  const [isStuck, setIsStuck] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = useCallback(
    throttle(() => {
      const isSticky = window.scrollY >= headerRef.current.offsetHeight;
      setIsStuck(isSticky);
    }, 150),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isStuck, headerRef };
};
