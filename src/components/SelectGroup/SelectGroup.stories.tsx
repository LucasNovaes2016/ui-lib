import { Meta, StoryObj } from '@storybook/react';
import { SelectGroup, SelectGroupProps } from './SelectGroup';
import { Option } from './Option';

export default {
  title: 'Components/SelectGroup',
  component: SelectGroup,
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
    placeholder: {
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
    title: 'Fruta favorita',
    placeholder: 'Selecione...',
    size: 'sm',
    value: '',
    disabled: false,
    error: false,
    children: (
      <>
        <Option value="ABA">Abacaxi</Option>
        <Option value="BAN">Banana</Option>
        <Option value="LAR">Laranja</Option>
      </>
    ),
  },
} as Meta<SelectGroupProps>;

export const Default: StoryObj<SelectGroupProps> = {};

export const Medium: StoryObj<SelectGroupProps> = {
  args: {
    size: 'md',
  },
};

export const isLoading: StoryObj<SelectGroupProps> = {
  args: {
    isLoading: true,
  },
};

export const Invalid: StoryObj<SelectGroupProps> = {
  args: {
    error: true,
    message: 'Campo inválido',
  },
};

export const Disabled: StoryObj<SelectGroupProps> = {
  args: {
    disabled: true,
  },
};

export const WithTitleTooltip: StoryObj<SelectGroupProps> = {
  args: {
    infoElement: <span>Mensagem Auxiliar</span>,
  },
};

export const WithOptionsScrollbar: StoryObj<SelectGroupProps> = {
  args: {
    children: (
      <>
        <Option value="AC">Acre</Option>
        <Option value="AL">Alagoas</Option>
        <Option value="AP">Amapá</Option>
        <Option value="AM">Amazonas</Option>
        <Option value="BA">Bahia</Option>
        <Option value="CE">Ceará</Option>
        <Option value="DF">Distrito Federal</Option>
        <Option value="ES">Espírito Santo</Option>
        <Option value="GO">Goiás</Option>
        <Option value="MA">Maranhão</Option>
        <Option value="MT">Mato Grosso</Option>
        <Option value="MS">Mato Grosso do Sul</Option>
        <Option value="MG">Minas Gerais</Option>
        <Option value="PA">Pará</Option>
        <Option value="PB">Paraíba</Option>
        <Option value="PR">Paraná</Option>
        <Option value="PE">Pernambuco</Option>
        <Option value="PI">Piauí</Option>
        <Option value="RJ">Rio de Janeiro</Option>
        <Option value="RN">Rio Grande do Norte</Option>
        <Option value="RS">Rio Grande do Sul</Option>
        <Option value="RO">Rondônia</Option>
        <Option value="RR">Roraima</Option>
        <Option value="SC">Santa Catarina</Option>
        <Option value="SP">São Paulo</Option>
        <Option value="SE">Sergipe</Option>
        <Option value="TO">Tocantins</Option>
        <Option value="EX">Estrangeiro</Option>
      </>
    ),
  },
};

export const WithoutTitle: StoryObj<SelectGroupProps> = {
  args: {
    title: '',
  },
};
