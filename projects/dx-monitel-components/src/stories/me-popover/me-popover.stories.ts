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
  animation: any;
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
          [animation]="animation"
        >
          <div *dxTemplate="let data of 'content'">
            {{ content }}
          </div>
        </dx-popover>
      </div>
    `,
  }),
  argTypes: {
    showEvent: {
      control: 'select',
      options: ['mouseenter', 'click', 'focus'],
      description: 'Событие, при котором поповер будет показываться.'
    },
    hideEvent: {
      control: 'select',
      options: ['mouseleave', 'click', 'blur'],
      description: 'Событие, при котором поповер будет скрываться.'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция поповера относительно целевого элемента.'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер поповера.'
    },
    width: {
      control: 'number',
      description: 'Ширина поповера в пикселях.'
    },
    maxWidth: {
      control: 'number',
      description: 'Максимальная ширина поповера в пикселях.'
    },
    showTitle: {
      control: 'boolean',
      description: 'Показывать ли заголовок поповера.'
    },
    title: {
      control: 'text',
      description: 'Текст заголовка поповера.'
    },
    shading: {
      control: 'boolean',
      description: 'Включить затенение фона при показе поповера.'
    },
    shadingColor: {
      control: 'color',
      description: 'Цвет затенения фона.'
    },
    content: {
      control: 'text',
      description: 'Содержимое поповера.'
    },
    animation: {
      control: 'object',
      description: 'Настройки анимации появления и исчезновения поповера.'
    },
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
    animation: {
      show: { type: 'fade', duration: 0 },
      hide: { type: 'fade', duration: 0 }
    }
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
