import {
  Meta,
  StoryObj,
  moduleMetadata,
} from '@storybook/angular';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { MePopoverDirective } from '../../public-api';
import { Component, Input } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'me-popover-demo',
  template: `
    <div style="padding: 20px;">
      <a id="popoverTarget">{{triggerText}}</a>
      <dx-popover
        mePopover
        target="#popoverTarget"
        [showEvent]="showEvent"
        [hideEvent]="hideEvent"
        [width]="width"
        [showTitle]="showTitle"
        [title]="title"
        [shading]="shading"
        [shadingColor]="shadingColor"
        [showCloseButton]="showCloseButton"
        [hideOnOutsideClick]="hideOnOutsideClick"
        [enableBodyScroll]="enableBodyScroll"
      >
        <div *dxTemplate="let data of 'content'">
          {{content}}
        </div>

        <ng-container *dxTemplate="let data of 'titleTemplate'">
          <div *ngIf="titleTemplate">
            {{titleTemplate}}
          </div>
        </ng-container>

        <ng-container *ngIf="showToolbarItems">
          <dxi-toolbar-item
            widget="dxButton"
            toolbar="bottom"
            location="before"
            [options]="acceptButton"
          >
          </dxi-toolbar-item>
        </ng-container>
      </dx-popover>
    </div>
  `
})
export class PopoverDemoComponent {
  @Input() triggerText: string = 'Наведите для показа поповера';
  @Input() size: string = 'medium';
  @Input() showEvent: string = 'mouseenter';
  @Input() hideEvent: string = 'mouseleave';
  @Input() position: string = 'bottom';
  @Input() width: number = 300;
  @Input() maxWidth?: number;
  @Input() showTitle: boolean = false;
  @Input() title: string = '';
  @Input() titleTemplate?: string;
  @Input() shading: boolean = false;
  @Input() shadingColor: string = '';
  @Input() content: string = 'Это содержимое поповера по умолчанию.';
  @Input() showCloseButton: boolean = false;
  @Input() hideOnOutsideClick: boolean = true;
  @Input() enableBodyScroll: boolean = true;
  @Input() showToolbarItems: boolean = false;

  @Input() animation = {
    show: { type: 'fade', duration: 0 },
    hide: { type: 'fade', duration: 0 }
  };

  acceptButton = {
    icon: '',
    stylingMode: 'filled',
    text: 'Принять',
    onClick: () => {
      console.log('Принять');
    }
  };
}

const meta: Meta<PopoverDemoComponent> = {
  title: 'Components/Popover(RC)',
  component: PopoverDemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [MePopoverDirective, PopoverDemoComponent],
      imports: [DxPopoverModule, DxButtonModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер поповера.',
      defaultValue: 'medium'
    },
    showEvent: {
      control: 'select',
      options: ['mouseenter', 'click', 'focus'],
      description: 'Событие, при котором поповер будет показываться.',
      defaultValue: 'mouseenter'
    },
    hideEvent: {
      control: 'select',
      options: ['mouseleave', 'click', 'blur'],
      description: 'Событие, при котором поповер будет скрываться.',
      defaultValue: 'mouseleave'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция поповера относительно целевого элемента.',
      defaultValue: 'bottom'
    },
    width: {
      control: 'number',
      description: 'Ширина поповера в пикселях.',
      defaultValue: 300
    },
    maxWidth: {
      control: 'number',
      description: 'Максимальная ширина поповера в пикселях.'
    },
    showTitle: {
      control: 'boolean',
      description: 'Показывать ли заголовок поповера.',
      defaultValue: false
    },
    title: {
      control: 'text',
      description: 'Текст заголовка поповера.',
      if: { arg: 'showTitle', truthy: true }
    },
    titleTemplate: {
      control: 'text',
      description: 'Шаблон заголовка поповера.',
      if: { arg: 'showTitle', truthy: true }
    },
    shading: {
      control: 'boolean',
      description: 'Включить затенение фона при показе поповера.',
      defaultValue: false
    },
    shadingColor: {
      control: 'color',
      description: 'Цвет затенения фона.',
      if: { arg: 'shading', truthy: true }
    },
    content: {
      control: 'text',
      description: 'Содержимое поповера.',
      defaultValue: 'Это содержимое поповера по умолчанию.'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Показывать ли кнопку закрытия поповера.',
      defaultValue: false
    },
    hideOnOutsideClick: {
      control: 'boolean',
      description: 'Скрывать ли поповер при клике вне его области.',
      defaultValue: true
    },
    enableBodyScroll: {
      control: 'boolean',
      description: 'Разрешить скролл страницы при открытом поповере.',
      defaultValue: true
    },
    showToolbarItems: {
      control: 'boolean',
      description: 'Показывать ли панель инструментов.',
      defaultValue: false
    },
    animation: {
      control: 'object',
      description: 'Настройки анимации появления и исчезновения поповера.',
    },
    triggerText: {
      control: 'text',
      description: 'Текст триггера поповера.',
      defaultValue: 'Наведите для показа поповера'
    }
  }
};

export default meta;
type Story = StoryObj<PopoverDemoComponent>;

export const Default: Story = {
  args: {
    size: 'medium',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    position: 'bottom',
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
  }
};

export const WithTitleAndShading: Story = {
  args: {
    ...Default.args,
    showTitle: true,
    title: 'Заголовок поповера',
    shading: true,
    shadingColor: 'rgba(0, 0, 0, 0.3)',
    showEvent: 'click',
    hideEvent: 'click',
    showCloseButton: true,
    content: 'Поповер с заголовком и затенением фона.'
  }
};

export const WithToolbar: Story = {
  args: {
    ...Default.args,
    showToolbarItems: true,
    showEvent: 'click',
    hideEvent: 'click',
    content: 'Поповер с панелью инструментов внизу.'
  }
};
