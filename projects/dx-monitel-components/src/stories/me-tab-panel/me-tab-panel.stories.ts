import { homeX20, mailX20, addX20, attachFileX20, publicX20  } from '@monitel/me-icons';
import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { DxTabPanelModule } from 'devextreme-angular';
import { registry } from '../../../.storybook/preview';
import { MeTabPanelDirective } from '../../public-api';

const defaultTabPanelData = [
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
  {
    title: 'Open',
    icon: registry.getIcon(addX20),
    content: 'This is the content for the Open tab.',
  },
  {
    title: 'Not Started',
    icon: registry.getIcon(attachFileX20),
    content: 'This is the content for the Not Started tab.',
  },
  {
    title: 'Active',
    icon: registry.getIcon(publicX20),
    content: 'This is the content for the Active tab.',
  },
];

export default {
  title: 'Components/TabPanel',
  decorators: [
    moduleMetadata({
      declarations: [MeTabPanelDirective],
      imports: [DxTabPanelModule],
    }),
  ],
  argTypes: {
    iconPosition: {
      description: 'Устанавливает положение иконки внутри вкладок.',
      options: ['top', 'start', 'end', 'bottom'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'start'" },
      },
    },
    size: {
      description: 'Устанавливает размер вкладок.',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'medium'" },
      },
    },
    styling: {
      description: 'Определяет стиль вкладок.',
      options: ['inside', 'outside'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'inside'" },
      },
    },
    width: {
      description: 'Ширина компонента.',
      control: 'text',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      description: 'Высота компонента.',
      control: 'text',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: '200' },
      },
    },
    tabsPosition: {
      description: 'Определяет положение вкладок.',
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'top'" },
      },
    },
    disabled: {
      description: 'Указывает, будет ли компонент отображаться в состоянии disabled.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    swipeEnabled: {
      description: 'Указывает, будет ли компонент отображаться с возможностью свайпа.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectedIndex: {
      description: 'Указывает, какой индекс будет выбран.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
  },
  args: {
    dataSource: defaultTabPanelData,
    size: 'medium',
    tabsPosition: 'top',
    iconPosition: 'start',
    styling: 'inside',
    disabled: false,
    height: 200,
    width: undefined,
    selectedIndex: 0,
    swipeEnabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-tab-panel
        meTabPanel
        ${argsToTemplate(args)}
      >
        <div *dxTemplate="let item of 'item'" class="me-tab-panel-demo-content-container">
          <div class="tabpanel-content">
            <p>{{item.content}}</p>
          </div>
        </div>
      </dx-tab-panel>
    `,
    styles: [
      `
      .me-tab-panel-demo-content-container {
        padding: 12px;

        p {
          margin: 0
        }
      }
      `
    ]
  })
} satisfies Meta<DxTabPanelModule | MeTabPanelDirective>;

type Story = StoryObj<DxTabPanelModule | MeTabPanelDirective>;

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const OrientationVertical: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const OrientationHorizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const TabsPositionTop: Story = {
  args: {
    tabsPosition: 'top',
  },
};

export const TabsPositionBottom: Story = {
  args: {
    tabsPosition: 'bottom',
  },
};

export const TabsPositionLeft: Story = {
  args: {
    tabsPosition: 'left',
  },
};

export const TabsPositionRight: Story = {
  args: {
    tabsPosition: 'right',
  },
};

export const NavigationWithButtons: Story = {
  args: {
    showNavButtons: true,
    width: '300px',
  },
};

export const NavigationWithScroll: Story = {
  args: {
    scrollByContent: true,
    width: '300px',
  },
};

export const IconPositionStart: Story = {
  args: {
    iconPosition: 'start',
  },
};

export const IconPositionEnd: Story = {
  args: {
    iconPosition: 'end',
  },
};

export const IconPositionTop: Story = {
  args: {
    iconPosition: 'top',
  },
};

export const IconPositionBottom: Story = {
  args: {
    iconPosition: 'bottom',
  },
};

export const StylingOutside: Story = {
  args: {
    styling: 'outside',
  },
};

export const StylingInside: Story = {
  args: {
    styling: 'inside',
  },
};

export const StateDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const SwipeEnabled: Story = {
  args: {
    swipeEnabled: true,
  },
};

export const RightToLeft: Story = {
  args: {
    rtlEnabled: true,
  },
};