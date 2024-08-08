import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxTabsModule } from 'devextreme-angular';
import { Tab } from '../../lib/directives/me-tabs/tabs.directive';
import { MeTabsDirective } from '../../public-api';

interface MeTabsProps {
  customClass: string;
  position: 'top' | 'bottom';
  size: 'small' | 'medium' | 'large';
  stylingMode: 'outside' | 'inside';
  tabsData: Tab[];
}

const meta: Meta<MeTabsProps> = {
  title: 'Components/Tabs(RC)',
  component: MeTabsDirective,
  // tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MeTabsDirective],
      imports: [DxTabsModule],
    }),
  ],
  render: (args: MeTabsProps) => ({
    props: args,
    template: `
      <dx-tabs
        meTabs
        [customClass]="customClass"
        [position]="position"
        [size]="size"
        [stylingMode]="stylingMode"
        [dataSource]="tabsData"
        [selectedIndex]="0"
      ></dx-tabs>
    `,
  }),
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    stylingMode: {
      options: ['outside', 'inside'],
      control: { type: 'radio' },
    },
    customClass: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<MeTabsProps>;

const defaultTabsData: Tab[] = [
  { id: 1, text: 'Tab 1' },
  { id: 2, text: 'Tab 2' },
  { id: 3, text: 'Tab 3' },
];

export const Default: Story = {
  args: {
    position: 'top',
    size: 'medium',
    stylingMode: 'outside',
    customClass: '',
    tabsData: defaultTabsData,
  },
};

export const BottomPosition: Story = {
  args: {
    ...Default.args,
    position: 'bottom',
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const InsideStylingMode: Story = {
  args: {
    ...Default.args,
    stylingMode: 'inside',
  },
};

export const WithCustomClass: Story = {
  args: {
    ...Default.args,
    customClass: 'my-custom-tabs-class',
  },
};

export const WithIcons: Story = {
  args: {
    ...Default.args,
    tabsData: [
      { id: 1, text: 'Tab 1', icon: 'user' },
      { id: 2, text: 'Tab 2', icon: 'email' },
      { id: 3, text: 'Tab 3', icon: 'chart' },
    ],
  },
};
