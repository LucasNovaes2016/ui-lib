import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { Button } from './Button';

const mockObj = {
  handleClick: () => null,
};

describe('Button', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('shows text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });
  it('calls onClick', async () => {
    const spy = vi.spyOn(mockObj, 'handleClick');

    render(<Button onClick={mockObj.handleClick}>Click Me</Button>);

    const buttonElement = screen.getByRole('button');

    await userEvent.click(buttonElement);

    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('does not call onClick when disabled', async () => {
    const spy = vi.spyOn(mockObj, 'handleClick');

    render(
      <Button onClick={mockObj.handleClick} disabled>
        Click Me
      </Button>
    );

    const buttonElement = screen.getByRole('button');

    await userEvent.click(buttonElement);

    expect(spy).not.toHaveBeenCalled();
  });
});
