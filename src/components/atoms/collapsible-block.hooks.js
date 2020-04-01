import { useState, useEffect, useMemo, useCallback } from 'react';

const isOneColumnLayout = () => window.innerWidth < 600;

export const useIsOpen = () => {
  const [isOneColumn, setIsOneColumn] = useState(isOneColumnLayout());
  const [isOpen, setIsOpen] = useState(!isOneColumn);

  useEffect(() => {
    const recalculateIsOneColumn = () => setIsOneColumn(isOneColumnLayout());

    window.addEventListener('resize', recalculateIsOneColumn);
    return () => window.removeEventListener('resize', recalculateIsOneColumn);
  }, []);

  const getIsOpen = useMemo(() => {
    return isOneColumn ? isOpen : true;
  }, [isOneColumn, isOpen]);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return { getIsOpen, toggleIsOpen };
};
