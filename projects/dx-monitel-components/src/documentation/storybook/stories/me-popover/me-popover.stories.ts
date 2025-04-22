import { Component, Input } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxButtonModule } from 'devextreme-angular';
import { DxPopoverModule } from 'devextreme-angular/ui/popover';
import { AnimationConfig } from 'devextreme/animation/fx';
import { MeButtonDirective, MePopoverDirective } from '../../../../public-api';
import { Position } from 'devextreme/common';
import { PositionConfig } from 'devextreme/animation/position';

@Component({
  selector: 'me-popover-demo',
  template: `
    <div class="dx-widget container">
      <a *ngIf="showEvent !== 'click'" id="popoverTarget">{{ triggerText }}</a>
      <dx-button
        *ngIf="showEvent === 'click'"
        meButton
        [text]="triggerText"
        id="popoverTarget"
      ></dx-button>
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
        [animation]="animation"
      >
        <div *dxTemplate="let data of 'content'">
          {{ content }}
        </div>

        <ng-container *ngIf="titleTemplate">
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
        </ng-container>
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
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 20px;
      }
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
  @Input() colorMode: 'default' | 'alternate' | 'light' | 'dark' = 'default';
  @Input() showEvent?: string | { name?: string; delay?: number } =
    'mouseenter';
  @Input() hideEvent?: string | { name?: string; delay?: number } =
    'mouseleave';
  @Input() position: Position | PositionConfig = {
    my: 'top',
    at: 'bottom',
    collision: 'fit flip',
  };
  @Input() width: number | string = 'auto';
  @Input() maxWidth: number | string | null = null;
  @Input() minWidth: number | string | null = null;
  @Input() height: number | string = 'auto';
  @Input() minHeight: number | string | null = null;
  @Input() maxHeight: number | string | null = null;
  @Input() showTitle: boolean = false;
  @Input() title: string = '';
  @Input() titleTemplate?: string;
  @Input() shading: boolean = false;
  @Input() shadingColor: string = '';
  @Input() content: string = 'Содержимое поповера';
  @Input() showCloseButton: boolean = false;
  @Input() hideOnOutsideClick: boolean = true;
  @Input() enableBodyScroll: boolean = true;
  @Input() showToolbarItems: boolean = false;

  @Input() animation: { hide: AnimationConfig; show: AnimationConfig } = {
    hide: { type: 'fade', to: 0 },
    show: { type: 'fade', from: 0, to: 1 },
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

export default {
  title: 'Components/Popover',
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
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    colorMode: {
      control: 'select',
      options: ['light', 'dark', 'default', 'alternate'],
      description: 'Цветовая тема поповера',
      table: {
        type: { summary: "'light' | 'dark' | 'default' | 'alternate'" },
        defaultValue: { summary: 'default' },
      },
    },
    showEvent: {
      control: 'select',
      options: ['mouseenter', 'click', 'focus'],
      description: 'Событие, при котором поповер будет показываться.',
      table: {
        type: {
          summary: 'string | { name?: string, delay?: number } | undefined',
        },
        defaultValue: { summary: 'mouseenter' },
      },
    },
    hideEvent: {
      control: 'select',
      options: ['mouseleave', 'click', 'blur'],
      description: 'Событие, при котором поповер будет скрываться.',
      table: {
        type: {
          summary: 'string | { name?: string, delay?: number } | undefined',
        },
        defaultValue: { summary: 'mouseleave' },
      },
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция поповера относительно целевого элемента.',
      table: {
        type: { summary: "'top', 'bottom', 'left', 'right' | PositionConfig" },
        defaultValue: {
          summary:
            "{ my: 'top center', at: 'bottom center', collision: 'fit flip' }",
        },
      },
    },
    showTitle: {
      control: 'boolean',
      description: 'Показывать ли заголовок поповера.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      control: 'text',
      description: 'Текст заголовка поповера.',
      if: { arg: 'showTitle', truthy: true },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    shading: {
      control: 'boolean',
      description: 'Включить затенение фона при показе поповера.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    shadingColor: {
      control: 'color',
      description: 'Цвет затенения фона.',
      if: { arg: 'shading', truthy: true },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description:
        'Показывать ли кнопку закрытия поповера. Работает только если `showTitle=true` и в `title` не используется шаблон.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideOnOutsideClick: {
      control: 'boolean',
      description: 'Скрывать ли поповер при клике вне его области.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    enableBodyScroll: {
      control: 'boolean',
      description: 'Разрешить скролл страницы при открытом поповере.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showToolbarItems: {
      control: 'boolean',
      description: 'Показывать ли панель инструментов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    animation: {
      control: 'object',
      description: 'Настройки анимации появления и исчезновения поповера.',
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: `
          {
            hide: { type: 'fade', to: 0 },
            show: { type: 'fade', from: 0, to: 1 }
          }`,
        },
      },
    },
    minHeight: {
      control: 'text',
      description: 'Минимальная высота поповера.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '280px' },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Максимальная высота поповера.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '80vh' },
      },
    },
    minWidth: {
      control: 'text',
      description: 'Минимальная ширина поповера.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '360px' },
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Максимальная ширина поповера.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота поповера.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина поповера.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '360px' },
      },
    },
  },
  args: {
    content: 'Содержимое поповера',
    title: '',
    size: 'medium',
    colorMode: 'dark',
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    position: { my: 'top', at: 'bottom', collision: 'fit flip' },
    width: 'auto',
    showTitle: false,
    shading: false,
    shadingColor: '',
    animation: {
      hide: { type: 'fade', to: 0 },
      show: { type: 'fade', from: 0, to: 1 },
    },
  },
} satisfies Meta<PopoverDemoComponent>;

type Story = StoryObj<PopoverDemoComponent>;

export const Default: Story = {};

export const ColorModeDefault: Story = {
  args: {
    colorMode: 'default',
  },
};

export const ColorModeDark: Story = {
  args: {
    colorMode: 'dark',
  },
};

export const ColorModeLight: Story = {
  args: {
    colorMode: 'light',
  },
};

export const ColorModeAlternate: Story = {
  args: {
    colorMode: 'alternate',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const ContentWithTitle: Story = {
  args: {
    title: 'Заголовок',
    showTitle: true,
  },
};

export const ContentWithTitleAndCloseButton: Story = {
  args: {
    showTitle: true,
    title: 'Заголовок',
    showCloseButton: true,
  },
};

export const WithCustomTitleContentAndToolbarItems: Story = {
  args: {
    triggerText: 'Нажмите для показа поповера',
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
