// me-sidebar.stories.ts
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxTreeViewModule, DxButtonModule } from 'devextreme-angular';
import {
  MeIconComponent,
  MeSidebarMenuComponent,
  MeTreeViewModule,
} from '../../public-api';

interface MeSidebarMenuItem {
  id: string;
  text: string;
  icon?: string;
  badge?: number;
  expanded?: boolean;
  items?: MeSidebarMenuItem[];
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
    collapsed: {
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
    floatMode: {
      control: 'boolean',
      description:
        'Определяет режим раскрытия меню, над страницей или внутри страицы',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<MeSidebarMenuComponent>;

const DEMO_ITEMS: MeSidebarMenuItem[] = [
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

const DEMO_BOTTOM_ITEMS: MeSidebarMenuItem[] = [
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
     <div style="display: flex; height: 100%;">
      <me-sidebar
        [items]="items"
        [bottomItems]="bottomItems"
        [title]="title"
        [collapsed]="collapsed"
        [toggleIcon]="toggleIcon"
        [expandedIcon]="expandedIcon"
        [collapsedIcon]="collapsedIcon"
        [floatMode]="floatMode"
      >
        <div header>
          <me-icon icon="notifications" size="medium" color="#666666"></me-icon>
        </div>
        <div search>
          <me-search placeholder="Поиск..."></me-search>
        </div>
      </me-sidebar>
      <div style="padding: 36px;">
          <p>Тестовая страница</p>
          <span>
          Группа исследователей из Миланского университета разработала обогащенный витаминами «коктейль» от похмелья, эффект которого основан на полезном действии имбиря, опунции, вишни и гинкго билоба. Результаты работы опубликованы в медицинском журнале The Lancet.
          В исследовании приняли участие 214 представителей разных возрастных групп. Ученые применили инновационный трехэтапный протокол для тестирования воздействия растительных компонентов. Основной группе участников предложили напиток, состоящий из экстрактов имбиря, опунции, барбадосской вишни и гинкго билоба, дополненный минералами и витаминами группы B.
          </span>
       </div>
      </div>
    `,
  }),
  args: {
    items: DEMO_ITEMS,
    bottomItems: DEMO_BOTTOM_ITEMS,
    title: 'Меню',
    collapsed: false,
    toggleIcon: 'chevron_left',
    expandedIcon: 'expand_less',
    collapsedIcon: 'expand_more',
  },
};

export const Collapsed: Story = {
  ...Default,
  args: {
    ...Default.args,
    collapsed: true,
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
