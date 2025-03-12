import { ReactNode } from 'react';

export type TableHeadProps = {
  children: ReactNode;
};

export const TableHead = ({ children }: TableHeadProps) => (
  <thead>{children}</thead>
);
