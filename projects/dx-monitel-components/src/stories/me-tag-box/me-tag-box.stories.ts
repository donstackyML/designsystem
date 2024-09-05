import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxTagBoxModule } from 'devextreme-angular';
import { MeTagBoxDirective } from '../../public-api';

export default {
  title: 'Components/TagBox(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeTagBoxDirective],
      imports: [DxTagBoxModule],
    }),
  ],
  argTypes: {
    items: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    label: {
      control: 'text',
    },
    labelMode: {
      control: 'select',
      options: ['static', 'floating', 'hidden'],
    },
    activeStateEnabled: {
      control: 'boolean',
      defaultValue: true,
    },
    applyValueMode: {
      control: 'select',
      options: ['instantly', 'useButtons'],
    },
    fieldTemplate: {
      control: 'text',
      description: 'Шаблон для отображения.',
    },
    disabled: {
      control: 'boolean',
    },
    hoverStateEnabled: {
      control: 'boolean',
    },
    focusStateEnabled: {
      control: 'boolean',
    },
    isValid: {
      control: 'boolean',
    },
    grouped: {
      control: 'boolean',
      description: 'Указывает, следует ли группировать элементы данных',
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    hideSelectedItems: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    readOnly: {
      control: 'boolean',
    },
    searchEnabled: {
      control: 'boolean',
    },
    showClearButton: {
      control: 'boolean',
    },
    showSelectionControls: {
      control: 'boolean',
    },
    stylingMode: {
      control: 'select',
      options: ['outlined', 'underlined', 'filled'],
    },
  },
  args: {
    // items: [
    //   {
    //     text: 'Пункт 1',
    //     html: '<div><i class="dx-icon dx-icon-folder"></i> Пункт 1</div>',
    //   },
    //   {
    //     text: 'Пункт 2',
    //     html: '<div><i class="dx-icon dx-icon-folder"></i> Пункт 2</div>',
    //   },
    //   {
    //     text: 'Пункт 3',
    //     html: '<div><i class="dx-icon dx-icon-folder"></i> Пункт 3</div>',
    //   },
    //   {
    //     text: 'Пункт 4',
    //     html: '<div><i class="dx-icon dx-icon-folder"></i> Пункт 4</div>',
    //   },
    //   {
    //     text: 'Пункт 5',
    //     html: '<div><i class="dx-icon dx-icon-folder"></i> Пункт 5</div>',
    //   },
    // ],
    items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
    size: 'small',
    width: '400px',
    stylingMode: 'filled',
    applyValueMode: 'instantly',
    grouped: false,
    searchEnabled: true,
    label: 'Label',
    labelMode: 'hidden',
    placeholder: 'Выберите...',
    showClearButton: false,
    showSelectionControls: false,
    hideSelectedItems: false,
    activeStateEnabled: true,
    hoverStateEnabled: true,
    focusStateEnabled: true,
    disabled: false,
    isValid: true,
    readOnly: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
		<dx-tag-box
						meTagBox
						[items]="items"
		        [(size)]="size"
		        [(activeStateEnabled)]="activeStateEnabled"
		        [(applyValueMode)]="applyValueMode"
		        [(fieldTemplate)]="fieldTemplate"
		        [(disabled)]="disabled"
		        [(hoverStateEnabled)]="hoverStateEnabled"
		        [(focusStateEnabled)]="focusStateEnabled"
		        [(isValid)]="isValid"
		        [(grouped)]="grouped"
		        [(height)]="height"
		        [(width)]="width"
		        [(hideSelectedItems)]="hideSelectedItems"
		        [(label)]="label"
		        [(labelMode)]="labelMode"
		        [(placeholder)]="placeholder"
		        [(readOnly)]="readOnly"
		        [(searchEnabled)]="searchEnabled"
		        [(showClearButton)]="showClearButton"
		        [(showSelectionControls)]="showSelectionControls"
		        [(stylingMode)]="stylingMode"
        ></dx-tag-box>
		`,
  }),
} as Meta;

// <dx-tag-box fieldTemplate="field">
//     <div *dxTemplate="let data of 'field'">
//         {{ data }}
//     </div>
// </dx-tag-box>

export const MeTagBox: StoryObj = {};
