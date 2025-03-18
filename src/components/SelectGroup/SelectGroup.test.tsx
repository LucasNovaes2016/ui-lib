import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { SelectGroup, Option } from '.';

// Mock Headless UI Transition
vi.mock('@headlessui/react', async () => {
  const actual = await vi.importActual('@headlessui/react');
  return {
    ...actual,
    Transition: ({ children }: { children: React.ReactNode }) => children,
  };
});

const mockObj = {
  handleChange: () => null,
};

const options = (
  <>
    <Option value="1">Option 1</Option>
    <Option value="2">Option 2</Option>
  </>
);

describe('SelectGroup', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders', () => {
    render(<SelectGroup>{options}</SelectGroup>);
    const selectButtonElement = screen.getByRole('button');
    expect(selectButtonElement).toBeInTheDocument();
  });

  it('renders default option', () => {
    render(<SelectGroup value="">{options}</SelectGroup>);
    const selectButtonTextElement = screen.getByText('Selecione...');
    expect(selectButtonTextElement).toBeInTheDocument();
  });

  it('Show options when clicked', async () => {
    render(
      <SelectGroup onChange={mockObj.handleChange}>{options}</SelectGroup>
    );

    const selectElementButton = screen.getByRole('button');

    await act(async () => {
      await userEvent.click(selectElementButton);
    });

    const firstOption = screen.getAllByText('Option 1')[0];
    const secondOption = screen.getAllByText('Option 2')[0];

    expect(firstOption).toBeInTheDocument();
    expect(secondOption).toBeInTheDocument();
  });

  it('calls onChange', async () => {
    const spy = vi.spyOn(mockObj, 'handleChange');

    render(
      <SelectGroup onChange={mockObj.handleChange}>{options}</SelectGroup>
    );

    const selectElementButton = screen.getByRole('button');

    await act(async () => {
      await userEvent.click(selectElementButton);
    });

    const firstOption = screen.getAllByText('Option 1')[0];

    await act(async () => {
      await userEvent.click(firstOption);
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith('1');
  });

  it('does not call onChange when disabled', async () => {
    const spy = vi.spyOn(mockObj, 'handleChange');

    render(
      <SelectGroup onChange={mockObj.handleChange} disabled>
        {options}
      </SelectGroup>
    );

    const selectElementButton = screen.getByRole('button');

    await act(async () => {
      await userEvent.click(selectElementButton);
    });

    const firstOption = screen.getAllByText('Option 1')[0];

    await act(async () => {
      await userEvent.click(firstOption);
    });

    expect(spy).not.toHaveBeenCalled();
  });

  it('shows title', () => {
    render(
      <SelectGroup message="this field is required" error title="Name">
        {options}
      </SelectGroup>
    );
    const labelElement = screen.getByText('Name');
    expect(labelElement).toBeInTheDocument();
  });

  it('shows feedback text when invalid', () => {
    render(
      <SelectGroup message="this field is required" error>
        {options}
      </SelectGroup>
    );
    const feedbackElement = screen.getByText('this field is required');
    expect(feedbackElement).toBeInTheDocument();
  });

  it('does not show feedback text when valid', () => {
    render(
      <SelectGroup message="this field is required" error={false}>
        {options}
      </SelectGroup>
    );
    const feedbackElement = screen.queryByText('this field is required');
    expect(feedbackElement).not.toBeInTheDocument();
  });
});
