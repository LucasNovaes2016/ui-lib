import { ReactNode } from 'react';

export type SlideOverActionsProps = {
  children: ReactNode;
};

export const SlideOverActions = ({ children }: SlideOverActionsProps) => {
  return (
    <div className="flex-shrink-0 px-4 py-4 flex justify-end space-x-2">
      {children}
    </div>
  );
};
