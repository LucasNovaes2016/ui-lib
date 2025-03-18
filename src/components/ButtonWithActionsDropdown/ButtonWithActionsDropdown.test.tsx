import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';

import { ButtonWithActionsDropdown } from './ButtonWithActionsDropdown';

// Mock Headless UI Transition
vi.mock('@headlessui/react', async () => {
  const actual = await vi.importActual('@headlessui/react');
  return {
    ...actual,
    Transition: ({ children }: { children: React.ReactNode }) => children,
  };
});

const mockObj = {
  handleClick: () => null,
};

const actions = [
  { label: 'Option 1', onClick: () => null },
  { label: 'Option 2', onClick: () => null },
  { label: 'Option 3', onClick: () => null },
];

describe('ButtonWithActionsDropdown', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders 2 buttons', () => {
    render(<ButtonWithActionsDropdown actions={actions} />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBe(2);
  });

  it('shows primary button text', () => {
    render(<ButtonWithActionsDropdown actions={actions} />);

    const primaryActionButton = screen.getByRole('button', {
      name: 'Option 1',
    });
    expect(primaryActionButton).toBeInTheDocument();
  });

  it('calls action callback when primary button text is clicked', async () => {
    const spy = vi.spyOn(mockObj, 'handleClick');

    render(
      <ButtonWithActionsDropdown
        actions={[{ label: 'Option 1', onClick: mockObj.handleClick }]}
      />
    );

    const primaryActionButton = screen.getAllByRole('button')[0];

    await userEvent.click(primaryActionButton);

    expect(spy).toHaveBeenCalled();
  });

  it('shows secondary action text when secondary button is clicked', async () => {
    render(<ButtonWithActionsDropdown actions={actions} />);

    const secondaryActionsButton = screen.getAllByRole('button')[1];

    await userEvent.click(secondaryActionsButton);

    const secondaryOptionText = await waitFor(() =>
      screen.getByText('Option 2')
    );

    expect(secondaryOptionText).toBeInTheDocument();
  });

  it('calls action callback when secondary action is clicked', async () => {
    const spy = vi.spyOn(mockObj, 'handleClick');

    render(
      <ButtonWithActionsDropdown
        actions={[
          { label: 'Option 1', onClick: () => null },
          { label: 'Option 2', onClick: mockObj.handleClick },
        ]}
      />
    );

    const secondaryActionsButton = screen.getAllByRole('button')[1];

    await userEvent.click(secondaryActionsButton);

    const secondaryOptionText = await waitFor(() =>
      screen.getByText('Option 2')
    );

    await userEvent.click(secondaryOptionText);

    expect(spy).toHaveBeenCalled();
  });

  it('does not show secondary action text when dropdown menu is opened and then closed', async () => {
    render(<ButtonWithActionsDropdown actions={actions} />);

    const secondaryActionsButton = screen.getAllByRole('button')[1];

    await userEvent.click(secondaryActionsButton);
    await userEvent.click(secondaryActionsButton);

    const secondaryOptionText = screen.queryByText('Option 2');
    expect(secondaryOptionText).not.toBeInTheDocument();
  });

  it('does not call action callback when component is disabled', async () => {
    const spy = vi.spyOn(mockObj, 'handleClick');

    render(
      <ButtonWithActionsDropdown
        actions={[{ label: 'Option 1', onClick: mockObj.handleClick }]}
        disabled
      />
    );

    const primaryActionButton = screen.getAllByRole('button')[0];

    await userEvent.click(primaryActionButton);

    expect(spy).not.toHaveBeenCalled();
  });
});
