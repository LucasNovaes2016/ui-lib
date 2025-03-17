import { Meta, StoryObj } from '@storybook/react';
import { InputGroup, InputGroupProps } from './InputGroup';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'number', 'date'],
      control: { type: 'select' },
    },
    onKeyPress: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onFocus: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    widthClass: {
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
    title: 'Nome',
    placeholder: 'Digite seu nome',
    type: 'text',
    disabled: false,
    error: false,
  },
} as Meta<InputGroupProps>;

export const Default: StoryObj<InputGroupProps> = {};

export const Medium: StoryObj<InputGroupProps> = {
  args: {
    size: 'md',
  },
};

export const Invalid: StoryObj<InputGroupProps> = {
  args: {
    error: true,
    message: 'Campo inválido',
  },
};

export const Disabled: StoryObj<InputGroupProps> = {
  args: {
    disabled: true,
  },
};

export const WithTitleTooltip: StoryObj<InputGroupProps> = {
  args: {
    infoElement: <span>Mensagem Auxiliar</span>,
  },
};

export const WithMaxLength: StoryObj<InputGroupProps> = {
  args: {
    placeholder: 'Digite no máximo 10 caracteres',
    maxLength: 10,
  },
};

export const WithNumberType: StoryObj<InputGroupProps> = {
  args: {
    title: 'Ano de nascimento',
    placeholder: 'Exemplo: 1995',
    type: 'number',
  },
};

export const WithDateType: StoryObj<InputGroupProps> = {
  args: {
    title: 'Data de nascimento',
    placeholder: 'Exemplo:  01/01/2001',
    type: 'date',
  },
};

export const WithPrefixText: StoryObj<InputGroupProps> = {
  args: {
    title: 'Preço',
    type: 'number',
    prefixText: 'R$',
    placeholder: 'Valor em reais',
  },
};

export const WithSuffixText: StoryObj<InputGroupProps> = {
  args: {
    title: 'Tempo',
    type: 'number',
    suffixText: 'dias',
    placeholder: 'Quantidade de dias',
  },
};

export const WithPrefixAndSuffixText: StoryObj<InputGroupProps> = {
  args: {
    title: 'Preço',
    placeholder: '',
    type: 'number',
    prefixText: 'U$$',
    suffixText: 'dólares',
  },
};
