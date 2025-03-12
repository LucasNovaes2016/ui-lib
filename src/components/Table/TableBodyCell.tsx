import { ReactNode } from 'react';

export type TableBodyCellProps = {
  children: ReactNode;
  colSpan?: number;
  className?: string;
};

export const TableBodyCell = ({
  children,
  colSpan = 1,
  className = '',
}: TableBodyCellProps) => (
  <td
    colSpan={colSpan}
    className={`text-gray-600 text-sm font-normal py-4 ${className}`}
  >
    {children}
  </td>
);
