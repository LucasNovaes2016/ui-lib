import { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps } from '../Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      options: ['success', 'error', 'notification'],
      control: { type: 'select' },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: 'Item movido',
    content: 'O item foi movido para a lista',
    severity: 'notification',
    onClose: () => null,
  },
  decorators: [(Story) => <div className="max-w-[296px]">{Story()}</div>],
} as Meta<ToastProps>;

export const Success: StoryObj<ToastProps> = {
  args: {
    severity: 'success',
    title: 'Sucesso',
    content: 'O item foi movido para a lista com sucesso',
  },
};
export const Error: StoryObj<ToastProps> = {
  args: {
    severity: 'error',
    title: 'Erro',
    content: 'Não foi possível mover o item para a lista',
  },
};
export const Notification: StoryObj<ToastProps> = {
  args: {
    severity: 'notification',
  },
};
