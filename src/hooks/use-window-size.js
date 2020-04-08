import { useState, useEffect, useCallback } from 'react';

// https://usehooks.com/useWindowSize/
export function useWindowSize() {
  const isClient = useCallback(() => typeof window === 'object', []);

  const getSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient],
  );

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient()) {
      return false;
    }

    const handleResize = () => setWindowSize(getSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, getSize]);

  return windowSize;
}
