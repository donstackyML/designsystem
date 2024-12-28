import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxTabPanelModule } from 'devextreme-angular';
import { MeTabPanelDirective } from '../../public-api';
import { homeX20, mailX20, publicX20 } from '@monitel/me-icons';
import { registry } from '../../../.storybook/preview';
interface TabPanelItem {
  title: string;
  icon: string;
  content: string;
}

const meta: Meta = {
  title: 'Components/TabPanel',
  component: MeTabPanelDirective,
  decorators: [
    moduleMetadata({
      declarations: [MeTabPanelDirective],
      imports: [DxTabPanelModule],
    }),
  ],
  render: (args) => ({
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
      options: ['bottom', 'top', 'start', 'end'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    styling: {
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

const defaultTabPanelData: TabPanelItem[] = [
  {
    title: 'To Do',
    icon: registry.getIcon(homeX20),
    content: 'This is the content for the To Do tab.',
  },
  {
    title: 'In Progress',
    icon: registry.getIcon(mailX20),
    content: 'This is the content for the In Progress tab.',
  },
  {
    title: 'Done',
    icon: registry.getIcon(publicX20),
    content: 'This is the content for the Done tab.',
  },
];

export const Default: StoryObj = {
  args: {
    dataSource: defaultTabPanelData,
    size: 'medium',
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

export const VerticalTabs: StoryObj = {
  args: {
    ...Default.args,
    height: 300,
  },
};

export const DifferentIconPositions: StoryObj = {
  args: {
    ...Default.args,
    iconPosition: 'top',
  },
};
