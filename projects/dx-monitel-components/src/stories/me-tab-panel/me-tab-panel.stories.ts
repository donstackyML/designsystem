import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxTabPanelModule } from 'devextreme-angular';
import { MeTabPanelDirective } from "../../public-api";

interface TabItem {
  id: number;
  title: string;
  content: string;
  icon?: string;
}

interface MeTabPanelProps {
  customClass: string;
  selectedIndex: number;
  animationEnabled: boolean;
  swipeEnabled: boolean;
  position: 'top' | 'bottom';
  size: 'small' | 'medium' | 'large';
  stylingMode: 'inside' | 'outside';
  orientation: 'horizontal' | 'vertical';
  iconPosition: 'top' | 'start' | 'end' | 'bottom';
  showNavButtons: boolean;
  scrollByContent: boolean;
  rtlEnabled: boolean;
  width: string | number;
  tabPanelData: TabItem[];
}

const meta: Meta<MeTabPanelProps> = {
  title: 'Components/TabPanel',
  component: MeTabPanelDirective,
  decorators: [
    moduleMetadata({
      declarations: [MeTabPanelDirective],
      imports: [DxTabPanelModule],
    }),
  ],
  render: (args: MeTabPanelProps) => ({
    props: args,
    template: `
      <dx-tab-panel
        meTabPanel
        [customClass]="customClass"
        [selectedIndex]="selectedIndex"
        [animationEnabled]="animationEnabled"
        [swipeEnabled]="swipeEnabled"
        [dataSource]="tabPanelData"
        [height]="300"
        [orientation]="orientation"
        [stylingMode]="stylingMode"
        [iconPosition]="iconPosition"
        [showNavButtons]="showNavButtons"
        [scrollByContent]="scrollByContent"
        [rtlEnabled]="rtlEnabled"
        [width]="width"
      >
      </dx-tab-panel>
    `,
  }),
  argTypes: {
    customClass: { control: 'text' },
    selectedIndex: { control: 'number' },
    animationEnabled: { control: 'boolean' },
    swipeEnabled: { control: 'boolean' },
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
    showNavButtons: { control: 'boolean' },
    scrollByContent: { control: 'boolean' },
    rtlEnabled: { control: 'boolean' },
    width: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<MeTabPanelProps>;

const defaultTabPanelData: TabItem[] = [
  { id: 1, title: 'Tab 1', content: 'Content of Tab 1', icon: 'user' },
  { id: 2, title: 'Tab 2', content: 'Content of Tab 2', icon: 'email' },
  { id: 3, title: 'Tab 3', content: 'Content of Tab 3', icon: 'chart' },
];

export const Default: Story = {
  args: {
    customClass: '',
    selectedIndex: 0,
    animationEnabled: true,
    swipeEnabled: true,
    position: 'top',
    size: 'medium',
    stylingMode: 'inside',
    orientation: 'horizontal',
    iconPosition: 'start',
    showNavButtons: false,
    scrollByContent: false,
    rtlEnabled: false,
    width: 'auto',
    tabPanelData: defaultTabPanelData,
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
    tabPanelData: [
      ...defaultTabPanelData,
      { id: 4, title: 'Tab 4', content: 'Content of Tab 4', icon: 'home' },
      { id: 5, title: 'Tab 5', content: 'Content of Tab 5', icon: 'event' },
    ],
  },
};

export const OutsideStylingMode: Story = {
  args: {
    ...Default.args,
    stylingMode: 'outside',
  },
};

export const DifferentIconPositions: Story = {
  args: {
    ...Default.args,
    iconPosition: 'top',
  },
};

export const RightToLeft: Story = {
  args: {
    ...Default.args,
    rtlEnabled: true,
  },
};
