import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ConditionalBadge } from '../Badge';
import {
  Table,
  TableProps,
  TableRow,
  TableHeadCell,
  TableBodyCell,
  TableHead,
  TableBody,
} from './';

const tableData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: true,
    balance: 1000,
    isExpandable: false,
    isLink: false,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: false,
    balance: 2000,
    isExpandable: false,
    isLink: false,
  },
  {
    id: '3',
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    status: true,
    balance: 3000,
    isExpandable: false,
    isLink: false,
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.d@example.com',
    status: true,
    balance: 4000,
    isExpandable: false,
    isLink: false,
  },
  {
    id: '5',
    name: 'Michael Brown',
    email: 'michael.b@example.co',
    status: false,
    balance: 4500,
    isExpandable: false,
    isLink: false,
  },
];

const expandableRowContent = (
  <div className="flex flex-col gap-y-4">
    <h1>Conteúdo colapsável</h1>
    <span className="text-sm text-gray-500">Informação 1</span>
    <span className="text-sm text-gray-500">Informação 2</span>
    <span className="text-sm text-gray-500">Informação 3</span>
  </div>
);

const createTableHeadRow = (addTooltip?: boolean, addEmptyCell?: boolean) => (
  <TableRow>
    <TableHeadCell
      tooltipInfoElement={addTooltip ? <span>Usuário</span> : null}
    >
      Usuário
    </TableHeadCell>
    <TableHeadCell tooltipInfoElement={addTooltip ? <span>E-mail</span> : null}>
      E-mail
    </TableHeadCell>
    <TableHeadCell tooltipInfoElement={addTooltip ? <span>Ativo</span> : null}>
      Ativo
    </TableHeadCell>
    <TableHeadCell
      tooltipInfoElement={addTooltip ? <span>Saldo na conta</span> : null}
      textAlign="end"
    >
      Saldo na conta
    </TableHeadCell>
    {addEmptyCell && <TableHeadCell />}
  </TableRow>
);

const createTableBodyRow = ({
  id,
  name,
  email,
  status,
  balance,
  isExpandable,
  isLink,
}) => (
  <TableRow
    key={id}
    expandableRowContent={isExpandable ? expandableRowContent : null}
    expandableRowClassName="bg-gray-50"
    to={isLink ? '#' : null}
  >
    <TableBodyCell>{name}</TableBodyCell>
    <TableBodyCell>{email}</TableBodyCell>
    <TableBodyCell>
      <ConditionalBadge status={status} />
    </TableBodyCell>
    <TableBodyCell className="text-right">${balance}</TableBodyCell>
  </TableRow>
);

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    showOverflow: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    showOverflow: false,
    allowMultipleExpandedRows: true,
    children: (
      <>
        <TableHead>{createTableHeadRow()}</TableHead>
        <TableBody>
          {tableData.map((tableItem) => createTableBodyRow(tableItem))}
        </TableBody>
      </>
    ),
  },
} as Meta<TableProps>;

export const Default: StoryObj<TableProps> = {};

export const WithHeaderTooltip: StoryObj<TableProps> = {
  args: {
    children: (
      <>
        <TableHead>{createTableHeadRow(true)}</TableHead>
        <TableBody>
          {tableData.map((tableItem) => createTableBodyRow(tableItem))}
        </TableBody>
      </>
    ),
  },
};

export const WithRowsAsLinks: StoryObj<TableProps> = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    children: (
      <>
        <TableHead>{createTableHeadRow(true)}</TableHead>
        <TableBody>
          {tableData.map((tableItem) =>
            createTableBodyRow({ ...tableItem, isLink: true })
          )}
        </TableBody>
      </>
    ),
  },
};

export const WithExpandableRows: StoryObj<TableProps> = {
  args: {
    children: (
      <>
        <TableHead>{createTableHeadRow(false, true)}</TableHead>
        <TableBody>
          {tableData.map((tableItem) =>
            createTableBodyRow({ ...tableItem, isExpandable: true })
          )}
        </TableBody>
      </>
    ),
  },
};

export const OneExpandableRowAtATime: StoryObj<TableProps> = {
  args: {
    children: (
      <>
        <TableHead>{createTableHeadRow(false, true)}</TableHead>
        <TableBody>
          {tableData.map((tableItem) =>
            createTableBodyRow({ ...tableItem, isExpandable: true })
          )}
        </TableBody>
      </>
    ),
    allowMultipleExpandedRows: false,
  },
};
