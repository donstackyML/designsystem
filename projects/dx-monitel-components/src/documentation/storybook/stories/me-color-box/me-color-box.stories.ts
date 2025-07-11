import {Meta, moduleMetadata, StoryObj} from "@storybook/angular";
import {DxColorBoxComponent, DxColorBoxModule} from "devextreme-angular";
import {MeColorBoxDirective} from "../../../../lib/directives/me-color-box/me-color-box.directive";
import {StoryProps} from "@storybook/blocks";

export default {
  title: 'Components/ColorBox',
  decorators: [
    moduleMetadata({
      imports: [DxColorBoxModule],
      declarations: [MeColorBoxDirective],
    })
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'The disabled value',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
      }
    }
  },
  args: {
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
    <dx-color-box meColorBox [disabled]="disabled"></dx-color-box>`
  })
} satisfies Meta<MeColorBoxDirective | DxColorBoxComponent>;

type Story = StoryObj<StoryProps>

export const Default: Story = {};
