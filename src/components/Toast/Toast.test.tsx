import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';

import { Toast } from './Toast';

const mockObj = {
  handleClose: () => null,
};

describe('Toast', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('adds title', () => {
    render(
      <Toast
        title="Success"
        content="Item added successfully"
        severity="success"
        onClose={() => null}
      />
    );

    const toastElement = screen.getByText('Success');
    expect(toastElement).toBeInTheDocument();
  });

  it('adds content', () => {
    render(
      <Toast
        title="Success"
        content="Item added successfully"
        severity="success"
        onClose={() => null}
      />
    );

    const toastElement = screen.getByText('Item added successfully');
    expect(toastElement).toBeInTheDocument();
  });

  it('calls onClose', async () => {
    const spy = vi.spyOn(mockObj, 'handleClose');
    render(
      <Toast
        title="Success"
        content="Item added successfully"
        severity="success"
        onClose={mockObj.handleClose}
      />
    );

    const toastCloseButtonElement = screen.getByRole('button');

    await userEvent.click(toastCloseButtonElement);

    expect(spy).toHaveBeenCalled();
  });
});
