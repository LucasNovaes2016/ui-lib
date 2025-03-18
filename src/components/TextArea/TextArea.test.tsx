import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';

import { TextArea } from './TextArea';

const mockObj = {
  handleChange: () => null,
};

describe('TextArea', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders', () => {
    render(<TextArea />);
    const textAreaElement = screen.getByRole('textbox');
    expect(textAreaElement).toBeInTheDocument();
  });

  it('displays initial value', () => {
    render(<TextArea value="hello world" onChange={mockObj.handleChange} />);
    const textAreaElement = screen.getByDisplayValue('hello world');
    expect(textAreaElement).toBeInTheDocument();
  });
  it('adds id', () => {
    render(<TextArea id="textarea-test" placeholder="type some text" />);
    const textAreaElement = screen.getByPlaceholderText('type some text');
    expect(textAreaElement).toHaveAttribute('id', 'textarea-test');
  });
  it('adds placeholder', () => {
    render(<TextArea placeholder="type some text" />);
    const textAreaElement = screen.getByPlaceholderText('type some text');
    expect(textAreaElement).toBeInTheDocument();
  });
  it('adds name', () => {
    const { container } = render(<TextArea name="textearea-test" />);
    const textAreaElement = container.querySelector(
      'textarea[name="textearea-test"]'
    );
    expect(textAreaElement).toBeInTheDocument();
  });
  it('calls onChange', async () => {
    const spy = vi.spyOn(mockObj, 'handleChange');

    render(
      <TextArea
        placeholder="type some text..."
        onChange={mockObj.handleChange}
      />
    );

    const textAreaElement = screen.getByPlaceholderText('type some text...');

    await userEvent.type(textAreaElement, 'hello');

    expect(spy).toHaveBeenCalledTimes(5);
    expect(spy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'hello' }),
      })
    );
  });

  it('does not call onChange when read only', async () => {
    const spy = vi.spyOn(mockObj, 'handleChange');

    render(
      <TextArea
        placeholder="type some text..."
        onChange={mockObj.handleChange}
        readOnly
      />
    );

    const textAreaElement = screen.getByPlaceholderText('type some text...');

    await userEvent.type(textAreaElement, 'hello world');

    expect(spy).not.toHaveBeenCalled();
  });
  it('shows feedback text when invalid', () => {
    render(<TextArea message="this field is required" error />);
    const feedbackElement = screen.getByText('this field is required');
    expect(feedbackElement).toBeInTheDocument();
  });
  it('does not show feedback text when valid', () => {
    render(<TextArea message="this field is required" error={false} />);
    const feedbackElement = screen.queryByText('this field is required');
    expect(feedbackElement).not.toBeInTheDocument();
  });
});
