import { Meta, StoryObj } from '@storybook/react';
import { RiArrowRightFill as RiArrowRightFillIcon } from 'react-icons/ri';
import { Banner, BannerProps } from './Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['gray', 'yellow', 'green', 'red'],
      control: { type: 'select' },
    },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    actionButtonsPosition: {
      options: ['right', 'bottom'],
      control: { type: 'radio' },
    },
    primaryActionColor: {
      options: [
        'primary',
        'secondary',
        'danger',
        'positiveghost',
        'negativeghost',
      ],
      control: { type: 'select' },
    },
    secondaryActionColor: {
      options: [
        'primary',
        'secondary',
        'danger',
        'positiveghost',
        'negativeghost',
      ],
      control: { type: 'select' },
    },
    onPrimaryActionClick: {
      table: {
        disable: true,
      },
    },
    onSecondaryActionClick: {
      table: {
        disable: true,
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title:
      'Será enviado o link para criação de senha para o endereço de e-mail do usuário.',
    icon: undefined,
    color: 'gray',
    variant: 'filled',
    primaryActionText: '',
    primaryActionColor: 'primary',
    secondaryActionText: '',
    secondaryActionColor: 'secondary',
    onPrimaryActionClick: undefined,
    onSecondaryActionClick: undefined,
    onClose: undefined,
  },
} as Meta<BannerProps>;

export const Gray: StoryObj<BannerProps> = {};

export const Yellow: StoryObj<BannerProps> = {
  args: {
    color: 'yellow',
  },
};

export const Green: StoryObj<BannerProps> = {
  args: {
    color: 'green',
  },
};

export const Red: StoryObj<BannerProps> = {
  args: {
    color: 'red',
  },
};

export const Outlined: StoryObj<BannerProps> = {
  args: {
    variant: 'outlined',
  },
};

export const WithRandomIcon: StoryObj<BannerProps> = {
  args: {
    icon: <RiArrowRightFillIcon />,
  },
};

export const WithCloseButton: StoryObj<BannerProps> = {
  args: {
    onClose: () => null,
  },
};

export const WithActionButtonsOnTheRight: StoryObj<BannerProps> = {
  args: {
    onClose: () => null,
    primaryActionText: 'Primário',
    onPrimaryActionClick: () => null,
    secondaryActionText: 'Secundário',
    onSecondaryActionClick: () => null,
  },
};

export const WithActionButtonsOnTheBottom: StoryObj<BannerProps> = {
  args: {
    onClose: () => null,
    actionButtonsPosition: 'bottom',
    primaryActionText: 'Primário',
    onPrimaryActionClick: () => null,
    secondaryActionText: 'Secundário',
    onSecondaryActionClick: () => null,
  },
};
