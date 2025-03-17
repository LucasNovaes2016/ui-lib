import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiDeleteBin6Line,
} from 'react-icons/ri';

import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'primary',
        'secondary',
        'danger',
        'positiveghost',
        'negativeghost',
      ],
      control: { type: 'select' },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Clique aqui',
    color: 'primary',
    size: 'md',
    type: 'button',
    uppercase: false,
    disabled: false,
    showDisabledSpinner: false,
    valid: true,
    title: 'Clique aqui',
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  parameters: { backgrounds: { default: 'dark' } },
  args: {
    color: 'secondary',
  },
};

export const Danger: StoryObj<ButtonProps> = {
  args: {
    color: 'danger',
  },
};

export const PositiveGhost: StoryObj<ButtonProps> = {
  args: {
    color: 'positiveghost',
  },
};

export const NegativeGhost: StoryObj<ButtonProps> = {
  parameters: { backgrounds: { default: 'dark' } },
  args: {
    color: 'negativeghost',
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
};

export const Uppercase: StoryObj<ButtonProps> = {
  args: {
    uppercase: true,
  },
};

export const DisabledWithoutSpinner: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const DisabledWithSpinner: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    showDisabledSpinner: true,
  },
};

export const WithLeftIcon: StoryObj<ButtonProps> = {
  args: {
    leftIcon: <RiArrowLeftLine />,
  },
};

export const WithRightIcon: StoryObj<ButtonProps> = {
  args: {
    rightIcon: <RiArrowRightLine />,
  },
};

export const WithJustIcon: StoryObj<ButtonProps> = {
  args: {
    children: <RiDeleteBin6Line className="size-4 text-white" />,
    color: 'danger',
  },
};

export const Invalid: StoryObj<ButtonProps> = {
  args: {
    valid: false,
  },
};
