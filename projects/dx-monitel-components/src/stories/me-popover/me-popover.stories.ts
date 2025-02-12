import { Component, Input } from '@angular/core';
import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxButtonModule } from 'devextreme-angular';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { MeButtonDirective, MePopoverDirective } from '../../public-api';

@Component({
  selector: 'me-popover-demo',
  template: `
    <div style="padding: 20px;" class="dx-widget">
      <a id="popoverTarget">{{ triggerText }}</a>
      <dx-popover
        mePopover
        target="#popoverTarget"
        [size]="size"
        [colorMode]="colorMode"
        [showEvent]="showEvent"
        [hideEvent]="hideEvent"
        [width]="width"
        [showTitle]="showTitle"
        [title]="title"
        [position]="position"
        [shading]="shading"
        [shadingColor]="shadingColor"
        [showCloseButton]="showCloseButton"
        [hideOnOutsideClick]="hideOnOutsideClick"
        [enableBodyScroll]="enableBodyScroll"
      >
        <div *dxTemplate="let data of 'content'">
          {{ content }}
        </div>

        <div *dxTemplate="let data of 'title'">
          <div class="title-wrapper">
            <div class="title-template-wrapper">
              <div class="title-template-image"></div>
              <dx-button
                meButton
                [size]="size"
                stylingMode="text"
                type="normal"
                iconOnly="close"
              ></dx-button>
            </div>
            <h3 class="me-title-header1" style="margin: 0;">
              {{ titleTemplate }}
            </h3>
          </div>
        </div>
        <ng-container *ngIf="showToolbarItems">
          <dxi-toolbar-item toolbar="bottom" location="after">
            <dx-button
              meButton
              [text]="acceptButton.text"
              [size]="size"
              stylingMode="filled"
              type="default"
              (click)="acceptButton.onClick()"
            >
            </dx-button>
          </dxi-toolbar-item>
          <dxi-toolbar-item toolbar="bottom" location="after">
            <dx-button
              meButton
              [text]="cancelButton.text"
              [size]="size"
              stylingMode="filled"
              type="normal"
              (click)="cancelButton.onClick()"
            >
            </dx-button>
          </dxi-toolbar-item>
        </ng-container>
      </dx-popover>
    </div>
  `,
  styles: [
    `
      .title-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .title-template-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;

        .dx-button {
          align-self: flex-start;
        }
      }
      .title-template-image {
        width: 100%;
        aspect-ratio: 1.72;
        background: linear-gradient(
          135deg,
          #ff8a00 0%,
          #9c4dff 50%,
          #4a7dff 100%
        );
        border-radius: 3px;
      }
      .me-title-header1 {
        color: var(--popover-color);
      }
    `,
  ],
})
class PopoverDemoComponent {
  @Input() triggerText: string = 'Наведите для показа поповера';
  @Input() size: string = 'medium';
  @Input() colorMode: string = 'dark';
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
    hide: { type: 'fade', duration: 0 },
  };

  acceptButton = {
    icon: '',
    stylingMode: 'filled',
    text: 'Принять',
    onClick: () => {
      console.log('Принять');
    },
  };

  cancelButton = {
    icon: '',
    stylingMode: 'filled',
    text: 'Отменить',
    onClick: () => {
      console.log('Отменить');
    },
  };
}

const meta: Meta<PopoverDemoComponent> = {
  title: 'Components/Popover(RC)',
  component: PopoverDemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        MePopoverDirective,
        MeButtonDirective,
        PopoverDemoComponent,
      ],
      imports: [DxPopoverModule, DxButtonModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер поповера.',
      defaultValue: 'medium',
    },
    colorMode: {
      control: 'select',
      options: ['light', 'dark', 'default', 'alternate'],
      description: 'Цветовая схема поповера.',
      defaultValue: 'default',
    },
    showEvent: {
      control: 'select',
      options: ['mouseenter', 'click', 'focus'],
      description: 'Событие, при котором поповер будет показываться.',
      defaultValue: 'mouseenter',
    },
    hideEvent: {
      control: 'select',
      options: ['mouseleave', 'click', 'blur'],
      description: 'Событие, при котором поповер будет скрываться.',
      defaultValue: 'mouseleave',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция поповера относительно целевого элемента.',
      defaultValue: 'bottom',
    },
    width: {
      control: 'number',
      description: 'Ширина поповера в пикселях.',
      defaultValue: 300,
    },
    maxWidth: {
      control: 'number',
      description: 'Максимальная ширина поповера в пикселях.',
    },
    showTitle: {
      control: 'boolean',
      description: 'Показывать ли заголовок поповера.',
      defaultValue: false,
    },
    title: {
      control: 'text',
      description: 'Текст заголовка поповера.',
      if: { arg: 'showTitle', truthy: true },
    },
    titleTemplate: {
      control: 'text',
      description: 'Шаблон заголовка поповера.',
      if: { arg: 'showTitle', truthy: true },
    },
    shading: {
      control: 'boolean',
      description: 'Включить затенение фона при показе поповера.',
      defaultValue: false,
    },
    shadingColor: {
      control: 'color',
      description: 'Цвет затенения фона.',
      if: { arg: 'shading', truthy: true },
    },
    content: {
      control: 'text',
      description: 'Содержимое поповера.',
      defaultValue: 'Это содержимое поповера по умолчанию.',
    },
    showCloseButton: {
      control: 'boolean',
      description:
        'Показывать ли кнопку закрытия поповера. Работает только если `showTitle=true` и в `title` не используется шаблон.',
      defaultValue: false,
    },
    hideOnOutsideClick: {
      control: 'boolean',
      description: 'Скрывать ли поповер при клике вне его области.',
      defaultValue: true,
    },
    enableBodyScroll: {
      control: 'boolean',
      description: 'Разрешить скролл страницы при открытом поповере.',
      defaultValue: true,
    },
    showToolbarItems: {
      control: 'boolean',
      description: 'Показывать ли панель инструментов.',
      defaultValue: false,
    },
    animation: {
      control: 'object',
      description: 'Настройки анимации появления и исчезновения поповера.',
    },
    triggerText: {
      control: 'text',
      description: 'Текст триггера поповера.',
      defaultValue: 'Наведите для показа поповера',
    },
  },
};

export default meta;
type Story = StoryObj<PopoverDemoComponent>;

export const Default: Story = {
  args: {
    size: 'medium',
    colorMode: 'default',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    position: 'right',
    width: 300,
    showTitle: false,
    title: '',
    shading: false,
    shadingColor: '',
    content: 'Это содержимое поповера по умолчанию.',
    animation: {
      show: { type: 'fade', duration: 0 },
      hide: { type: 'fade', duration: 0 },
    },
  },
};

export const DefaultWithCloseButton: Story = {
  args: {
    triggerText: 'Наведите для показа поповера',
    size: 'medium',
    colorMode: 'default',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    position: 'right',
    width: 300,
    showTitle: true,
    title: 'Заголовок',
    shading: false,
    shadingColor: '',
    showCloseButton: true,
    content: 'Это содержимое поповера по умолчанию.',
    animation: {
      show: { type: 'fade', duration: 0 },
      hide: { type: 'fade', duration: 0 },
    },
  },
  render: (args) => ({
    props: args,
    template: `
    <div style="padding: 20px;" class="dx-widget">
      <a id="popoverTarget">{{ triggerText }}</a>
      <dx-popover
        mePopover
        target="#popoverTarget"
        [size]="size"
        [colorMode]="colorMode"
        [showEvent]="showEvent"
        [hideEvent]="hideEvent"
        [width]="width"
        [showTitle]="showTitle"
        [title]="title"
        [position]="position"
        [shading]="shading"
        [shadingColor]="shadingColor"
        [showCloseButton]="showCloseButton"
        [hideOnOutsideClick]="hideOnOutsideClick"
        [enableBodyScroll]="enableBodyScroll"
      >
        <div *dxTemplate="let data of 'content'">
          {{ content }}
        </div>

        <ng-container *ngIf="showToolbarItems">
          <dxi-toolbar-item
            widget="dxButton"
            toolbar="bottom"
            location="after"
            [options]="acceptButton"
          >
          </dxi-toolbar-item>
          <dxi-toolbar-item
            widget="dxButton"
            toolbar="bottom"
            location="after"
            [options]="cancelButton"
          >
          </dxi-toolbar-item>
        </ng-container>
      </dx-popover>
    </div>
  `,
  }),
};

export const WithContent: Story = {
  args: {
    ...Default.args,
    triggerText: 'Нажмите для показа поповера',
    colorMode: 'light',
    showTitle: true,
    title: undefined,
    titleTemplate: 'Заголовок с картинкой',
    size: 'small',
    showToolbarItems: true,
    shading: true,
    showEvent: 'click',
    hideEvent: 'click',
    showCloseButton: true,
    content:
      'Трансформатор - это устройство, способное изменять напряжение переменного тока.',
  },
};
