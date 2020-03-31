import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * - Sticky animation still isn't smooth enough, here is the original smooth jquery version:
 * https://theme.hstatic.net/1000327411/1000543881/14/scripts.js?v=25
 * (the script handling sticky-header is at the near bottom)
 *
 * - Originally the `handleScroll` callback wrapped by the `throttle` utility function for optimization purpose, but it turned out making the sticky animation not quite smooth
 */

export const useStickyHeader = () => {
  const [isStuck, setIsStuck] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = useCallback(() => {
    const isSticky = window.scrollY >= headerRef.current.offsetHeight - 20; // offset 20 to make it smoother
    setIsStuck(isSticky);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isStuck, headerRef };
};
