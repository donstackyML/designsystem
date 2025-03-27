import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { DxButtonComponent } from 'devextreme-angular/ui/button';

import { MeButtonDirective, MeChipComponent, MeProgressBarDirective, MeTextBoxDirective, MeTooltipDirective } from '../../../../public-api';
import { DxProgressBarComponent, DxTextBoxComponent } from 'devextreme-angular';

export default {
  title: 'Components/Tooltip/Tooltip Directive',
  decorators: [
    moduleMetadata({
      declarations: [
        MeTooltipDirective,
        DxButtonComponent,
        MeButtonDirective
      ],
    }),
  ],
  argTypes: {
    meTooltip: {
      control: 'text',
      description: 'Текст или HTML-контент тултипа, который будет отображаться, когда пользователь наведет курсор на целевой элемент',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    tooltipPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция тултипа относительно целевого элемента',
      table: {
        type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
        defaultValue: { summary: 'top' },
      },
    },
    tooltipSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер поповера.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    tooltipColorMode: {
      control: 'select',
      options: ['light', 'dark', 'default', 'alternate'],
      description: 'Цветовая тема поповера',
      table: {
        type: { summary: "'light' | 'dark' | 'default' | 'alternate'" },
        defaultValue: { summary: 'default' },
      },
    },
    tooltipClass: {
      control: 'text',
      description: 'Пользовательский CSS-класс для тултипа, который может быть использован для настройки внешнего вида',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'me-tooltip' },
      },
    },
    tooltipWidth: {
      control: 'number',
      description: 'Ширина тултипа, может быть указана в пикселях (number) или как строка (например, "100px")',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      },
    },
    tooltipMaxWidth: {
      control: 'number',
      description: 'Максимальная ширина тултипа, может быть указана в пикселях (number) или как строка (например, "100px")',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      },
    },
    tooltipHeight: {
      control: 'number',
      description: 'Высота тултипа, может быть указана в пикселях (number) или как строка (например, "100px")',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      },
    },
    tooltipMaxHeight: {
      control: 'number',
      description: 'Максимальная высота тултипа, может быть указана в пикселях (number) или как строка (например, "100px")',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      },
    },
    tooltipShowAnimation: {
      control: 'object',
      description: 'Настройки анимации появления тултипа',
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: '{ type: "fade", from: 0, to: 1, duration: 300 }',
        },
      },
    },
    tooltipHideAnimation: {
      control: 'object',
      description: 'Настройки анимации скрытия тултипа',
      table: {
        type: { summary: 'object' },
        defaultValue: {
          summary: '{ type: "fade", from: 1, to: 0, duration: 300 }',
        },
      },
    },
  },
  args: {
    meTooltip: 'Это базовый тултип',
    tooltipSize: "medium",
    tooltipPosition: 'top',
    tooltipColorMode: 'dark',
    tooltipWidth: 'auto',
    tooltipMaxWidth: 'auto',
    tooltipHeight: 'auto',
    tooltipMaxHeight: 'auto',
    tooltipShowAnimation: {
      type: 'fade',
      from: 0,
      to: 1,
      duration: 300,
    },
    tooltipHideAnimation: {
      type: 'fade',
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
      duration: 300,
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="container">
        <dx-button
        meButton
        text="Наведи, чтобы показался тултип"
        meTooltip
        ${argsToTemplate(args)}
        >
        </dx-button>
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
      `
    ]
  }),
} satisfies Meta<MeTooltipDirective>;

type Story = StoryObj<MeTooltipDirective>;

export const Default: Story = {};

export const ColorModeDefault: Story = {
  args: {
    tooltipColorMode: "default"
  }
};

export const ColorModeDark: Story = {
  args: {
    tooltipColorMode: "dark"
  }
};


export const ColorModeLight: Story = {
  args: {
    tooltipColorMode: "light"
  }
};

export const ColorModeAlternate: Story = {
  args: {
    tooltipColorMode: "alternate"
  }
};

export const SizeSmall: Story = {
  args: {
    tooltipSize: 'small'
  }
};

export const SizeMedium: Story = {
  args: {
    tooltipSize: 'medium'
  }
};

export const SizeLarge: Story = {
  args: {
    tooltipSize: 'large'
  }
};

export const TooltipPositionTop: Story = {
  args: {
    meTooltip: 'Тултип сверху',
    tooltipPosition: 'top',
  },
};

export const TooltipPositionBottom: Story = {
  args: {
    meTooltip: 'Тултип снизу',
    tooltipPosition: 'bottom',
  },
};

export const TooltipPositionLeft: Story = {
  args: {
    meTooltip: 'Тултип слева',
    tooltipPosition: 'left',
  },
};

export const TooltipPositionRight: Story = {
  args: {
    meTooltip: 'Тултип справа',
    tooltipPosition: 'right',
  },
};

export const WithHTMLContent: Story = {
  args: {
    meTooltip: '<strong>Жирный текст</strong> и <em>курсив</em>',
    tooltipPosition: 'bottom',
  },
};

export const WithAnimation: Story = {
  args: {
    meTooltip: 'Анимированный тултип',
    tooltipPosition: 'top',
    tooltipWidth: undefined,
    tooltipMaxWidth: 400,
    tooltipHeight: undefined,
    tooltipMaxHeight: 'auto',
    tooltipShowAnimation: {
      type: 'pop',
      from: { scale: 0.5, opacity: 0 },
      to: { scale: 1, opacity: 1 },
      duration: 300,
    },
    tooltipHideAnimation: {
      type: 'fade',
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
      duration: 300,
    },
  }
};

export const WithImageContent: Story = {
  args: {
    tooltipPosition: 'right',
    tooltipWidth: undefined,
    tooltipMaxWidth: 390,
    tooltipClass: 'me-custom-tooltip-wrapper',
    meTooltip: `
      <div class="me-tooltip-custom">
        <div class="me-tooltip-image"></div>
        <div class="me-tooltip-content">
          <h1 class="me-tooltip-title">Заголовок</h1>
          <p class="me-tooltip-text">Трансформатор - это устройство, способное изменять напряжение переменного тока</p>
        </div>
      </div>
    `,
  },
};

export const WithMaxDimensions: Story = {
  args: {
    meTooltip:
      'Это тултип с ограничением максимальных размеров. Длинный текст будет автоматически переноситься на новую строку при достижении максимальной ширины.',
    tooltipPosition: 'top',
    tooltipSize: 'small',
    tooltipWidth: undefined,
    tooltipMaxWidth: 200,
    tooltipMaxHeight: 200,
    tooltipHeight: undefined,
  }
};

export const WithSomeComponents: Story = {
  decorators: [
    moduleMetadata({
      imports: [MeChipComponent],
      declarations: [
        MeTooltipDirective,
        DxButtonComponent,
        MeButtonDirective,
        DxTextBoxComponent,
        MeTextBoxDirective,
        DxProgressBarComponent,
        MeProgressBarDirective
      ],
    }),
  ],
  args: {
    tooltipSize: "small",
    tooltipColorMode: 'dark',
    tooltipWidth: '220px',
    tooltipShowAnimation: {
      type: 'fade',
      from: 0,
      to: 1,
      duration: 300,
    },
    tooltipHideAnimation: {
      type: 'fade',
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
      duration: 300,
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="container">
        <section>
          <h2 class="me-title-header1">Кнопка с тултипом</h2>
          <dx-button
            meButton
            text="Нажми меня"
            size="large"
            [meTooltip]="'Это кнопка, которая показывает подсказку при наведении.'"
            [tooltipSize]="tooltipSize"
            [tooltipPosition]="'top'"
            [tooltipColorMode]="tooltipColorMode"
            [tooltipWidth]="tooltipWidth"
          ></dx-button>
        </section>

        <section>
          <h2 class="me-title-header1">Текстбокс с тултипом</h2>
          <dx-text-box
            meTextBox
            placeholder="Введите текст..."
            [meTooltip]="'Подсказка: введите свое имя или сообщение здесь.'"
            [tooltipSize]="tooltipSize"
            [tooltipPosition]="'right'"
            [tooltipColorMode]="tooltipColorMode"
            [tooltipWidth]="tooltipWidth"
          ></dx-text-box>
        </section>

        <section>
          <h2 class="me-title-header1">Чип с тултипом</h2>
          <me-chip
            label="Выбранные элементы"
            [removable]="false"
            [meTooltip]="'Чип, который отображает количество элементов. Он может быть использован в различных списках.'"
            [tooltipSize]="tooltipSize"
            [tooltipPosition]="'left'"
            [tooltipColorMode]="tooltipColorMode"
            [tooltipWidth]="tooltipWidth"
          >
          >
          </me-chip>
        </section>

        <section>
          <h2 class="me-title-header1">Прогресс бар с тултипом</h2>
          <dx-progress-bar
            meProgressBar
            [value]="50"
            [size]="'medium'"
            [height]="'20px'"
            [width]="'100%'"
            [showStatus]="true"
            [meTooltip]="'Это индикатор прогресса, показывающий выполнение задачи.'"
            [tooltipSize]="tooltipSize"
            [tooltipPosition]="'bottom'"
            [tooltipColorMode]="tooltipColorMode"
            [tooltipWidth]="tooltipWidth"
          >
          </dx-progress-bar>
        </section>

      </div>
    `,
styles: [
      `
      .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 20px;

        section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
          width: 400px;
        }
      }
      `
    ]
  })
};
