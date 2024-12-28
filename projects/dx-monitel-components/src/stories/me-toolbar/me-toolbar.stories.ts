import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import {
  DxButtonModule,
  DxDropDownButtonModule,
  DxButtonGroupModule,
  DxTemplateModule,
  DxToolbarModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import {
  MeButtonDirective,
  MeButtonGroupDirective,
  MeDropDownButtonDirective,
  MeIconStoreService,
  MeToolbarDirective,
  MeTextBoxDirective,
} from '../../public-api';
import { text } from 'stream/consumers';

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
        MeButtonGroupDirective,
        MeTextBoxDirective,
      ],
      imports: [
        DxToolbarModule,
        DxButtonModule,
        DxDropDownButtonModule,
        DxButtonGroupModule,
        DxTemplateModule,
        DxTextBoxModule,
      ],
      providers: [MeIconStoreService],
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
      buttonGroupIcons: [
        { icon: 'format_bold', type: 'normal', hint: 'Bold' },
        {
          icon: 'format_italic',
          type: 'normal',
        },
        {
          icon: 'format_underlined',
          type: 'normal',
        },
        {
          icon: 'strikethrough_s',
          type: 'normal',
        },
      ],
      buttonGroupMenu: [
        { type: 'normal', text: 'Bold', alightment: 'left' },
        {
          type: 'normal',
          text: 'Italic',
          alightment: 'left',
        },
        {
          type: 'normal',
          text: 'Underline',
          alightment: 'left',
        },
        {
          type: 'normal',
          text: 'Strike',
          alightment: 'left',
        },
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


	
	<dxi-item 
	location="before" 
	widget="dxButtonGroup" 
	locateInMenu="auto" 
	menuItemTemplate="menuTextAlignTemplate"
	>
		<div *dxTemplate>
			<dx-button-group 
			meButtonGroup 
			[size]="size"
			[items]="buttonGroupIcons" 
			[disabled]="disabled"
			></dx-button-group>
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

	<dxi-item location="before" locateInMenu="auto">
		<div *dxTemplate>
			<div class="me-toolbar-separator"></div>
		</div>
	</dxi-item>

	<dxi-item 
	location="before"
	widget="dxTextbox"
	showText="inMenu"
	width="300"
	>
		<div *dxTemplate>
			<dx-text-box 
			[disabled]="disabled" 
			meTextBox
			mode="search"
			[showClearButton]="false"
			[size]="size"
			></dx-text-box>
		</div>
	</dxi-item>


	<dxi-item locateInMenu="always" widget="dxButton" showText="inMenu">
		<div *dxTemplate>
			<dx-button [disabled]="disabled" meButton iconOnly="help" text="About" [size]="size"></dx-button>
		</div>
	</dxi-item>



	      <div *dxTemplate="let data of 'menuTextAlignTemplate'">
        <dx-button-group
				meButtonGroup
          stylingMode="outlined"
					[size]="size"
          [items]="buttonGroupMenu"
					alignment="buttonGroupMenu.alignment"
        ></dx-button-group>
      </div>

			
</dx-toolbar>

    `,
  }),
};
