import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import {
  DxButtonComponent,
  DxDropDownButtonComponent,
  DxToolbarComponent,
  DxToolbarModule,
} from 'devextreme-angular';
import {
  MeButtonDirective,
  MeDropDownButtonDirective,
  MeToolbarDirective,
} from '../../public-api';

export default {
  title: 'Components/Toolbar',
  decorators: [
    moduleMetadata({
      declarations: [
        MeToolbarDirective,
        // DxToolbarComponent,
        DxButtonComponent,
        DxDropDownButtonComponent,
        MeDropDownButtonDirective,
        MeButtonDirective,
      ],
      imports: [DxToolbarModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description:
        'Меняет размер самого <code>toolbar</code> и размер кнопки <code>overflow</code при переполнении.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    background: {
      control: 'boolean',
      description:
        'При установке значения true добавляет фон, бордер и скругления.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<dx-toolbar meToolbar ${argsToTemplate(args)}>
    <dxi-item location="before">
      <div *dxTemplate>
        <dx-button meButton iconOnly="undo" location="before" [size]="size"></dx-button>
      </div>
    </dxi-item>
    <dxi-item location="before">
      <div *dxTemplate>
        <dx-button meButton iconOnly="redo" location="before" [size]="size"></dx-button>
      </div>
    </dxi-item>

    <dxi-item location="before">
      <div *dxTemplate>
        <div class="me-toolbar-separator"></div>
      </div>
    </dxi-item>

    <dxi-item location="before" locateInMenu="auto" widget="dxDropDownButton">
      <div *dxTemplate>
        <dx-drop-down-button
          meDropDownButton
          [size]="size"
          text="1.35"
          width="100%"
          displayExpr="text"
          keyExpr="lineHeight"
          [items]="lineHeights"
          [selectedItemKey]="lineHeight"
          stylingMode="contained"
        ></dx-drop-down-button>
      </div>
    </dxi-item>

    <dxi-item location="before" locateInMenu="auto" widget="dxSelectBox">
      <div *dxTemplate>
        <dx-drop-down-button
          meDropDownButton
          [size]="size"
          width="100%"
          text="Font"
          [useSelectMode]="false"
          displayExpr="text"
          keyExpr="text"
          [items]="fontFamilies"
          [selectedItemKey]="lineHeight"
          stylingMode="contained"
        ></dx-drop-down-button>
      </div>
    </dxi-item>

    <dxi-item location="before" locateInMenu="auto" menuItemTemplate="menuSeparatorTemplate">
      <div *dxTemplate>
        <div class="me-toolbar-separator"></div>
      </div>
    </dxi-item>

    <dxi-item location="before" locateInMenu="auto" widget="dxSelectBox">
      <div *dxTemplate>
        <dx-drop-down-button
          meDropDownButton
          [size]="size"
          width="100%"
          text="Normal Text"
          [useSelectMode]="false"
          displayExpr="text"
          keyExpr="text"
          [items]="headings"
          [selectedItemKey]="lineHeight"
          stylingMode="contained"
        ></dx-drop-down-button>
      </div>
    </dxi-item>

    <dxi-item location="before" locateInMenu="auto" menuItemTemplate="menuSeparatorTemplate">
      <div *dxTemplate>
        <div class="me-toolbar-separator"></div>
      </div>
    </dxi-item>

    <dxi-item location="before" locateInMenu="auto" widget="dxButton" showText="inMenu">
      <div *dxTemplate>
        <dx-button meButton iconOnly="link" text="Link" [size]="size"></dx-button>
      </div>
    </dxi-item>

    <dxi-item location="before" locateInMenu="auto" showText="inMenu" widget="dxButton">
      <div *dxTemplate>
        <dx-button meButton iconOnly="add_photo_alternate" text="Add image" [size]="size"></dx-button>
      </div>
    </dxi-item>

    <dxi-item location="after" widget="dxButton" showText="inMenu">
      <div *dxTemplate>
        <dx-button meButton iconOnly="attach_file" text="Attach" [size]="size"></dx-button>
      </div>
    </dxi-item>

    <dxi-item locateInMenu="always" widget="dxButton" showText="inMenu">
      <div *dxTemplate>
        <dx-button meButton iconOnly="help" text="About" [size]="size"></dx-button>
      </div>
    </dxi-item>
</dx-toolbar>`,
  }),
} as Meta<MeToolbarDirective | DxToolbarComponent>;

type Story = StoryObj<MeToolbarDirective | DxToolbarComponent>;

export const Default: Story = {
  args: {
    size: 'medium',
    background: false,
  },
};
