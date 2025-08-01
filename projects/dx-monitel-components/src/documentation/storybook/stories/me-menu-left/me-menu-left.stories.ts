import { action as menuLeftStories } from '@storybook/addon-actions';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import {
  DxButtonModule,
  DxTextBoxModule,
  DxTreeViewModule,
} from 'devextreme-angular';

import { MeIconsModule } from '@monitel/me-icons-registry';
import {
  MeMenuLeftComponent,
  MeTextBoxDirective,
  MeTreeViewModule,
} from '../../../../public-api';
import {
  meMenuLeftBottomItems,
  meMenuLeftDefaultItems,
} from './me-menu-left-mock-data';

export default {
  title: 'Components/MenuLeft',
  component: MeMenuLeftComponent,
  decorators: [
    moduleMetadata({
      declarations: [MeTextBoxDirective],
      imports: [
        DxTreeViewModule,
        DxButtonModule,
        MeIconsModule,
        DxTextBoxModule,
        MeTreeViewModule,
      ],
    }),
  ],
  argTypes: {
    items: {
      control: 'object',
      description: 'Список основных элементов меню.',
      table: {
        type: { summary: 'MeMenuLeftItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    bottomItems: {
      control: 'object',
      description: 'Список нижних элементов меню.',
      table: {
        type: { summary: 'MeMenuLeftItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    title: {
      control: 'text',
      description: 'Заголовок меню.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    collapsed: {
      control: 'boolean',
      description: 'Состояние сворачивания меню.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    resizeHandleVisible: {
      control: 'boolean',
      description:
        'Определяет, будет ли отображаться ручка изменения ширины меню.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    withHeader: {
      control: 'boolean',
      description: 'Определяет, будет ли отображаться заголовок меню.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    floatMode: {
      control: 'boolean',
      description: 'Включает режим плавающего меню.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    toggleIcon: {
      control: 'select',
      options: [
        'chevron_left_x20',
        'chevron_right_x20',
        'arrow_back_x20',
        'arrow_forward_x20',
      ],
      description: 'Принимает иконку для кнопки только с иконкой, без текста.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'chevron_right_x20' },
      },
    },
    expandedIcon: {
      control: 'select',
      options: ['', 'expand_less_x20', 'expand_more_x20'],
      description: 'Принимает иконку для кнопки только с иконкой, без текста.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'expand_less_x20' },
      },
    },
    collapsedIcon: {
      control: 'select',
      options: ['', 'expand_less_x20', 'keyboard_arrow_down_x20'],
      description: 'Принимает иконку для кнопки только с иконкой, без текста.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'keyboard_arrow_down_x20' },
      },
    },
    collapsedWidth: {
      control: 'number',
      description: 'Ширина меню в свернутом состоянии.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '68' },
      },
    },
    expandedWidth: {
      control: 'number',
      description: 'Ширина меню в развернутом состоянии.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '336' },
      },
    },
    width: {
      control: 'number',
      description: 'Текущая ширина меню.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '336' },
      },
    },
    maxWidth: {
      control: 'text',
      description:
        'Максимальная ширина меню. Допустимые единицы измерения - vw, px, %, inherit.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '600px' },
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    items: meMenuLeftDefaultItems,
    bottomItems: meMenuLeftBottomItems,
    title: 'Меню',
    collapsed: false,
    floatMode: false,
    withHeader: true,
    resizeHandleVisible: true,
    toggleIcon: 'chevron_right_x20',
    expandedIcon: 'expand_less_x20',
    collapsedIcon: 'keyboard_arrow_down_x20',
    collapsedWidth: 68,
    expandedWidth: 336,
    width: 336,
    maxWidth: '600px',
  },
  render: (args) => ({
    props: {
      ...args,
      onItemSelected: menuLeftStories('onItemSelected'),
      onCollapsedChange: menuLeftStories('onCollapsedChange'),
    },
    template: `
      <div style="display: flex; height: 100%;">
        <me-menu-left
          [items]="items"
          [bottomItems]="bottomItems"
          [title]="title"
          [collapsed]="collapsed"
          [floatMode]="floatMode"
          [withHeader]="withHeader"
          [resizeHandleVisible]="resizeHandleVisible"
          [toggleIcon]="toggleIcon"
          [expandedIcon]="expandedIcon"
          [collapsedIcon]="collapsedIcon"
          [collapsedWidth]="collapsedWidth"
          [expandedWidth]="expandedWidth"
          [width]="width"
          (itemSelected)="onItemSelected($event)"
          (collapsedChange)="onCollapsedChange($event)"
          [maxWidth]="maxWidth">
           <div meMenuLeftHeader>
            <me-icon name="notifications_unread_x20" size="24" class="notify_icon"></me-icon>
          </div>
        </me-menu-left>
        <div style="padding: 36px; color: var(--Text-Default)">
          <p>Тестовая страница</p>
          <span>
            Группа исследователей из Миланского университета разработала обогащенный витаминами «коктейль» от похмелья, эффект которого основан на полезном действии имбиря, опунции, вишни и гинкго билоба. Результаты работы опубликованы в медицинском журнале The Lancet.
            В исследовании приняли участие 214 представителей разных возрастных групп. Ученые применили инновационный трехэтапный протокол для тестирования воздействия растительных компонентов. Основной группе участников предложили напиток, состоящий из экстрактов имбиря, опунции, барбадосской вишни и гинкго билоба, дополненный минералами и витаминами группы B.
          </span>
        </div>
      </div>
    `,
  }),
} satisfies Meta<MeMenuLeftComponent>;

type Story = StoryObj<MeMenuLeftComponent>;

export const Default: Story = {};

export const WithCustomHeaderAndSearchBar: Story = {
  args: {
    title: '',
  },
  render: (args) => ({
    props: {
      ...args,
      customTitle: 'Custom Title',
      onItemSelected: menuLeftStories('onItemSelected'),
      onCollapsedChange: menuLeftStories('onCollapsedChange'),
    },
    template: `
      <div style="display: flex; height: 100%;">
        <me-menu-left
          [items]="items"
          [bottomItems]="bottomItems"
          [collapsed]="collapsed"
          [floatMode]="floatMode"
          [withHeader]="withHeader"
          [resizeHandleVisible]="resizeHandleVisible"
          [title]="title"
          [toggleIcon]="toggleIcon"
          [expandedIcon]="expandedIcon"
          [collapsedIcon]="collapsedIcon"
          [collapsedWidth]="collapsedWidth"
          [expandedWidth]="expandedWidth"
          [width]="width"
          (itemSelected)="onItemSelected($event)"
          (collapsedChange)="onCollapsedChange($event)"
          [maxWidth]="maxWidth">
          <div meMenuLeftHeader class="me-menu-left-custom-header" [class.me-menu-left--collapsed]="collapsed" >
            <div class="me-menu-left-custom-header-title me-title-header1">{{ customTitle }}</div>
            <me-icon icon="notifications" size="medium" class="notify_icon"></me-icon>
          </div>
          <div meMenuLeftSearch class="me-menu-left-search">
            <dx-text-box meTextBox mode="search" labelMode="hidden" placeholder="Поиск..."></dx-text-box>
          </div>
        </me-menu-left>
        <div style="padding: 36px; color: var(--Text-Default)">
          <p>Тестовая страница</p>
          <span>
            Группа исследователей из Миланского университета разработала обогащенный витаминами «коктейль» от похмелья, эффект которого основан на полезном действии имбиря, опунции, вишни и гинкго билоба. Результаты работы опубликованы в медицинском журнале The Lancet.
            В исследовании приняли участие 214 представителей разных возрастных групп. Ученые применили инновационный трехэтапный протокол для тестирования воздействия растительных компонентов. Основной группе участников предложили напиток, состоящий из экстрактов имбиря, опунции, барбадосской вишни и гинкго билоба, дополненный минералами и витаминами группы B.
          </span>
        </div>
      </div>
    `,
    styles: [
      `
    .me-menu-left-custom-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .me-menu-left-custom-header-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .me-menu-left--collapsed .me-menu-left-custom-header-title {
      display: none;
    }
    .me-menu-left--collapsed.me-menu-left-custom-header {
      justify-content: center;
    }
    .me-menu-left-search {
      padding-inline: 12px;
      padding-block: 8px;
      border-bottom: 1px solid #dfe0ed;
    }
  `,
    ],
  }),
};

export const WithoutHeader: Story = {
  args: {
    withHeader: false,
  },
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
  },
};

export const FloatMode = {
  args: {
    floatMode: true,
  },
};

export const WithoutResizeHandle = {
  args: {
    resizeHandleVisible: false,
  },
};

export const CustomToggleIcon = {
  args: {
    toggleIcon: 'menu',
  },
};
