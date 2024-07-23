import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { DxLoadIndicatorModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { LoadIndicatorDemoComponent } from '../app/load-indicator-demo/load-indicator-demo.component';
import { MeLoadIndicatorDirective } from '../app/directives/load-indicator.directive';

export default {
  title: 'Example/LoadIndicatorDemoComponent',
  component: LoadIndicatorDemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoadIndicatorDemoComponent, MeLoadIndicatorDirective],
      imports: [
        BrowserModule,
        DxLoadIndicatorModule
      ],
    }),
  ],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    customClass: { control: 'text' },
    height: { control: 'text' },
    width: { control: 'text' },
    indicatorSrc: { control: 'text' },
    hint: { control: 'text' },
    elementAttr: { control: 'object' },
    rtlEnabled: { control: 'boolean' },
    visible: { control: 'boolean' },
  },
} as Meta;

const Template: Story<LoadIndicatorDemoComponent> = (args: LoadIndicatorDemoComponent) => ({
  component: LoadIndicatorDemoComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  customClass: '',
  height: '40px',
  width: '40px',
  indicatorSrc: '',
  hint: '',
  elementAttr: {},
  rtlEnabled: false,
  visible: true,
};
