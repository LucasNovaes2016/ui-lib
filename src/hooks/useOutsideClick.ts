import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
  condition = true
) => {
  useEffect(() => {
    const maybeHandler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (condition) {
          handler();
        }
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return null;
};
