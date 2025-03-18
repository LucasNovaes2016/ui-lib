import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableBodyCell,
  TableRow,
} from '.';

describe('Table', () => {
  it('renders cells content', () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>User</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Active</TableHeadCell>
            <TableHeadCell>Balance</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableBodyCell>John Doe</TableBodyCell>
            <TableBodyCell>john.doe@example.com</TableBodyCell>
            <TableBodyCell>Sim</TableBodyCell>
            <TableBodyCell>$ 1000</TableBodyCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const headerCells = screen.getAllByRole('columnheader');

    expect(headerCells[0]).toHaveTextContent('User');
    expect(headerCells[1]).toHaveTextContent('Email');
    expect(headerCells[2]).toHaveTextContent('Active');
    expect(headerCells[3]).toHaveTextContent('Balance');

    const bodyCells = screen.getAllByRole('cell');

    expect(bodyCells[0]).toHaveTextContent('John Doe');
    expect(bodyCells[1]).toHaveTextContent('john.doe@example.com');
    expect(bodyCells[2]).toHaveTextContent('Sim');
    expect(bodyCells[3]).toHaveTextContent('$ 1000');
  });

  it('renders header cell tooltip content', async () => {
    const { container } = render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell tooltipInfoElement={<span>Name of the user</span>}>
              User
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableBodyCell>John Doe</TableBodyCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const tooltipIconElement = container.querySelector('svg');

    await userEvent.hover(tooltipIconElement);

    const tooltipText = await waitFor(() =>
      screen.getByText('Name of the user')
    );

    expect(tooltipText).toBeInTheDocument();
  });

  it('renders a link when the to prop is passed', async () => {
    render(
      <MemoryRouter>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>User</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow to="/test">
              <TableBodyCell>John Doe</TableBodyCell>
              <TableBodyCell>john.doe@example.com</TableBodyCell>
            </TableRow>
            <TableRow to="/test2">
              <TableBodyCell>John Doe</TableBodyCell>
              <TableBodyCell>john.doe@example.com</TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyCell>Jane Doe</TableBodyCell>
              <TableBodyCell>jane.doe@example.com</TableBodyCell>
            </TableRow>
          </TableBody>
        </Table>
      </MemoryRouter>
    );

    const linkElements = screen.getAllByRole('link');

    expect(linkElements.length).toBe(2);
  });

  it('toggles collapsable content', async () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>User</TableHeadCell>
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow expandableRowContent={<span>additional info</span>}>
            <TableBodyCell>John Doe</TableBodyCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const collapseButtonElement = screen.getByRole('button');

    expect(collapseButtonElement).toBeInTheDocument();

    await userEvent.click(collapseButtonElement);

    const collapsableText = await waitFor(() =>
      screen.getByText('additional info')
    );

    expect(collapsableText).toBeInTheDocument();

    await userEvent.click(collapseButtonElement);

    expect(collapsableText).not.toBeInTheDocument();
  });

  it('only shows one collapsable content at a time', async () => {
    render(
      <Table allowMultipleExpandedRows={false}>
        <TableHead>
          <TableRow>
            <TableHeadCell>User</TableHeadCell>
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow expandableRowContent={<span>additional info</span>}>
            <TableBodyCell>John Doe</TableBodyCell>
          </TableRow>
          <TableRow expandableRowContent={<span>more info</span>}>
            <TableBodyCell>Jane Doe</TableBodyCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const collapseButtons = screen.getAllByRole('button');

    const firstRowCollapseButton = collapseButtons[0];

    const secondRowCollapseButton = collapseButtons[1];

    await userEvent.click(firstRowCollapseButton);

    const firstRowCollapsableText = await waitFor(() =>
      screen.getByText('additional info')
    );

    await userEvent.click(secondRowCollapseButton);

    const secondRowCollapsableText = await waitFor(() =>
      screen.getByText('more info')
    );

    expect(firstRowCollapsableText).not.toBeInTheDocument();
    expect(secondRowCollapsableText).toBeInTheDocument();
  });
});
