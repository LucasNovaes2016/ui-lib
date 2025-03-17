import { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: 'radio' },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    defaultChecked: {
      table: {
        disable: true,
      },
    },
    onSpaceBarKeyDown: {
      table: {
        disable: true,
      },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
  args: {
    size: 'sm',
    value: false,
    disabled: false,
    title: '',
    description: '',
  },
} as Meta<CheckboxGroupProps>;

export const Unchecked: StoryObj<CheckboxGroupProps> = {};

export const Checked: StoryObj<CheckboxGroupProps> = {
  args: {
    checked: true,
  },
};

export const Large: StoryObj<CheckboxGroupProps> = {
  args: {
    size: 'lg',
  },
};

export const Disabled: StoryObj<CheckboxGroupProps> = {
  args: {
    disabled: true,
  },
};

export const WithTitle: StoryObj<CheckboxGroupProps> = {
  args: {
    title: 'Título',
  },
};

export const WithTitleAndDescription: StoryObj<CheckboxGroupProps> = {
  args: {
    title: 'Título',
    description: 'Descrição sobre estao opção',
  },
};
