import { useContext } from 'react';
import { TableContext } from './context';

export const useTable = () => {
  const context = useContext(TableContext);

  if (context === undefined) {
    throw new Error('useTable must be used with an TableProvider');
  }

  return context;
};
