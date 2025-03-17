import { Meta, StoryObj } from '@storybook/react';
import { TooltipContainer, TooltipContainerProps } from './TooltipContainer';

export default {
  title: 'Components/TooltipContainer',
  component: TooltipContainer,
  tags: ['autodocs'],
  argTypes: {
    tooltipPosition: {
      options: ['bottom-start', 'bottom', 'bottom-end'],
      control: { type: 'select' },
    },
    tooltipClassName: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    content: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    content: <span>Alguma informação importante</span>,
    children: <span>Passe o mouse em cima de mim</span>,
    tooltipPosition: 'bottom',
  },
} as Meta<TooltipContainerProps>;

export const WithTooltipOnBottomCenter: StoryObj<TooltipContainerProps> = {};

export const WithTooltipOnBottomEnd: StoryObj<TooltipContainerProps> = {
  args: {
    tooltipPosition: 'bottom-end',
  },
};

export const WithTooltipOnBottomStart: StoryObj<TooltipContainerProps> = {
  args: {
    tooltipPosition: 'bottom-start',
  },
};
