import { ReactNode } from 'react';

export interface SlideOverContentProps {
  children: ReactNode;
}

export const SlideOverContent = ({ children }: SlideOverContentProps) => {
  return (
    <div className="border-none overflow-y-auto flex-1 p-4 sm:p-6">
      <div className="space-y-5 divide-y divide-gray-200">{children}</div>
    </div>
  );
};
