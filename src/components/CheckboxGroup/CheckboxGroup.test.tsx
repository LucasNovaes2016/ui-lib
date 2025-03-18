import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { CheckboxGroup } from '.';

const mockObj = {
  handleChange: () => null,
};

describe('CheckboxGroup', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders', () => {
    render(<CheckboxGroup checked />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  it('renders label', () => {
    render(<CheckboxGroup checked title="Remember me" />);
    const checkboxElement = screen.getByLabelText('Remember me');
    expect(checkboxElement).toBeInTheDocument();
  });

  it('renders description', () => {
    render(
      <CheckboxGroup
        checked
        title="Remember me"
        description="This option will make the app remember your password"
      />
    );
    const checkboxDescriptionElement = screen.getByText(
      'This option will make the app remember your password'
    );
    expect(checkboxDescriptionElement).toBeInTheDocument();
  });

  it('calls onChange', async () => {
    const spy = vi.spyOn(mockObj, 'handleChange');

    render(
      <CheckboxGroup
        checked
        title="Remember me"
        onChange={mockObj.handleChange}
      />
    );

    const checkboxElement = screen.getByLabelText('Remember me');

    await act(async () => {
      await userEvent.click(checkboxElement);
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('calls onChange with label element', async () => {
    const spy = vi.spyOn(mockObj, 'handleChange');

    render(
      <CheckboxGroup
        checked
        title={
          <div>
            <span>Remember me</span>
          </div>
        }
        onChange={mockObj.handleChange}
      />
    );

    const checkboxElement = screen.getByLabelText('Remember me');

    await act(async () => {
      await userEvent.click(checkboxElement);
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('does not call onChange when disabled', async () => {
    const spy = vi.spyOn(mockObj, 'handleChange');

    render(
      <CheckboxGroup
        checked
        title="Remember me"
        onChange={mockObj.handleChange}
        disabled
      />
    );

    const checkboxElement = screen.getByLabelText('Remember me');

    await act(async () => {
      await userEvent.click(checkboxElement);
    });

    expect(spy).not.toHaveBeenCalled();
  });
});
