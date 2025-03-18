import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { Banner } from './Banner';

const mockObj = {
  handleClose: () => null,
  handlePrimaryClick: () => null,
  handleSecondaryClick: () => null,
};

describe('Banner', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows title', () => {
    render(<Banner title="A link will be sent to your email" />);

    const bannerElement = screen.getByText('A link will be sent to your email');
    expect(bannerElement).toBeInTheDocument();
  });

  it('calls onClose', async () => {
    const spy = vi.spyOn(mockObj, 'handleClose');

    render(
      <Banner
        title="A link will be sent to your email"
        onClose={mockObj.handleClose}
      />
    );

    const closeButtonElement = screen.getByRole('button');

    await userEvent.click(closeButtonElement);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('shows action buttons content', () => {
    render(
      <Banner
        title="A link will be sent to your email"
        primaryActionText="OK"
        secondaryActionText="Dismiss"
      />
    );

    const primaryActionButton = screen.getByText('OK');
    const secondaryActionButton = screen.getByText('Dismiss');

    expect(primaryActionButton).toBeInTheDocument();
    expect(secondaryActionButton).toBeInTheDocument();
  });

  it('calls action buttons on click', async () => {
    const spyPrimary = vi.spyOn(mockObj, 'handlePrimaryClick');
    const spySecondary = vi.spyOn(mockObj, 'handleSecondaryClick');

    render(
      <Banner
        title="A link will be sent to your email"
        primaryActionText="OK"
        onPrimaryActionClick={mockObj.handlePrimaryClick}
        secondaryActionText="Dismiss"
        onSecondaryActionClick={mockObj.handleSecondaryClick}
      />
    );

    const primaryActionButton = screen.getByText('OK');
    const secondaryActionButton = screen.getByText('Dismiss');

    await userEvent.click(primaryActionButton);
    await userEvent.click(secondaryActionButton);

    expect(spyPrimary).toHaveBeenCalledTimes(1);
    expect(spySecondary).toHaveBeenCalledTimes(1);
  });
});
