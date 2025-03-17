import { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    color: {
      options: ['purple', 'gray', 'green', 'blue', 'yellow', 'orange', 'red'],
      control: { type: 'select' },
    },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
    },
    isStatus: {
      options: [true, false],
      control: { type: 'radio' },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Informativo',
    color: 'gray',
    size: 'sm',
    variant: 'filled',
    isStatus: false,
  },
} as Meta<BadgeProps>;

export const Small: StoryObj<BadgeProps> = {};

export const Medium: StoryObj<BadgeProps> = {
  args: {
    size: 'md',
  },
};

export const Purple: StoryObj<BadgeProps> = {
  args: {
    color: 'purple',
  },
};

export const Gray: StoryObj<BadgeProps> = {
  args: {
    color: 'gray',
  },
};

export const Green: StoryObj<BadgeProps> = {
  args: {
    color: 'green',
  },
};

export const Blue: StoryObj<BadgeProps> = {
  args: {
    color: 'blue',
  },
};

export const Yellow: StoryObj<BadgeProps> = {
  args: {
    color: 'yellow',
  },
};

export const Orange: StoryObj<BadgeProps> = {
  args: {
    color: 'orange',
  },
};

export const Red: StoryObj<BadgeProps> = {
  args: {
    color: 'red',
  },
};

export const IsStatus: StoryObj<BadgeProps> = {
  args: {
    children: 'Status',
    isStatus: true,
  },
};

export const Outlined: StoryObj<BadgeProps> = {
  args: {
    variant: 'outlined',
  },
};
