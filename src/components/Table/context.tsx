import { createContext, ReactNode, useState } from 'react';

export type TableProviderProps = {
  children: ReactNode;
  allowMultipleExpandedRows: boolean;
};

export type TableContextProps = {
  expandedRows: string[];
  toggleRowExpansion: (rowId: string) => void;
};

const TableContext = createContext<TableContextProps>({
  expandedRows: [],
  toggleRowExpansion: () => {},
});

const TableProvider = ({
  children,
  allowMultipleExpandedRows,
}: TableProviderProps) => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const toggleRowExpansion = (rowId: string) => {
    setExpandedRows((prevExpandedRows) => {
      const isRowExpanded = prevExpandedRows.includes(rowId);

      if (isRowExpanded) {
        return prevExpandedRows.filter((id) => id !== rowId);
      }

      if (allowMultipleExpandedRows) {
        return [...prevExpandedRows, rowId];
      }

      return [rowId];
    });
  };

  return (
    <TableContext.Provider value={{ expandedRows, toggleRowExpansion }}>
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };
