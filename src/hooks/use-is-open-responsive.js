import { useState, useMemo, useCallback } from 'react';
import { useWindowSize } from './use-window-size';

export function useIsOpenResponsive(initState, isOpenAnyway, isCloseAnyway) {
  const [isOpen, setIsOpen] = useState(initState);
  const windowSize = useWindowSize();

  const getIsOpen = useMemo(() => {
    if (isOpenAnyway && isOpenAnyway(windowSize)) {
      return true;
    }

    if (isCloseAnyway && isCloseAnyway(windowSize)) {
      return false;
    }

    return isOpen;
  }, [windowSize, isCloseAnyway, isOpenAnyway, isOpen]);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return { isOpen: getIsOpen, toggleIsOpen };
}
