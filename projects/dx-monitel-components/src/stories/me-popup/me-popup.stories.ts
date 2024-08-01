import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent, DxPopupComponent } from 'devextreme-angular';
import { MeButtonDirective, MePopupDirective } from '../../public-api';

export default {
  title: 'Components/mePopup',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [
        MePopupDirective,
        DxPopupComponent,
        MeButtonDirective,
        DxButtonComponent,
      ],
    }),
    // componentWrapperDecorator(
    //   (story) => `<div id="myWrapper" style="height: 300px">${story}</div>`
    // ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
  args: {
    dragEnabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<dx-button meButton [text]="'show Popup'" (onClick)="onShowPopup()"></dx-button>
    <dx-popup mePopup ${argsToTemplate(args)}></dx-popup>`,
    // template: `<div id="myWrapper" style="height: 300px; "><dx-popup mePopup ${argsToTemplate(
    //   args
    // )}></dx-popup></div>`,
  }),
} as Meta<DxPopupComponent | MePopupDirective>;

const onShowPopup = () => {
  console.log('123');
};

type Story = StoryObj<DxPopupComponent | MePopupDirective>;

export const Default: Story = {
  args: {
    visible: false,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      of: '#myWrapper',
      // boundary: '',
      // collision: 'fit',
    },
  },
};

export const Scroll: Story = {
  args: {
    visible: false,
    size: 'medium',
    position: {
      my: 'center',
      at: 'center',
      // of: '#myWrapper',
      // boundary: '',
      // collision: 'fit',
    },
  },
};
