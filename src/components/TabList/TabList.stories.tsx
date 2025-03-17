import {
  RiCarFill,
  RiTruckFill,
  RiBusFill,
  RiSailboatFill,
} from 'react-icons/ri';

import { Meta, StoryObj } from '@storybook/react';

import {
  TabList,
  TabListItem,
  TabListProps,
  TabListProvider,
} from '../TabList';

export default {
  title: 'Components/TabList',
  component: TabList,
  tags: ['autodocs'],
  argTypes: {
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
    label: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    border: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    value: 'car',
    children: (
      <>
        <TabListItem icon={<RiCarFill />} value="car">
          Carros
        </TabListItem>
        <TabListItem icon={<RiTruckFill />} value="truck">
          Caminhões
        </TabListItem>
        <TabListItem icon={<RiBusFill />} value="bus">
          Ônibus
        </TabListItem>
        <TabListItem icon={<RiSailboatFill />} value="boat">
          Barcos
        </TabListItem>
      </>
    ),
  },
  decorators: [(Story) => <TabListProvider>{Story()}</TabListProvider>],
} as Meta<TabListProps>;

export const Default: StoryObj<TabListProps> = {};

export const WithTabInfo: StoryObj<TabListProps> = {
  args: {
    children: (
      <>
        <TabListItem icon={<RiCarFill />} value="car" infoNumber={3}>
          Carros
        </TabListItem>
        <TabListItem icon={<RiTruckFill />} value="truck" infoNumber={12}>
          Caminhões
        </TabListItem>
        <TabListItem icon={<RiBusFill />} value="bus" infoNumber={2}>
          Ônibus
        </TabListItem>
        <TabListItem icon={<RiSailboatFill />} value="boat" infoNumber={5}>
          Barcos
        </TabListItem>
      </>
    ),
  },
};
