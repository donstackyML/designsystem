import {
  argsToTemplate,
  moduleMetadata,
  Meta,
  StoryObj,
} from '@storybook/angular';
import {
  DxToolbarModule,
  DxButtonModule,
  DxDropDownButtonModule,
  DxTemplateModule,
} from 'devextreme-angular';
import {
  MeToolbarDirective,
  MeButtonDirective,
  MeDropDownButtonDirective,
  MeIconStoreService,
} from '../../public-api';

// 1. Определяем интерфейс для аргументов
interface ToolbarArgs {
  size: 'small' | 'medium' | 'large';
  background: boolean;
}

// 2. Определяем метаданные с использованием интерфейса
const meta: Meta<ToolbarArgs> = {
  title: 'Components/Toolbar',
  decorators: [
    moduleMetadata({
      declarations: [
        MeToolbarDirective,
        MeButtonDirective,
        MeDropDownButtonDirective,
      ],
      imports: [
        DxToolbarModule,
        DxButtonModule,
        DxDropDownButtonModule,
        DxTemplateModule,
      ],
      providers: [MeIconStoreService], // Добавьте провайдер для сервиса иконок
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'] as const,
      description:
        'Меняет размер самого <code>toolbar</code> и размер кнопки <code>overflow</code> при переполнении.',
      table: {
        type: { summary: `'small' | 'medium' | 'large'` },
        defaultValue: { summary: 'medium' },
      },
    },
    background: {
      control: 'boolean',
      description:
        'При установке значения true добавляет фон, бордер и скругления.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    size: 'medium',
    background: false,
  },
};

export default meta;

// 3. Определяем тип Story
type Story = StoryObj<ToolbarArgs>;

// 4. Определяем истории

// История по умолчанию
export const Default: Story = {
  render: (args: ToolbarArgs) => ({
    props: {
      ...args,
      lineHeights: [
        { text: '1.0', value: 1.0 },
        { text: '1.15', value: 1.15 },
        { text: '1.5', value: 1.5 },
        { text: '2.0', value: 2.0 },
      ],
      fontFamilies: [
        { text: 'Arial', value: 'Arial' },
        { text: 'Courier New', value: 'Courier New' },
        { text: 'Georgia', value: 'Georgia' },
        { text: 'Times New Roman', value: 'Times New Roman' },
      ],
      headings: [
        { text: 'Normal Text', value: 'p' },
        { text: 'Heading 1', value: 'h1' },
        { text: 'Heading 2', value: 'h2' },
        { text: 'Heading 3', value: 'h3' },
      ],
    },
    template: `
      <dx-toolbar meToolbar [size]="size" [background]="background">
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconColor="#18181a" iconOnly="undo" [size]="size"></dx-button>
          </div>
        </dxi-item>
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconColor="#18181a" iconOnly="redo" [size]="size"></dx-button>
          </div>
        </dxi-item>

        <dxi-item location="before">
          <div *dxTemplate>
            <div class="me-toolbar-separator"></div>
          </div>
        </dxi-item>

        <dxi-item location="before" locateInMenu="auto">
          <div *dxTemplate>
            <dx-drop-down-button
              meDropDownButton
              iconColor="#18181a"
              [size]="size"
              text="1.35"
              width="100%"
              displayExpr="text"
              keyExpr="value"
              [items]="lineHeights"
              stylingMode="contained"
            ></dx-drop-down-button>
          </div>
        </dxi-item>

        <dxi-item location="before" locateInMenu="auto">
          <div *dxTemplate>
            <dx-drop-down-button
              meDropDownButton
              [size]="size"
              iconColor="#18181a"
              width="100%"
              text="Font"
              [useSelectMode]="false"
              displayExpr="text"
              keyExpr="value"
              [items]="fontFamilies"
              stylingMode="contained"
            ></dx-drop-down-button>
          </div>
        </dxi-item>

        <dxi-item location="before" locateInMenu="auto">
          <div *dxTemplate>
            <div class="me-toolbar-separator"></div>
          </div>
        </dxi-item>

        <dxi-item location="before" locateInMenu="auto">
          <div *dxTemplate>
            <dx-drop-down-button
              meDropDownButton
              [size]="size"
              iconColor="#18181a"
              width="100%"
              text="Normal Text"
              [useSelectMode]="false"
              displayExpr="text"
              keyExpr="value"
              [items]="headings"
              stylingMode="contained"
            ></dx-drop-down-button>
          </div>
        </dxi-item>

        <dxi-item location="before" locateInMenu="auto">
          <div *dxTemplate>
            <div class="me-toolbar-separator"></div>
          </div>
        </dxi-item>

        <dxi-item location="before" locateInMenu="auto">
          <div *dxTemplate>
            <dx-button meButton iconColor="#18181a" iconOnly="link" [size]="size"></dx-button>
          </div>
        </dxi-item>

        <dxi-item location="before" locateInMenu="auto">
          <div *dxTemplate>
            <dx-button meButton iconColor="#18181a" iconOnly="add_photo_alternate" [size]="size"></dx-button>
          </div>
        </dxi-item>

        <dxi-item location="after">
          <div *dxTemplate>
            <dx-button meButton iconColor="#18181a" iconOnly="attach_file" [size]="size"></dx-button>
          </div>
        </dxi-item>

        <dxi-item locateInMenu="always">
          <div *dxTemplate>
            <dx-button meButton iconColor="#18181a" iconOnly="help" text="About" [size]="size"></dx-button>
          </div>
        </dxi-item>
      </dx-toolbar>
    `,
  }),
};

// История для кнопок с иконками
export const IconButtons: Story = {
  render: (args: ToolbarArgs) => ({
    props: {
      ...args,
    },
    template: `
      <dx-toolbar meToolbar [size]="size" [background]="background">
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="save" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="delete" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
      </dx-toolbar>
    `,
  }),
};

// История для выпадающих кнопок
export const DropDownButtons: Story = {
  render: (args: ToolbarArgs) => ({
    props: {
      ...args,
      items: [
        { text: 'Option 1', value: 1 },
        { text: 'Option 2', value: 2 },
      ],
    },
    template: `
      <dx-toolbar meToolbar [size]="size" [background]="background">
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-drop-down-button
              meDropDownButton
              [size]="size"
              text="Options"
              [items]="items"
              iconColor="#18181a"
            ></dx-drop-down-button>
          </div>
        </dxi-item>
      </dx-toolbar>
    `,
  }),
};

// История для изменения размера Toolbar на large
export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
  render: (args: ToolbarArgs) => ({
    props: {
      ...args,
    },
    template: `
      <dx-toolbar meToolbar [size]="size" [background]="background">
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="undo" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
        <!-- Добавьте другие элементы по необходимости -->
      </dx-toolbar>
    `,
  }),
};

// История для добавления разделителей
export const Separators: Story = {
  render: (args: ToolbarArgs) => ({
    props: {
      ...args,
    },
    template: `
      <dx-toolbar meToolbar [size]="size" [background]="background">
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="undo" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
        <dxi-item location="before">
          <div *dxTemplate>
            <div class="me-toolbar-separator"></div>
          </div>
        </dxi-item>
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="rendo" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
      </dx-toolbar>
    `,
  }),
};

// История для использования кнопок с директивой meButton
export const MeButtonUsage: Story = {
  render: (args: ToolbarArgs) => ({
    props: {
      ...args,
    },
    template: `
      <dx-toolbar meToolbar [size]="size" [background]="background">
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="folder" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="arrowback" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
      </dx-toolbar>
    `,
  }),
};

// История для добавления иконок из набора
export const CustomIcons: Story = {
  render: (args: ToolbarArgs) => ({
    props: {
      ...args,
    },
    template: `
      <dx-toolbar meToolbar [size]="size" [background]="background">
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="format_bold" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="format_italic" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
        <dxi-item location="before">
          <div *dxTemplate>
            <dx-button meButton iconOnly="format_underlined" [size]="size" iconColor="#18181a"></dx-button>
          </div>
        </dxi-item>
      </dx-toolbar>
    `,
  }),
};
