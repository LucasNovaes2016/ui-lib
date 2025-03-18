import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';

import { Chip } from './Chip';

const mockObj = {
  handleAdd: () => null,
  handleDelete: () => null,
};

describe('Chip', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('adds text', () => {
    render(<Chip>Some Info</Chip>);

    const chipElement = screen.getByText('Some Info');
    expect(chipElement).toBeInTheDocument();
  });

  it('calls onAdd', async () => {
    const spy = vi.spyOn(mockObj, 'handleAdd');

    render(<Chip onAdd={mockObj.handleAdd}>Add me</Chip>);

    const chipAddButtonElement = screen.getByRole('button');

    await userEvent.click(chipAddButtonElement);

    expect(spy).toHaveBeenCalled();
  });

  it('calls onDelete', async () => {
    const spy = vi.spyOn(mockObj, 'handleDelete');

    render(<Chip onDelete={mockObj.handleDelete}>Delete me</Chip>);

    const chipDeleteButtonElement = screen.getByRole('button');

    await userEvent.click(chipDeleteButtonElement);

    expect(spy).toHaveBeenCalled();
  });
});
