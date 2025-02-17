import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent, DxContextMenuModule } from 'devextreme-angular';
import {
  MeButtonDirective,
  MeContextMenuDirective,
  MeIconComponent,
} from '../../public-api';
import {
  meContextMenuMockData,
  meContextMenuMockDataForTemplateExample,
  meContextMenuMockDataWithSelectedItems,
} from './me-context-menu-mock-data';

export default {
  title: 'Components/ContextMenu',
  decorators: [
    moduleMetadata({
      declarations: [
        MeContextMenuDirective,
        MeButtonDirective,
        DxButtonComponent,
      ],
      imports: [DxContextMenuModule, MeIconComponent],
    }),
  ],
  argTypes: {
    dataSource: {
      control: 'object',
      description: 'Данные для отображения',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple', 'all', 'none'],
      description: 'Определяет тип выделения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    focusStateEnabled: {
      control: 'boolean',
      description: 'Определяет, может ли контекстное меню получать фокус.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hoverStateEnabled: {
      control: 'boolean',
      description:
        'Определяет, может ли контекстное меню иметь состояние hover.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    subMenuMaxHeight: {
      control: 'text',
      description: 'Устанавливает максимальную высоту подменю.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
  args: {
    dataSource: meContextMenuMockData,
    selectionMode: 'multiple',
    focusStateEnabled: true,
    activeStateEnabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
    <dx-button meButton text="Открыть контекстное меню (правая кнопка мыши)" id="contextMenuId"></dx-button>
    <dx-context-menu
        meContextMenu
        target="#contextMenuId"
        ${argsToTemplate(args)}>
    </dx-context-menu>`,
  }),
} as Meta<MeContextMenuDirective | DxContextMenuModule>;

type Story = StoryObj<MeContextMenuDirective | DxContextMenuModule>;

export const Default: Story = {
  args: {},
};

export const WithCustomTemplates: Story = {
  args: {
    dataSource: meContextMenuMockDataForTemplateExample,
  },
  render: (args) => ({
    props: args,
    template: `
    <dx-button meButton text="Открыть контекстное меню (правая кнопка мыши)" id="contextButtonDefault"></dx-button>
    <dx-context-menu
        meContextMenu
        target="#contextButtonDefault"
        ${argsToTemplate(args)}>
      <div *dxTemplate="let itemData of 'item'">
        <div class="item-template-container">
          <me-icon [icon]="itemData.icon" [size]="size"></me-icon>
          <span class="dx-menu-item-text">{{ itemData.text }}</span>
          <me-icon
            *ngIf="itemData.items"
            icon="chevron_right"
            [size]="size"
            style="margin-left: auto"
          ></me-icon>
        </div>
      </div>
    </dx-context-menu>`,
  }),
};

export const SelectedItems: Story = {
  args: {
    dataSource: meContextMenuMockDataWithSelectedItems,
  },
};

export const WithSubMenuMaxHeight: Story = {
  args: {
    subMenuMaxHeight: '200px',
  },
};
