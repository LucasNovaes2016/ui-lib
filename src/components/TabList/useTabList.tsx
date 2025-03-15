import { useContext } from 'react';
import { TabListContext } from './context';

export const useTabList = () => {
  const context = useContext(TabListContext);

  if (context === undefined) {
    throw new Error('useTabList must be used with an TabListProvider');
  }

  return context;
};
