import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import {
  DxButtonGroupModule,
  DxButtonModule,
  DxDropDownButtonModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxToolbarComponent,
  DxToolbarModule,
} from 'devextreme-angular';
import {
  MeButtonDirective,
  MeButtonGroupDirective,
  MeDropDownButtonDirective,
  MeIconStoreService,
  MePopupDirective,
  MeSelectBoxDirective,
  MeTextBoxDirective,
  MeToolbarDirective,
} from '../../../../public-api';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'me-toolbar-storybook-demo',
  template: `
<dx-toolbar
  meToolbar
  [size]="size"
  [background]="background"
  [multiline]="multiline"
  [disabled]="disabled"
  [width]="width"
>
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

  <dxi-item location="before" locateInMenu="auto" widget="dxSelectBox">
      <div *dxTemplate>
        <dx-select-box
          meSelectBox
          [size]="size"
          placeholder="Font"
          displayExpr="text"
          [items]="fontFamilies"
        >
        </dx-select-box>
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

  <dxi-item location="before" widget="dxButtonGroup" locateInMenu="auto" menuItemTemplate="menuTextAlignTemplate">
    <div *dxTemplate>
      <dx-button-group meButtonGroup [size]="size" keyExpr="style" [items]="buttonGroupIcons"></dx-button-group>
    </div>
  </dxi-item>

  <dxi-item location="before" locateInMenu="auto">
    <div *dxTemplate>
      <div class="me-toolbar-separator"></div>
    </div>
  </dxi-item>

   <dxi-item location="before" widget="dxTextbox" locateInMenu="auto" showText="inMenu" width="300">
    <div *dxTemplate>
      <dx-text-box meTextBox [disabled]="disabled" placeholder="Some text" [showClearButton]="true" [size]="size"></dx-text-box>
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

  <dxi-item location="before" widget="dxTextbox" showText="inMenu" width="300">
    <div *dxTemplate>
      <dx-text-box meTextBox class="search-item" [disabled]="disabled" mode="search" [showClearButton]="true" [size]="size"></dx-text-box>
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
      keyExpr="style"
    ></dx-button-group>
  </div>
</dx-toolbar>`,
  styles: [`
    .me-toolbar {
      &:not(.dx-toolbar-multiline) {
        div:has(> .search-item) {
          max-width: calc(100% - 40px);
        }
      }
    }

  `],

})
class ToolbarStoryComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() background = false;
  @Input() multiline = false;
  @Input() disabled = false;
  @Input() width: string | number | undefined;

  lineHeights = [
    { text: '1.0', value: 1.0 },
    { text: '1.15', value: 1.15 },
    { text: '1.5', value: 1.5 },
    { text: '2.0', value: 2.0 }
  ];

  fontFamilies = [
    { text: 'Arial', value: 'Arial' },
    { text: 'Courier New', value: 'Courier New' },
    { text: 'Georgia', value: 'Georgia' },
    { text: 'Times New Roman', value: 'Times New Roman' }
  ];

  headings = [
    { text: 'Normal Text', value: 'p' },
    { text: 'Heading 1', value: 'h1' },
    { text: 'Heading 2', value: 'h2' },
    { text: 'Heading 3', value: 'h3' }
  ];

  buttonGroupIcons = [
    { icon: 'format_bold', type: 'normal', hint: 'Bold', style: 'bold' },
    { icon: 'format_italic', type: 'normal', style: 'italic' },
    { icon: 'format_underlined', type: 'normal', style: 'underlined' },
    { icon: 'strikethrough_s', type: 'normal', style: 'strikethrough' }
  ];

  buttonGroupMenu = [
    { type: 'normal', text: 'Bold', alignment: 'left', leftIcon: 'format_bold', style: 'bold' },
    { type: 'normal', text: 'Italic', alignment: 'left', leftIcon: 'format_italic', style: 'italic' },
    { type: 'normal', text: 'Underline', alignment: 'left', leftIcon: 'format_underlined', style: 'underlined' },
    { type: 'normal', text: 'Strike', alignment: 'left', leftIcon: 'strikethrough_s', style: 'strikethrough' }
  ];
}


export default {
  title: 'Components/Toolbar',
  decorators: [
    moduleMetadata({
      declarations: [
        MeButtonDirective,
        MeButtonGroupDirective,
        MeDropDownButtonDirective,
        MeSelectBoxDirective,
        MeTextBoxDirective,
        MeToolbarDirective,
        ToolbarStoryComponent
      ],
      imports: [
        DxButtonGroupModule,
        DxButtonModule,
        DxDropDownButtonModule,
        DxSelectBoxModule,
        DxTemplateModule,
        DxTextBoxModule,
        DxToolbarModule,
      ],
      providers: [MeIconStoreService],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description:
        'Меняет размер самого `toolbar` и размер кнопки `overflow` при переполнении.',
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
    disabled: {
      control: 'boolean',
      description: 'Отключает панель инструментов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина панели инструментов.',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    size: 'medium',
    background: false,
    multiline: false,
    disabled: false,
    width: undefined
  },
  render: (args) => ({
    props: args,
    template: `
<me-toolbar-storybook-demo ${argsToTemplate(args)}>
</me-toolbar-storybook-demo>
`,
  })
} satisfies Meta<DxToolbarComponent | MeToolbarDirective>;

type Story = StoryObj<DxToolbarComponent | MeToolbarDirective>;

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small'
  }
};

export const SizeMedium: Story = {
  args: {
    size: 'medium'
  }
};

export const SizeLarge: Story = {
  args: {
    size: 'large'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Multiline: Story = {
  args: {
    multiline: true
  }
};

export const WithBackground: Story = {
  args: {
    background: true
  }
};

export const WithoutBackground: Story = {
  args: {
    background: false
  }
};

export const WithinPopup: Story = {
  decorators: [
    moduleMetadata({
      declarations: [MePopupDirective],
      imports: [DxPopupModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
    <dx-popup mePopup width='70dvw' [visible]="true">
      <div *dxTemplate="let data of 'content'">
        <me-toolbar-storybook-demo ${argsToTemplate(args)}></me-toolbar-storybook-demo>
      </div>
    </dx-popup>
    `,
    styles: [
      `
      .container {
        display: flex;
        width: 100%;

        & > * {
          width: 100%;
          flex-grow: 1;
        }
      }
      `
    ]
  })
};
