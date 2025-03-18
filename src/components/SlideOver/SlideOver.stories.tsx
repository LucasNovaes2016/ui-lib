import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import {
  SlideOver,
  SlideOverProps,
  SlideOverContent,
  SlideOverActions,
} from './';

type StorybookExclusiveProps = {
  withoutFooter: boolean;
};

export default {
  title: 'Components/SlideOver',
  component: SlideOver,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'lg'],
      control: { type: 'radio' },
    },
    children: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
      },
    },
    onToggle: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: 'Informações',
    color: 'primary',
    size: 'sm',
    open: true,
    withoutFooter: false,
    onToggle: () => null,
  },
  decorators: [
    (Story, options) => {
      const { title, color, size, open, withoutFooter, onToggle } =
        options.args;

      return (
        <Story
          args={{
            title,
            color,
            size,
            open,
            onToggle,
            children: (
              <>
                <SlideOverContent>
                  <div className="space-y-4">
                    <p>Conteúdo dinâmico...</p>
                    <p>Conteúdo dinâmico 2...</p>
                    <p>Conteúdo dinâmico 3...</p>
                    <p>Conteúdo dinâmico 4...</p>
                    <p>Conteúdo dinâmico 5...</p>
                  </div>
                </SlideOverContent>
                {!withoutFooter && (
                  <SlideOverActions>
                    <div className="flex w-full justify-between">
                      <Button type="button" color="secondary">
                        Ação 3
                      </Button>
                      <div className="flex space-x-2">
                        <Button type="reset" color="secondary">
                          Ação 2
                        </Button>
                        <Button type="submit" color="primary">
                          Ação 1
                        </Button>
                      </div>
                    </div>
                  </SlideOverActions>
                )}
              </>
            ),
          }}
        />
      );
    },
  ],
} as Meta<SlideOverProps & StorybookExclusiveProps>;

export const Default: StoryObj<SlideOverProps> = {};

export const Secondary: StoryObj<SlideOverProps> = {
  args: {
    color: 'secondary',
  },
};

export const Large: StoryObj<SlideOverProps> = {
  args: {
    size: 'lg',
  },
};

export const WithoutFooter: StoryObj<SlideOverProps & StorybookExclusiveProps> =
  {
    args: {
      withoutFooter: true,
    },
  };
