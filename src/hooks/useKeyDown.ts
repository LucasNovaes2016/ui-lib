import { useEffect } from 'react';

export const useKeyDown = (
  targetKey: string,
  handler: () => void,
  condition = true
) => {
  function downHandler({ key }: KeyboardEvent) {
    if (key === targetKey && condition) {
      handler();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  });

  return null;
};
