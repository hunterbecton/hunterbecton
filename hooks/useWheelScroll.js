import { useState, useEffect, useCallback } from 'react';

export const useWheelScroll = () => {
  const [state, setState] = useState({
    deltaX: 0,
    deltaY: 0,
    deltaZ: 0,
  });

  const handleScrollEvent = useCallback((e) => {
    setState(() => {
      return {
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        deltaZ: e.deltaZ,
      };
    });
  }, []);

  useEffect(() => {
    const scrollListener = (e) => {
      handleScrollEvent(e);
    };

    window.addEventListener('wheel', scrollListener);

    return () => {
      window.removeEventListener('wheel', scrollListener);
    };
  }, [handleScrollEvent]);

  return {
    deltaX: state.deltaX,
    deltaY: state.deltaY,
    deltaZ: state.deltaZ,
  };
};

export default useWheelScroll;
