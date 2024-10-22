import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxTabPanelModule } from 'devextreme-angular';
import { MeTabPanelDirective } from '../../public-api';

interface TabPanelItem {
  title: string;
  icon: string;
  content: string;
}

interface MeTabPanelProps {
  dataSource: TabPanelItem[];
  size: 'small' | 'medium' | 'large';
  stylingMode: 'inside' | 'outside';
  tabsPosition: 'top' | 'bottom' | 'left' | 'right';
  iconPosition: 'left' | 'top';
  height: number | string;
  width: number | string;
  activeStateEnabled: boolean;
  focusStateEnabled: boolean;
  hoverStateEnabled: boolean;
  disabled: boolean;
  swipeEnabled: boolean;
  selectedIndex: number;
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
        [dataSource]="dataSource"
        [height]="height"
				[tabsPosition]="tabsPosition"
				[hoverStateEnabled]="hoverStateEnabled"
				[focusStateEnabled]="focusStateEnabled"
				[activeStateEnabled]="activeStateEnabled"
				[disabled]="disabled"
				[stylingMode]="stylingMode"
        [iconPosition]="iconPosition"
        [selectedIndex]="selectedIndex"
        [swipeEnabled]="swipeEnabled"
        [width]="width"
        [size]="size"
      >
        <div *dxTemplate="let item of 'item'">
          <div class="tabpanel-content">
            <p>{{item.content}}</p>
          </div>
        </div>
      </dx-tab-panel>
    `,
  }),
  argTypes: {
    iconPosition: {
      options: ['left', 'top'],
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
    width: { control: 'text' },
    height: { control: 'text' },
    tabsPosition: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
    },
    activeStateEnabled: { control: 'boolean' },
    focusStateEnabled: { control: 'boolean' },
    hoverStateEnabled: { control: 'boolean' },
    disabled: { control: 'boolean' },
    swipeEnabled: { control: 'boolean' },
    selectedIndex: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<MeTabPanelProps>;

const defaultTabPanelData: TabPanelItem[] = [
  {
    title: 'To Do',
    icon: 'user',
    content: 'This is the content for the To Do tab.',
  },
  {
    title: 'In Progress',
    icon: 'email',
    content: 'This is the content for the In Progress tab.',
  },
  {
    title: 'Done',
    icon: 'check',
    content: 'This is the content for the Done tab.',
  },
];

export const Default: Story = {
  args: {
    dataSource: defaultTabPanelData,
    size: 'medium',
    stylingMode: 'outside',
    tabsPosition: 'left',
    iconPosition: 'left',
    activeStateEnabled: true,
    focusStateEnabled: true,
    hoverStateEnabled: true,
    disabled: false,
    height: 246,
    width: 528,
    selectedIndex: 0,
    swipeEnabled: false,
  },
};

export const VerticalTabs: Story = {
  args: {
    ...Default.args,
    height: 300,
  },
};

export const DifferentIconPositions: Story = {
  args: {
    ...Default.args,
    iconPosition: 'top',
  },
};
