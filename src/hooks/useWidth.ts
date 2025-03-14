import { RefObject, useEffect, useState } from 'react';

export const useWidth = (ref: RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(ref?.current?.offsetWidth);

    const getwidth = () => {
      setWidth(ref?.current?.offsetWidth);
    };
    window.addEventListener('resize', getwidth);

    return () => window.removeEventListener('resize', getwidth);
  }, []);

  return width;
};
