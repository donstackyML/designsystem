import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { MeToastComponent } from '../app/components/me-toast/me-toast.component';
import {
  DxButtonModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxToastModule,
} from 'devextreme-angular';

export default {
  title: 'Example/MeToastComponent',
  component: MeToastComponent,
  decorators: [
    moduleMetadata({
      declarations: [MeToastComponent],
      imports: [
        DxButtonModule,
        DxTextBoxModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxToastModule,
      ],
    }),
  ],
  argTypes: {
    message: { control: 'text' },
    displayTime: { control: 'number' },
    position: { control: 'text' },
    icon: { control: 'text' },
  },
} as Meta;

const Template: Story<MeToastComponent> = (args: MeToastComponent) => ({
  component: MeToastComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  message: 'This is a toast notification!',
  displayTime: 3000,
  position: 'bottom right',
  icon: 'dx-icon-info',
};
