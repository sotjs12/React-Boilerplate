import { useEffect, useState } from 'react';
import { isBrowser } from '@/utils';

type Props = {
  width: number;
  height: number;
};

function on(obj: Window, ...args: [string, () => void]) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args);
  }
}

function off(obj: Window, ...args: [string, () => void]) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args);
  }
}

const useWindowSize = (
  initialWidth = Infinity,
  initialHeight = Infinity,
): Props => {
  const [state, setState] = useState<Props>({
    width: isBrowser ? window.outerWidth : initialWidth,
    height: isBrowser ? window.outerHeight : initialHeight,
  });

  useEffect(() => {
    if (isBrowser) {
      const handler = () => {
        setState({
          width: window.outerWidth,
          height: window.outerHeight,
        });
      };
      on(window, 'resize', handler);
      return () => {
        off(window, 'resize', handler);
      };
    }
  }, [setState]);

  return state;
};

export default useWindowSize;
