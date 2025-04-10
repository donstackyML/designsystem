import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent, DxContextMenuComponent } from 'devextreme-angular';
import {
  MeButtonDirective,
  MeContextMenuDirective,
  MeIconComponent,
} from '../../../../public-api';
import {
  meContextMenuMockData,
  meContextMenuMockDataForTemplateExample,
  meContextMenuMockDataWithDividers,
  meContextMenuMockDataWithSelectedItems,
} from './me-context-menu-mock-data';

export default {
  title: 'Components/ContextMenu',
  decorators: [
    moduleMetadata({
      imports: [MeIconComponent],
      declarations: [
        DxContextMenuComponent,
        MeContextMenuDirective,
        MeButtonDirective,
        DxButtonComponent,
        DxContextMenuComponent,
      ],
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
    selectByClick: {
      control: 'boolean',
      description:
        'Указывает, будет ли выбран элемент, если пользователь нажмет на него.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    subMenuMaxHeight: {
      control: 'text',
      description: 'Устанавливает максимальную высоту подменю.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    dividersVisibility: {
      control: 'select',
      options: ['auto', 'all', 'none'],
      description: 'Определяет видимость разделителей у элементов списка в выпадающем меню',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
  },
  args: {
    dataSource: meContextMenuMockData,
    selectByClick: false,
    selectionMode: 'none',
    dividersVisibility: 'auto'
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
} satisfies Meta<MeContextMenuDirective | DxContextMenuComponent>;

type Story = StoryObj<MeContextMenuDirective | DxContextMenuComponent>;

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


export const DividersVisibilityNone: Story = {
  args: {
    dividersVisibility: 'none',
  },
};

export const DividersVisibilityAll: Story = {
  args: {
    dividersVisibility: 'all',
  },
};

export const DividersVisibilityByContent: Story = {
  args: {
    dataSource: meContextMenuMockDataWithDividers
  },
};