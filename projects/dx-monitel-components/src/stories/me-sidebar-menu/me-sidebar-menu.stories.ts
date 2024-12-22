// me-sidebar.stories.ts
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxTreeViewModule, DxButtonModule } from 'devextreme-angular';
import {
  MeIconComponent,
  MeSidebarMenuComponent,
  MeTreeViewModule,
} from '../../public-api';

interface MenuItem {
  id: string;
  text: string;
  icon?: string;
  badge?: number;
  expanded?: boolean;
  items?: MenuItem[];
  selected?: boolean;
}

const meta: Meta<MeSidebarMenuComponent> = {
  title: 'Components/Sidebar',
  component: MeSidebarMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DxTreeViewModule,
        DxButtonModule,
        MeIconComponent,
        MeIconComponent,
        MeTreeViewModule,
      ],
    }),
  ],
  argTypes: {
    isCollapsed: {
      control: 'boolean',
      description: 'Определяет, свернуто ли меню',
    },
    title: {
      control: 'text',
      description: 'Заголовок меню',
    },
    toggleIcon: {
      control: 'text',
      description: 'Иконка кнопки сворачивания',
    },
    expandedIcon: {
      control: 'text',
      description: 'Иконка развернутого пункта',
    },
    collapsedIcon: {
      control: 'text',
      description: 'Иконка свернутого пункта',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<MeSidebarMenuComponent>;

const DEMO_ITEMS: MenuItem[] = [
  {
    id: 'tasks',
    text: 'Задачи',
    icon: 'task',
    badge: 3,
    expanded: true,
    items: [
      {
        id: 'inbox',
        text: 'Входящие',
        icon: 'inbox',
        badge: 2,
      },
      {
        id: 'inprogress',
        text: 'В работе',
        icon: 'pending',
        badge: 1,
      },
    ],
  },
  {
    id: 'path',
    text: '/',
    icon: 'folder',
    expanded: true,
    items: [
      {
        id: 'monitel',
        text: 'Monitel',
        icon: 'folder',
        items: [
          {
            id: 'atp',
            text: 'АТП',
            icon: 'folder',
            items: [
              {
                id: 'active',
                text: 'Активные',
                badge: 5,
              },
              {
                id: 'archive',
                text: 'Архив',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'downloads',
    text: 'Загрузки',
    icon: 'download',
  },
  {
    id: 'settings',
    text: 'Настройки',
    icon: 'settings',
  },
];

const DEMO_BOTTOM_ITEMS: MenuItem[] = [
  {
    id: 'downloads',
    text: 'Загрузки',
    icon: 'download',
  },
  {
    id: 'settings',
    text: 'Настройки',
    icon: 'settings',
  },
];

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <me-sidebar
        [items]="items"
        [bottomItems]="bottomItems"
        [title]="title"
        [isCollapsed]="isCollapsed"
        [toggleIcon]="toggleIcon"
        [expandedIcon]="expandedIcon"
        [collapsedIcon]="collapsedIcon"
      >
        <div header>
          <me-icon icon="notifications" size="medium" color="#666666"></me-icon>
        </div>
        <div search>
          <me-search placeholder="Поиск..."></me-search>
        </div>
      </me-sidebar>
    `,
  }),
  args: {
    items: DEMO_ITEMS,
    bottomItems: DEMO_BOTTOM_ITEMS,
    title: 'Меню',
    isCollapsed: false,
    toggleIcon: 'chevron_left',
    expandedIcon: 'expand_less',
    collapsedIcon: 'expand_more',
  },
};

export const Collapsed: Story = {
  ...Default,
  args: {
    ...Default.args,
    isCollapsed: true,
    toggleIcon: 'chevron_right',
  },
};

export const CustomIcons: Story = {
  ...Default,
  args: {
    ...Default.args,
    toggleIcon: 'menu',
    expandedIcon: 'keyboard_arrow_up',
    collapsedIcon: 'keyboard_arrow_down',
  },
};

export const WithSelectedItem: Story = {
  ...Default,
  args: {
    ...Default.args,
    items: DEMO_ITEMS.map((item) =>
      item.id === 'tasks' ? { ...item, selected: true } : item
    ),
  },
};
