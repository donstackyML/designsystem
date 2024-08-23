import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { MePopoverDirective } from '../../public-api';

interface PopoverProps {
  showEvent: string;
  hideEvent: string;
  position: string;
  size: 'small' | 'medium' | 'large';
  width: number;
  maxWidth?: number;
  showTitle: boolean;
  title: string;
  shading: boolean;
  shadingColor: string;
  content: string;
}

const meta: Meta<PopoverProps> = {
  title: 'Components/Popover(RC)',
  component: MePopoverDirective,
  decorators: [
    moduleMetadata({
      declarations: [MePopoverDirective],
      imports: [DxPopoverModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 20px;">
        <a id="popoverTarget">Наведите для показа поповера</a>
        <dx-popover
          mePopover
          target="#popoverTarget"
          [showEvent]="showEvent"
          [hideEvent]="hideEvent"
          [position]="position"
          [width]="width"
          [maxWidth]="maxWidth"
          [showTitle]="showTitle"
          [title]="title"
          [shading]="shading"
          [shadingColor]="shadingColor"
          [size]="size"
        >
          <div *dxTemplate="let data of 'content'">
            {{ content }}
          </div>
        </dx-popover>
      </div>
    `,
  }),
  argTypes: {
    showEvent: { control: 'text' },
    hideEvent: { control: 'text' },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    width: { control: 'number' },
    maxWidth: { control: 'number' },
    showTitle: { control: 'boolean' },
    title: { control: 'text' },
    shading: { control: 'boolean' },
    shadingColor: { control: 'color' },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<PopoverProps>;

export const Default: Story = {
  args: {
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    position: 'top',
    size: 'medium',
    width: 300,
    showTitle: false,
    title: '',
    shading: false,
    shadingColor: '',
    content: 'Это содержимое поповера по умолчанию.',
  },
};

export const WithTitle: Story = {
  args: {
    ...Default.args,
    position: 'bottom',
    showTitle: true,
    title: 'Заголовок поповера',
    maxWidth: 400,
    content: 'Это поповер с заголовком и ограничением максимальной ширины.',
  },
};

export const WithOverlay: Story = {
  args: {
    ...Default.args,
    showEvent: 'click',
    hideEvent: 'click',
    shading: true,
    shadingColor: 'rgba(0, 0, 0, 0.5)',
    content: 'Это поповер с затенением фона.',
  },
};
