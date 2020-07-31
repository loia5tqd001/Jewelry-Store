import { useState, useEffect } from 'react';

export const useAutoClose = (isOpen, autoClose) => {
  const [time, setTime] = useState(autoClose?.time);
  const hasAutoClose = !!autoClose;

  useEffect(() => {
    // if modal is not opening, there's no point to tick the timer
    if (isOpen) {
      const interval = setInterval(() => {
        if (!hasAutoClose) return;

        const newTime = time - 1;
        setTime(Math.max(0, newTime));

        if (newTime <= 0) {
          clearInterval(interval);
          const timeout = setTimeout(() => {
            autoClose.callback();
            clearTimeout(timeout);
            // window.alert('callback called') 
            // FIX: Have to idea why this is called TWICE instead of ONCE.
          }, 0);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOpen, time, hasAutoClose, autoClose]);

  return { hasAutoClose, time };
};
