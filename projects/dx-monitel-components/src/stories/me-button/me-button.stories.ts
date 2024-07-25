import { argsToTemplate, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MeButtonDirective } from '../../public-api';
import { DxButtonComponent } from 'devextreme-angular';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MeButtonDirective> = {
  title: 'Directives/meButton',
  component: MeButtonDirective,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MeButtonDirective, DxButtonComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<dx-button meButton ${argsToTemplate(args)}></dx-button>`,
  }),
};

export default meta;
type Story = StoryObj<MeButtonDirective>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    type: 'default',
    text: 'Button',
    size: 'medium',
  },
};
