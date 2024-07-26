import { Meta, Story } from '@storybook/angular';
import { DxButtonModule, DxNumberBoxModule, DxSelectBoxModule, DxTextBoxModule, DxToastModule } from 'devextreme-angular';
import { MeToastComponent } from '../app/me-toast/me-toast.component';

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
