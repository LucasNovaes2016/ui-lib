import { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, Radio, RadioGroupProps } from '../RadioGroup';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
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
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    infoElement: {
      table: {
        disable: true,
      },
    },
    infoElementPosition: {
      table: {
        disable: true,
      },
    },
    onInfoClick: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: '',
    value: 'yes',
    disabled: false,
    error: false,
    message: '',
    children: (
      <div className="flex gap-x-4">
        <Radio value="yes" label="Sim" />
        <Radio value="no" label="Não" />
        <Radio value="maybe" label="Talvez" />
      </div>
    ),
  },
} as Meta<RadioGroupProps>;

export const Default: StoryObj<RadioGroupProps> = {};

export const Large: StoryObj<RadioGroupProps> = {
  args: {
    children: (
      <div className="flex gap-x-4">
        <Radio value="yes" label="Sim" size="lg" />
        <Radio value="no" label="Não" size="lg" />
        <Radio value="maybe" label="Talvez" size="lg" />
      </div>
    ),
  },
};

export const Vertical: StoryObj<RadioGroupProps> = {
  args: {
    children: (
      <div className="flex flex-col gap-y-2">
        <Radio value="yes" label="Sim" />
        <Radio value="no" label="Não" />
        <Radio value="maybe" label="Talvez" />
      </div>
    ),
  },
};

export const Disabled: StoryObj<RadioGroupProps> = {
  args: {
    disabled: true,
  },
};

export const Invalid: StoryObj<RadioGroupProps> = {
  args: {
    value: '',
    error: true,
    message: 'Escolha uma opção',
  },
};

export const WithTitle: StoryObj<RadioGroupProps> = {
  args: {
    title: 'Vai para a reunião?',
  },
};

export const WithTitleTooltip: StoryObj<RadioGroupProps> = {
  args: {
    title: 'Vai para a reunião?',
    infoElement: <span>Escolha uma das opções</span>,
  },
};
