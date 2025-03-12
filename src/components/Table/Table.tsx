import { ReactNode } from 'react';
import './styles.css';
import { TableProvider } from './context';

export type TableProps = {
  children: ReactNode;
  showOverflow?: boolean;
  allowMultipleExpandedRows?: boolean;
};

export const Table = ({
  children,
  showOverflow = false,
  allowMultipleExpandedRows = true,
}: TableProps) => (
  <TableProvider allowMultipleExpandedRows={allowMultipleExpandedRows}>
    <div
      className={` border border-gray-200 ${
        showOverflow ? 'overflow-visible' : 'overflow-x-auto'
      } rounded-lg`}
    >
      <table className="bg-white rounded-lg min-w-full">{children}</table>
    </div>
  </TableProvider>
);
