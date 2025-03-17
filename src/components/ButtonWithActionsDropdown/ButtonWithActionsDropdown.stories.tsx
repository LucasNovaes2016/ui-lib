import { Meta, StoryObj } from '@storybook/react';
import {
  RiSettings3Line as RiSettings3LineIcon,
  RiDeleteBin6Line as RiDeleteBin6LineIcon,
  RiFileShield2Line as RiFileShield2LineIcon,
} from 'react-icons/ri';

import {
  ButtonWithActionsDropdown,
  ButtonWithActionsDropdownProps,
} from './ButtonWithActionsDropdown';

export default {
  title: 'Components/ButtonWithActionsDropdown',
  component: ButtonWithActionsDropdown,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    disabled: {
      options: [false, true],
      control: { type: 'radio' },
    },
    showDisabledSpinner: {
      options: [false, true],
      control: { type: 'radio' },
    },
    actions: {
      table: {
        disable: true,
      },
    },
    isFullWidth: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    color: 'primary',
    size: 'md',
    disabled: false,
    showDisabledSpinner: false,
    actions: [
      {
        label: 'Opção 1',
        onClick: () => null,
      },
      {
        label: 'Opção 2',
        onClick: () => null,
      },
      {
        label: 'Opção 3',
        onClick: () => null,
      },
    ],
  },
  decorators: [
    (Story) => <div className="flex justify-center py-[120px]">{Story()}</div>,
  ],
} as Meta<ButtonWithActionsDropdownProps>;

export const Default: StoryObj<ButtonWithActionsDropdownProps> = {};

export const Secondary: StoryObj<ButtonWithActionsDropdownProps> = {
  args: {
    color: 'secondary',
  },
};

export const Small: StoryObj<ButtonWithActionsDropdownProps> = {
  args: {
    size: 'sm',
  },
};

export const Disabled: StoryObj<ButtonWithActionsDropdownProps> = {
  args: {
    disabled: true,
  },
};

export const WithDisabledSpinner: StoryObj<ButtonWithActionsDropdownProps> = {
  args: {
    disabled: true,
    showDisabledSpinner: true,
  },
};

export const WithIconOnSecondaryActions: StoryObj<ButtonWithActionsDropdownProps> =
  {
    args: {
      actions: [
        {
          icon: <RiSettings3LineIcon />,
          label: 'Opção 1',
          onClick: () => null,
        },
        {
          icon: <RiDeleteBin6LineIcon />,
          label: 'Opção 2',
          onClick: () => null,
        },
        {
          icon: <RiFileShield2LineIcon />,
          label: 'Opção 3',
          onClick: () => null,
        },
      ],
    },
  };
