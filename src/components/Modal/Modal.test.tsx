import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { Modal } from './Modal';
import { ModalContent } from './ModalContent';
import { ModalActions } from './ModalActions';
import { ModalLoading } from './ModalLoading';

const defaultProps = {
  title: 'Are you sure you want to delete this item?',
  description: 'This action can not be undone',
  primaryActionText: 'Yes',
  secondaryActionText: 'No',
};

const mockObj = {
  handleClose: () => null,
  onPrimaryActionClick: () => null,
  onSecondaryActionClick: () => null,
};

describe('Modal', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('does not render content when closed', () => {
    render(
      <Modal show={false} onClose={() => null}>
        <ModalContent title={defaultProps.title} />
      </Modal>
    );

    const titleElement = screen.queryByText(defaultProps.title);
    expect(titleElement).not.toBeInTheDocument();
  });

  it('renders all fixed modal content and actions when open', () => {
    render(
      <Modal show onClose={() => null}>
        <ModalContent
          title={defaultProps.title}
          description={defaultProps.description}
        />
        <ModalActions
          primary={{
            text: defaultProps.primaryActionText,
            onClick: () => null,
          }}
          secondary={{
            text: defaultProps.secondaryActionText,
            onClick: () => null,
          }}
        />
      </Modal>
    );

    const titleElement = screen.getByText(defaultProps.title);
    const descriptionElement = screen.getByText(defaultProps.description);
    const closeElement = screen.getAllByRole('button')[0];
    const primaryActionElement = screen.getByText(
      defaultProps.primaryActionText
    );
    const secondaryActionElement = screen.getByText(
      defaultProps.secondaryActionText
    );
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(closeElement).toBeInTheDocument();
    expect(primaryActionElement).toBeInTheDocument();
    expect(secondaryActionElement).toBeInTheDocument();
  });

  it('renders all fixed modal loading content when open', () => {
    render(
      <Modal show onClose={() => null}>
        <ModalLoading
          title={defaultProps.title}
          description={defaultProps.description}
        />
      </Modal>
    );

    const titleElement = screen.getByText(defaultProps.title);
    const descriptionElement = screen.getByText(defaultProps.description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const spy = vi.spyOn(mockObj, 'handleClose');

    render(
      <Modal show onClose={mockObj.handleClose}>
        <ModalContent title={defaultProps.title} />
      </Modal>
    );

    const closeElement = screen.getByRole('button');
    await userEvent.click(closeElement);

    expect(spy).toHaveBeenCalled();
  });

  it('calls onClose when Escape key is pressed', async () => {
    const spy = vi.spyOn(mockObj, 'handleClose');

    render(
      <Modal show onClose={mockObj.handleClose}>
        <ModalContent title={defaultProps.title} />
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    expect(spy).toHaveBeenCalled();
  });

  it('does not call onClose when Escape key functionality is disabled ', async () => {
    const spy = vi.spyOn(mockObj, 'handleClose');

    render(
      <Modal show shouldCloseOnEsc={false} onClose={mockObj.handleClose}>
        <ModalContent title={defaultProps.title} />
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    expect(spy).not.toHaveBeenCalled();
  });

  it('does not render close button when showCloseButton is false', () => {
    render(
      <Modal show showCloseButton={false} onClose={mockObj.handleClose}>
        <ModalContent title={defaultProps.title} />
      </Modal>
    );

    const closeElement = screen.queryByRole('button');
    expect(closeElement).not.toBeInTheDocument();
  });

  it('calls action buttons onClick', async () => {
    const primaryActionSpy = vi.spyOn(mockObj, 'onPrimaryActionClick');
    const secondaryActionSpy = vi.spyOn(mockObj, 'onSecondaryActionClick');

    render(
      <Modal show onClose={() => null}>
        <ModalActions
          primary={{
            text: defaultProps.primaryActionText,
            onClick: mockObj.onPrimaryActionClick,
          }}
          secondary={{
            text: defaultProps.secondaryActionText,
            onClick: mockObj.onSecondaryActionClick,
          }}
        />
      </Modal>
    );

    const primaryActionElement = screen.getByText(
      defaultProps.primaryActionText
    );
    const secondaryActionElement = screen.getByText(
      defaultProps.secondaryActionText
    );

    await userEvent.click(primaryActionElement);
    await userEvent.click(secondaryActionElement);

    expect(primaryActionSpy).toHaveBeenCalled();
    expect(secondaryActionSpy).toHaveBeenCalled();
  });

  it('does not call action buttons onClick when they are disabled', async () => {
    const primaryActionSpy = vi.spyOn(mockObj, 'onPrimaryActionClick');
    const secondaryActionSpy = vi.spyOn(mockObj, 'onSecondaryActionClick');

    render(
      <Modal show onClose={() => null}>
        <ModalActions
          primary={{
            text: defaultProps.primaryActionText,
            onClick: mockObj.onPrimaryActionClick,
          }}
          secondary={{
            text: defaultProps.secondaryActionText,
            onClick: mockObj.onSecondaryActionClick,
          }}
          disableActions
        />
      </Modal>
    );

    const primaryActionElement = screen.getByText(
      defaultProps.primaryActionText
    );
    const secondaryActionElement = screen.getByText(
      defaultProps.secondaryActionText
    );

    await userEvent.click(primaryActionElement);
    await userEvent.click(secondaryActionElement);

    expect(primaryActionSpy).not.toHaveBeenCalled();
    expect(secondaryActionSpy).not.toHaveBeenCalled();
  });
});
