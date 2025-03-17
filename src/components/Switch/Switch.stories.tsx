import { Meta, StoryObj } from '@storybook/react';
import { Switch, SwitchProps } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    value: {
      options: [true, false],
      control: { type: 'radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    description: {
      table: {
        disable: true,
      },
    },
    onToggle: {
      table: {
        value: true,
      },
    },
  },
  args: {
    value: true,
    disabled: false,
  },
} as Meta<SwitchProps>;

export const On: StoryObj<SwitchProps> = {};

export const Off: StoryObj<SwitchProps> = {
  args: {
    value: false,
  },
};

export const Disabled: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
  },
};
