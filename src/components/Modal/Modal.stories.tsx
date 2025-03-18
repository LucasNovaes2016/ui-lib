import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import { Option, SelectGroup } from '../SelectGroup';
import { ButtonProps } from '../Button';
import {
  Modal,
  ModalProps,
  ModalActions,
  ModalActionsProps,
  ModalContent,
  ModalContentProps,
  ModalLoading,
} from './';

type ModalActionsAggregator = {
  secondaryActionText: string;
  secondaryActionColor: ButtonProps['color'];
  secondaryActionSize: ButtonProps['size'];
  primaryActionText: string;
  primaryActionColor: ButtonProps['color'];
  primaryActionSize: ButtonProps['size'];
  primaryActionType: ButtonProps['type'];
  onSecondaryActionClick: ButtonProps['onClick'];
  onPrimaryActionClick: ButtonProps['onClick'];
  disableActions: ModalActionsProps['disableActions'];
};

type ModalChildrenAggregator = {
  modalChildren: ReactNode;
  modalContentChildren: ReactNode;
};

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    show: {
      table: {
        disable: true,
      },
    },
    showCloseButton: {
      table: {
        disable: true,
      },
    },
    shouldCloseOnEsc: {
      table: {
        disable: true,
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
    title: {
      control: { type: 'text' },
    },
    titleIcon: {
      table: {
        disable: true,
      },
    },
    description: {
      control: { type: 'text' },
    },
    severity: {
      options: ['info', 'danger'],
      control: { type: 'select' },
    },
    primaryActionText: {
      control: { type: 'text' },
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
    primaryActionSize: {
      options: ['sm', 'md'],
      control: { type: 'select' },
    },
    primaryActionType: {
      table: {
        disable: true,
      },
    },
    secondaryActionText: {
      control: { type: 'text' },
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
    secondaryActionSize: {
      options: ['sm', 'md'],
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
    modalChildren: {
      table: {
        disable: true,
      },
    },
    modalContentChildren: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    modalChildren: null,
    size: 'md',
    show: true,
    showCloseButton: true,
    shouldCloseOnEsc: true,
    onClose: () => null,
    title: 'Informe a senha e o código',
    titleIcon: null,
    description:
      'Ao utilizar o código de recuperação, o método de autenticação por dois fatores foi desativado e precisa ser reconfigurado para próximos acessos',
    severity: 'info',
    modalContentChildren: null,
    secondaryActionText: 'Cancelar',
    secondaryActionColor: 'secondary',
    secondaryActionSize: 'sm',
    onSecondaryActionClick: () => null,
    primaryActionText: 'Enviar',
    primaryActionColor: 'primary',
    primaryActionSize: 'sm',
    primaryActionType: 'submit',
    onPrimaryActionClick: () => null,
    disableActions: false,
  },
  decorators: [
    (Story, options) => {
      const {
        modalChildren,
        size,
        show,
        showCloseButton,
        shouldCloseOnEsc,
        onClose,
        title,
        titleIcon,
        description,
        severity,
        modalContentChildren,
        secondaryActionText,
        secondaryActionColor,
        secondaryActionSize,
        primaryActionText,
        primaryActionColor,
        primaryActionSize,
        primaryActionType,
        onSecondaryActionClick,
        onPrimaryActionClick,
        disableActions,
      } = options.args;

      return (
        <Story
          args={{
            size,
            show,
            showCloseButton,
            shouldCloseOnEsc,
            onClose,
            children: modalChildren || (
              <>
                <ModalContent
                  severity={severity}
                  title={title}
                  titleIcon={titleIcon}
                  description={description}
                >
                  {modalContentChildren}
                </ModalContent>
                <ModalActions
                  primary={{
                    text: primaryActionText,
                    color: primaryActionColor,
                    size: primaryActionSize,
                    type: primaryActionType,
                    onClick: onPrimaryActionClick,
                  }}
                  secondary={{
                    text: secondaryActionText,
                    color: secondaryActionColor,
                    size: secondaryActionSize,
                    onClick: onSecondaryActionClick,
                  }}
                  disableActions={disableActions}
                />
              </>
            ),
          }}
        />
      );
    },
  ],
} as Meta<
  ModalProps &
    ModalContentProps &
    ModalActionsAggregator &
    ModalChildrenAggregator
>;

export const Default: StoryObj<ModalProps> = {};

export const Small: StoryObj<ModalProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<ModalProps> = {
  args: {
    size: 'lg',
  },
};

export const Info: StoryObj<ModalContentProps> = {
  args: {
    severity: 'info',
  },
};

export const Danger: StoryObj<ModalContentProps & ModalActionsAggregator> = {
  args: {
    severity: 'danger',
    primaryActionColor: 'danger',
  },
};

export const WithBodyContent: StoryObj<
  ModalProps & ModalContentProps & ModalChildrenAggregator
> = {
  args: {
    modalContentChildren: (
      <div className="flex flex-col gap-y-2">
        <SelectGroup title="Escolha uma opção">
          <Option value="OPT-1">Opção 1</Option>
          <Option value="OPT-2">Opção 2</Option>
        </SelectGroup>
      </div>
    ),
  },
};

export const WithLoadingContent: StoryObj<
  ModalProps & ModalContentProps & ModalChildrenAggregator
> = {
  args: {
    showCloseButton: false,
    modalChildren: (
      <ModalLoading
        title="Aguarde um instante..."
        description="Estamos buscando as informações da pesquisa"
      />
    ),
  },
};
