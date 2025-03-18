import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';

import { Input } from './Input';

const mockObj = {
  handleChange: () => null,
  handleBlur: () => null,
  handleFocus: () => null,
  handleKeyPress: () => null,
};

describe('Input', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('displays default value', () => {
    render(<Input defaultValue="hello world" />);
    const inputElement = screen.getByDisplayValue('hello world');
    expect(inputElement).toBeInTheDocument();
  });
  it('adds id', () => {
    render(<Input id="input-test" defaultValue="hello" />);
    const inputElement = screen.getByDisplayValue('hello');
    expect(inputElement).toHaveAttribute('id', 'input-test');
  });
  it('adds placeholder', () => {
    render(<Input placeholder="type here..." />);
    const inputElement = screen.getByPlaceholderText('type here...');
    expect(inputElement).toBeInTheDocument();
  });
  it('adds name', () => {
    const { container } = render(<Input name="input-test" />);
    const inputElement = container.querySelector('input[name="input-test"]');
    expect(inputElement).toBeInTheDocument();
  });
  it('calls onChange', async () => {
    const spy = vi.spyOn(mockObj, 'handleChange');

    render(
      <Input placeholder="type your name..." onChange={mockObj.handleChange} />
    );

    const inputElement = screen.getByPlaceholderText('type your name...');

    await userEvent.type(inputElement, 'bob');

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'bob' }),
      })
    );
  });
  it('calls onFocus', async () => {
    const spy = vi.spyOn(mockObj, 'handleFocus');

    render(
      <Input placeholder="type your name..." onFocus={mockObj.handleFocus} />
    );

    const inputElement = screen.getByPlaceholderText('type your name...');

    await userEvent.click(inputElement);

    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('calls onBlur', async () => {
    const spy = vi.spyOn(mockObj, 'handleBlur');

    render(
      <>
        <button>click outside input</button>
        <Input placeholder="type your name..." onBlur={mockObj.handleBlur} />
      </>
    );

    const inputElement = screen.getByPlaceholderText('type your name...');
    const buttonElement = screen.getByRole('button');

    await userEvent.click(inputElement);
    await userEvent.click(buttonElement);

    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('calls onKeyPress', async () => {
    const spy = vi.spyOn(mockObj, 'handleKeyPress');

    render(
      <Input
        placeholder="type your name..."
        onKeyPress={mockObj.handleKeyPress}
      />
    );

    const inputElement = screen.getByPlaceholderText('type your name...');

    await userEvent.type(inputElement, 'w');

    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('does not call onChange when disabled', async () => {
    const spy = vi.spyOn(mockObj, 'handleChange');

    render(
      <Input
        placeholder="type your name..."
        onChange={mockObj.handleChange}
        disabled
      />
    );

    const inputElement = screen.getByPlaceholderText('type your name...');

    await userEvent.type(inputElement, 'Bob');

    expect(spy).not.toHaveBeenCalled();
  });
  it('adds prefix', () => {
    render(<Input prefixText="$" />);
    const prefixElement = screen.getByText('$');
    expect(prefixElement).toBeInTheDocument();
  });
  it('adds suffix', () => {
    render(<Input suffixText="dollars" />);
    const suffixElement = screen.getByText('dollars');
    expect(suffixElement).toBeInTheDocument();
  });
  it('shows feedback text when invalid', () => {
    render(<Input message="this field is required" error />);
    const feedbackElement = screen.getByText('this field is required');
    expect(feedbackElement).toBeInTheDocument();
  });
  it('does not show feedback text when valid', () => {
    render(<Input message="this field is required" error={false} />);
    const feedbackElement = screen.queryByText('this field is required');
    expect(feedbackElement).not.toBeInTheDocument();
  });
  it('applies max length', async () => {
    render(<Input placeholder="type your name..." maxLength={3} />);
    const inputElement = screen.getByPlaceholderText('type your name...');

    await userEvent.type(inputElement, 'test');

    expect(inputElement).toHaveValue('tes');
  });
});
