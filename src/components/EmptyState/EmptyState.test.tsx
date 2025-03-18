import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { EmptyState } from './EmptyState';

const mockObj = {
  onPrimaryActionClick: () => null,
  onSecondaryActionClick: () => null,
};

describe('EmptyState', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders title', () => {
    render(
      <EmptyState
        title="Nothing to show"
        description="No items were added to the list"
      />
    );

    const titleElement = screen.getByText('Nothing to show');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders description', () => {
    render(
      <EmptyState
        title="Nothing to show"
        description="No items were added to the list"
      />
    );

    const descriptionElement = screen.getByText(
      'No items were added to the list'
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(
      <EmptyState
        title="Nothing to show"
        description="No items were added to the list"
        primaryAction={{ children: 'Add item' }}
        secondaryAction={{ children: 'Go back' }}
      />
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);

    const [secondaryActionElement, primaryActionElement] = buttons;

    expect(primaryActionElement).toHaveTextContent('Add item');
    expect(secondaryActionElement).toHaveTextContent('Go back');
  });

  it('calls action buttons onClick', async () => {
    const primaryActionSpy = vi.spyOn(mockObj, 'onPrimaryActionClick');
    const secondaryActionSpy = vi.spyOn(mockObj, 'onSecondaryActionClick');

    render(
      <EmptyState
        title="Nothing to show"
        description="No items were added to the list"
        primaryAction={{
          children: 'Add item',
          onClick: mockObj.onPrimaryActionClick,
        }}
        secondaryAction={{
          children: 'Go back',
          onClick: mockObj.onSecondaryActionClick,
        }}
      />
    );

    const buttons = screen.getAllByRole('button');
    const [secondaryActionElement, primaryActionElement] = buttons;

    await userEvent.click(primaryActionElement);
    await userEvent.click(secondaryActionElement);

    expect(primaryActionSpy).toHaveBeenCalled();
    expect(secondaryActionSpy).toHaveBeenCalled();
  });
});
