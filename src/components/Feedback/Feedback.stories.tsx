import { Meta, StoryObj } from '@storybook/react';
import { Feedback, FeedbackProps } from './Feedback';

export default {
  title: 'Components/Feedback',
  component: Feedback,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      options: ['error', 'info', 'warning', 'success'],
      control: { type: 'select' },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    severity: 'success',
    title: 'Sucesso',
    content: 'Ação realizada com sucesso',
    hideCloseButton: false,
    removeBackgroundColor: true,
    fillIcon: false,
  },
  decorators: [(Story) => <div className="shadow-md w-96">{Story()}</div>],
} as Meta<FeedbackProps>;

export const Default: StoryObj<FeedbackProps> = {};

export const Info: StoryObj<FeedbackProps> = {
  args: {
    severity: 'info',
    title: 'Atenção',
    content: 'Texto informativo complementar',
  },
};

export const Warning: StoryObj<FeedbackProps> = {
  args: {
    severity: 'warning',
    title: 'Atenção',
    content: 'Texto informativo complementar',
  },
};

export const Error: StoryObj<FeedbackProps> = {
  args: {
    severity: 'error',
    title: 'Erro',
    content: 'Não foi possível realizar esta ação',
  },
};

export const WithIconFilled: StoryObj<FeedbackProps> = {
  args: {
    severity: 'error',
    title: 'Erro',
    content: 'Não foi possível realizar esta ação',
    fillIcon: true,
  },
};

export const WithBackgroundColor: StoryObj<FeedbackProps> = {
  args: {
    severity: 'error',
    title: 'Erro',
    content: 'Não foi possível realizar esta ação',
    removeBackgroundColor: false,
  },
};
