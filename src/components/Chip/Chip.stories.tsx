import { Meta, StoryObj } from '@storybook/react';
import { Chip, ChipProps } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    isLoading: {
      options: [true, false],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    className: {
      table: {
        disable: true,
      },
    },
    onAdd: {
      table: {
        disable: true,
      },
    },
    onRemove: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Operação',
    color: 'purple',
    size: 'sm',
    onAdd: () => null,
    onDelete: null,
  },
} as Meta<ChipProps>;

export const Small: StoryObj<ChipProps> = {};

export const Medium: StoryObj<ChipProps> = {
  args: {
    size: 'md',
  },
};

export const isLoading: StoryObj<ChipProps> = {
  args: {
    isLoading: true,
  },
};

export const WithAddIcon: StoryObj<ChipProps> = {
  args: {
    onAdd: () => null,
  },
};

export const WithRemoveIcon: StoryObj<ChipProps> = {
  args: {
    onDelete: () => null,
  },
};

export const Disabled: StoryObj<ChipProps> = {
  args: {
    disabled: true,
  },
};
