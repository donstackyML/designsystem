import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import {
  DxButtonModule,
  DxDropDownButtonModule,
  DxTemplateModule,
  DxToolbarModule,
} from 'devextreme-angular';
import {
  MeButtonDirective,
  MeDropDownButtonDirective,
  MeIconStoreService,
  MeToolbarDirective,
} from '../../public-api';

// 1. Определяем интерфейс для аргументов
interface ToolbarArgs {
  dataSourse: any;
  size: 'small' | 'medium' | 'large';
  background: boolean;
  multiline: boolean;
  disabled: boolean;
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
    multiline: {
      control: 'boolean',
      description:
        'Указывает, будет ли панель инструментов располагать элементы в несколько строк, если их общая ширина превышает ширину панели инструментов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    size: 'medium',
    background: false,
    multiline: false,
    disabled: false,
  },
};

export default meta;

// 3. Определяем тип Story
type Story = StoryObj<ToolbarArgs>;

// 4. Определяем истории

// История по умолчанию
export const Default: Story = {
  args: {
    multiline: false,
  },
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

<dx-toolbar meToolbar ${argsToTemplate(args)}>
	<dxi-item location="before" widget="dxButton" locateInMenu="auto" showText="inMenu">
		<div *dxTemplate>
			<dx-button [disabled]="disabled" meButton iconOnly="undo" text="Undo" [size]="size"></dx-button>
		</div>
	</dxi-item>
	<dxi-item location="before" widget="dxButton" locateInMenu="auto" showText="inMenu">
		<div *dxTemplate>
			<dx-button [disabled]="disabled" meButton iconOnly="redo" text="Redo" [size]="size"></dx-button>
		</div>
	</dxi-item>

	<dxi-item location="before">
		<div *dxTemplate>
			<div class="me-toolbar-separator"></div>
		</div>
	</dxi-item>

	<dxi-item location="before" widget="dxDropDownButton" locateInMenu="auto" showText="inMenu">
		<div *dxTemplate>
			<dx-drop-down-button
				meDropDownButton
				[size]="size"
				[disabled]="disabled"
				text="1.35"
				width="100%"
				displayExpr="text"
				keyExpr="value"
				[items]="lineHeights"
				stylingMode="contained"
			></dx-drop-down-button>
		</div>
	</dxi-item>

	<dxi-item location="before" widget="dxDropDownButton" locateInMenu="auto" showText="inMenu">
		<div *dxTemplate>
			<dx-drop-down-button
				meDropDownButton
				[size]="size" [disabled]="disabled"
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

	<dxi-item location="before" widget="dxDropDownButton" locateInMenu="auto" showText="inMenu">
		<div *dxTemplate>
			<dx-drop-down-button
				meDropDownButton
				[size]="size"
			[disabled]="disabled"
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

	<dxi-item location="before" widget="dxButton" locateInMenu="auto" showText="inMenu">
		<div *dxTemplate>
			<dx-button [disabled]="disabled" meButton iconOnly="link" text="Link" [size]="size"></dx-button>
		</div>
	</dxi-item>

	<dxi-item location="before" widget="dxButton" locateInMenu="auto" showText="inMenu">
		<div *dxTemplate>
			<dx-button [disabled]="disabled" meButton iconOnly="add_photo_alternate" text="Photo" [size]="size"></dx-button>
		</div>
	</dxi-item>

	<dxi-item location="after" widget="dxButton" locateInMenu="auto" showText="inMenu">
		<div *dxTemplate>
			<dx-button [disabled]="disabled" meButton iconOnly="attach_file" text="File" [size]="size"></dx-button>
		</div>
	</dxi-item>

	<dxi-item locateInMenu="always" widget="dxButton" locateInMenu="auto" showText="inMenu">
		<div *dxTemplate>
			<dx-button [disabled]="disabled" meButton iconOnly="help" text="About" [size]="size"></dx-button>
		</div>
	</dxi-item>
</dx-toolbar>

    `,
  }),
};

// // История для кнопок с иконками
// export const IconButtons: Story = {
//   render: (args: ToolbarArgs) => ({
//     props: {
//       ...args,
//     },
//     template: `
//       <dx-toolbar meToolbar ${argsToTemplate(args)}>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="save" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="delete" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//       </dx-toolbar>
//     `,
//   }),
// };

// // История для выпадающих кнопок
// export const DropDownButtons: Story = {
//   render: (args: ToolbarArgs) => ({
//     props: {
//       ...args,
//       items: [
//         { text: 'Option 1', value: 1 },
//         { text: 'Option 2', value: 2 },
//       ],
//     },
//     template: `
//       <dx-toolbar meToolbar ${argsToTemplate(args)}>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-drop-down-button
//               meDropDownButton
//               [size]="size"
//               text="Options"
//               [items]="items"
//               iconColor="#18181a"
//             ></dx-drop-down-button>
//           </div>
//         </dxi-item>
//       </dx-toolbar>
//     `,
//   }),
// };

// // История для изменения размера Toolbar на large
// export const SizeLarge: Story = {
//   args: {
//     size: 'large',
//   },
//   render: (args: ToolbarArgs) => ({
//     props: {
//       ...args,
//     },
//     template: `
//       <dx-toolbar meToolbar ${argsToTemplate(args)}>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="undo" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//         <!-- Добавьте другие элементы по необходимости -->
//       </dx-toolbar>
//     `,
//   }),
// };

// // История для добавления разделителей
// export const Separators: Story = {
//   render: (args: ToolbarArgs) => ({
//     props: {
//       ...args,
//     },
//     template: `
//       <dx-toolbar meToolbar ${argsToTemplate(args)}>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="undo" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <div class="me-toolbar-separator"></div>
//           </div>
//         </dxi-item>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="rendo" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//       </dx-toolbar>
//     `,
//   }),
// };

// // История для использования кнопок с директивой meButton
// export const MeButtonUsage: Story = {
//   render: (args: ToolbarArgs) => ({
//     props: {
//       ...args,
//     },
//     template: `
//       <dx-toolbar meToolbar ${argsToTemplate(args)}>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="folder" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="arrowback" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//       </dx-toolbar>
//     `,
//   }),
// };

// // История для добавления иконок из набора
// export const CustomIcons: Story = {
//   render: (args: ToolbarArgs) => ({
//     props: {
//       ...args,
//     },
//     template: `
//       <dx-toolbar meToolbar ${argsToTemplate(args)}>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="format_bold" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="format_italic" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//         <dxi-item location="before">
//           <div *dxTemplate>
//             <dx-button meButton iconOnly="format_underlined" [size]="size" iconColor="#18181a"></dx-button>
//           </div>
//         </dxi-item>
//       </dx-toolbar>
//     `,
//   }),
// };

// const data = [
//   {
//     widget: 'dxButton',
//     options: {
//       icon: 'add',
//     },
//   },
//   {
//     widget: 'dxButtonGroup',
//     options: {
//       items: [
//         { lineHeight: 1, text: '1' },
//         { lineHeight: 1.35, text: '1.35' },
//         { lineHeight: 1.5, text: '1.5' },
//         { lineHeight: 2, text: '2' },
//       ],
//     },
//   },
//   {
//     widget: 'dxButtonGroup',
//     options: {
//       items: [
//         {
//           icon: 'alignleft',
//           alignment: 'left',
//         },
//         {
//           icon: 'aligncenter',
//           alignment: 'center',
//         },
//         {
//           icon: 'alignright',
//           alignment: 'right',
//         },
//         {
//           icon: 'alignjustify',
//           alignment: 'justify',
//         },
//       ],
//     },
//   },
//   {
//     widget: 'dxButtonGroup',
//     options: {
//       items: [
//         {
//           icon: 'bold',
//           hint: 'Bold',
//         },
//         {
//           icon: 'italic',
//           hint: 'Italic',
//         },
//         {
//           icon: 'underline',
//           hint: 'Underlined',
//         },
//         {
//           icon: 'strike',
//           hint: 'Strikethrough',
//         },
//       ],
//     },
//   },
// ];

// export const WithDataSource = {
//   args: {
//     dataSource: data,
//   },
//   render: (args: ToolbarArgs) => ({
//     props: {
//       ...args,
//     },
//     template: `
// 		<dx-toolbar meToolbar ${argsToTemplate(args)}>
// 	</dx-toolbar>
// 	`,
//   }),
// };
