import { Meta, StoryObj } from '@storybook/react';
import { TextAreaGroup, TextAreaGroupProps } from './TextAreaGroup';

export default {
  title: 'Components/TextAreaGroup',
  component: TextAreaGroup,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    id: {
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
    defaultValue: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    size: 'sm',
    title: 'Comentário',
    placeholder: 'Escreva um comentário',
    type: 'text',
    disabled: false,
    error: false,
  },
} as Meta<TextAreaGroupProps>;

export const Default: StoryObj<TextAreaGroupProps> = {};

export const Medium: StoryObj<TextAreaGroupProps> = {
  args: {
    size: 'md',
  },
};

export const Invalid: StoryObj<TextAreaGroupProps> = {
  args: {
    error: true,
    message: 'Campo inválido',
  },
};

export const WithTitleTooltip: StoryObj<TextAreaGroupProps> = {
  args: {
    infoElement: <span>Mensagem Auxiliar</span>,
  },
};
