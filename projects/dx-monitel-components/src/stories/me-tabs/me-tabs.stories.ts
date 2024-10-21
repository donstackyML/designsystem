import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxTabsModule } from 'devextreme-angular';
import { Tab } from '../../lib/directives/me-tabs/tabs.directive';
import { MeTabsDirective } from '../../public-api';

interface MeTabsProps {
  customClass: string;
  position: 'top' | 'bottom';
  size: 'small' | 'medium' | 'large';
  stylingMode: 'inside' | 'outside';
  orientation: 'horizontal' | 'vertical';
  iconPosition: 'top' | 'start' | 'end' | 'bottom';
  showNavButtons: boolean;
  scrollByContent: boolean;
  width: string | number;
  tabsData: Tab[];
  rtlEnabled: boolean;
  hoverStateEnabled: boolean;
}

const meta: Meta<MeTabsProps> = {
  title: 'Components/Tabs',
  component: MeTabsDirective,
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
        [position]="position"
        [size]="size"
        [stylingMode]="stylingMode"
        [orientation]="orientation"
        [iconPosition]="iconPosition"
        [showNavButtons]="showNavButtons"
        [scrollByContent]="scrollByContent"
        [width]="width"
        [dataSource]="tabsData"
        [selectedIndex]="0"
        [rtlEnabled]="false"
      ></dx-tabs>
    `,
  }),
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    stylingMode: {
      options: ['inside', 'outside'],
      control: { type: 'select' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['top', 'start', 'end', 'bottom'],
      control: { type: 'select' },
    },
    showNavButtons: {
      control: 'boolean',
    },
    scrollByContent: {
      control: 'boolean',
    },
    width: {
      control: 'text',
    },
    rtlEnabled: {
      control: 'boolean',
    },
    hoverStateEnabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<MeTabsProps>;

const defaultTabsData: Tab[] = [
  { id: 1, text: 'Tab 1', icon: 'user' },
  { id: 2, text: 'Tab 2', icon: 'email' },
  { id: 3, text: 'Tab 3', icon: 'chart' },
];

export const Default: Story = {
  args: {
    position: 'top',
    size: 'medium',
    stylingMode: 'inside',
    orientation: 'horizontal',
    iconPosition: 'start',
    showNavButtons: false,
    scrollByContent: false,
    width: 'auto',
    customClass: '',
    tabsData: defaultTabsData,
    rtlEnabled: false,
    hoverStateEnabled: true,
  },
};

export const VerticalOrientation: Story = {
  args: {
    ...Default.args,
    orientation: 'vertical',
  },
};

export const WithNavButtons: Story = {
  args: {
    ...Default.args,
    showNavButtons: true,
    width: '300px',
    tabsData: [
      { id: 1, text: 'Tab 1', icon: 'user' },
      { id: 2, text: 'Tab 2', icon: 'email' },
      { id: 3, text: 'Tab 3', icon: 'chart' },
      { id: 4, text: 'Tab 4', icon: 'home' },
      { id: 5, text: 'Tab 5', icon: 'event' },
    ],
  },
};

export const ScrollByContent: Story = {
  args: {
    ...Default.args,
    scrollByContent: true,
    width: '300px',
    tabsData: [
      { id: 1, text: 'Tab 1', icon: 'user' },
      { id: 2, text: 'Tab 2', icon: 'email' },
      { id: 3, text: 'Tab 3', icon: 'chart' },
      { id: 4, text: 'Tab 4', icon: 'home' },
      { id: 5, text: 'Tab 5', icon: 'event' },
    ],
  },
};

export const DifferentIconPositions: Story = {
  args: {
    ...Default.args,
    iconPosition: 'top',
  },
};

export const OutsideStylingMode: Story = {
  args: {
    ...Default.args,
    stylingMode: 'outside',
  },
};

export const RightToLeft: Story = {
  args: {
    ...Default.args,
    rtlEnabled: true,
  },
};
