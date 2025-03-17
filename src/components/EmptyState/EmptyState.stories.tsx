import { Meta, StoryObj } from '@storybook/react';
import { RiFileListLine as RiFileListLineIcon } from 'react-icons/ri';
import { EmptyState, EmptyStateProps } from './EmptyState';

export default {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    type: {
      options: ['empty', 'error', 'resolved'],
      control: { type: 'radio' },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    primaryAction: {
      table: {
        disable: true,
      },
    },
    secondaryAction: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: 'Nada para mostrar',
    description: 'A lista de items está vazia',
    size: 'md',
    type: 'empty',
  },
  decorators: [(Story) => <div className="my-8">{Story()}</div>],
} as Meta<EmptyStateProps>;

export const Default: StoryObj<EmptyStateProps> = {};

export const Error: StoryObj<EmptyStateProps> = {
  args: {
    type: 'error',
    title: 'Que pena :(',
    description: 'Não foi possível carregar a lista de itens',
  },
};

export const Resolved: StoryObj<EmptyStateProps> = {
  args: {
    type: 'resolved',
    title: 'Muito bom!',
    description: 'Não há mais items para serem analisados',
  },
};

export const WithCustomIcon: StoryObj<EmptyStateProps> = {
  args: {
    icon: <RiFileListLineIcon />,
  },
};

export const ExtraSmall: StoryObj<EmptyStateProps> = {
  args: {
    size: 'xs',
  },
};

export const Small: StoryObj<EmptyStateProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<EmptyStateProps> = {
  args: {
    size: 'lg',
  },
};

export const WithActions: StoryObj<EmptyStateProps> = {
  args: {
    primaryAction: { children: 'Adicionar item' },
    secondaryAction: { children: 'Cancelar', color: 'secondary' },
  },
};
