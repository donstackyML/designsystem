import { CommonModule } from '@angular/common';
import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';

export default {
  title: 'Components/Tooltip/DxTooltipComponent',
  decorators: [
    moduleMetadata({
      imports: [DxTooltipModule, DxButtonModule, CommonModule],
    }),
  ],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция тултипа относительно целевого элемента',
      table: {
        type: {
          summary: "'top' | 'bottom' | 'left' | 'right' | PositionConfig",
        },
        defaultValue: {
          summary:
            "{ my: 'top center', at: 'bottom center', collision: 'fit flip' }",
        },
      },
    },
    class: {
      control: 'text',
      description: 'Пользовательский CSS-класс для тултипа',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'me-tooltip' },
      },
    },
    width: {
      control: 'number',
      description: 'Ширина тултипа',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      },
    },
    maxWidth: {
      control: 'number',
      description: 'Максимальная ширина тултипа',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      },
    },
    height: {
      control: 'number',
      description: 'Высота тултипа',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      },
    },
    maxHeight: {
      control: 'number',
      description: 'Максимальная высота тултипа',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      },
    },
    shading: {
      description: 'Затемнение экрана',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showEvent: {
      description: 'Событие, которое вызывает отображение тултипа',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'mouseenter' },
      },
    },
    hideEvent: {
      description: 'Событие, которое вызывает скрытие тултипа',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'mouseleave' },
      },
    },
    hideOnOutsideClick: {
      description: 'Скрытие тултипа при клике вне его',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    tooltipId: {
      control: 'text',
      description:
        'Уникальный ID элемента, к которому будет привязан тултип (атрибут target)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'tooltipId' },
      },
    },
  },
  args: {
    position: { my: 'top center', at: 'bottom center', collision: 'fit flip' },
    width: 'auto',
    maxWidth: null,
    height: 'auto',
    maxHeight: null,
    animation: {
      show: {
        type: 'fade',
        from: 0,
        to: 1,
      },
      hide: {
        type: 'fade',
        from: 1,
        to: 0,
      },
    },
    tooltipId: 'tooltipId',
    shading: false,
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    hideOnOutsideClick: false,
    demoTemplateText: 'Tooltip Content',
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="container">
        <dx-button
          [id]="tooltipId"
        >
          Наведите, чтобы показался тултип
        </dx-button>
        <dx-tooltip
          [target]="'#' + tooltipId"
          ${argsToTemplate(args)}
        >
          <div *dxTemplate="let data = data; of: 'content'">{{ demoTemplateText }}</div>
        </dx-tooltip>
      </div>
    `,
    styles: [
      `
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 20px;
      }
      `,
    ],
  }),
} satisfies Meta<DxTooltipModule>;

type Story = StoryObj<DxTooltipModule>;

export const Default: Story = {};

export const PositionTop: Story = {
  args: {
    position: 'top',
  },
};

export const PositionBottom: Story = {
  args: {
    position: 'bottom',
  },
};

export const PositionLeft: Story = {
  args: {
    position: 'left',
  },
};

export const PositionRight: Story = {
  args: {
    position: 'right',
  },
};

export const WithAnimation: Story = {
  args: {
    position: 'top',
    width: undefined,
    maxWidth: 400,
    height: undefined,
    maxHeight: 'auto',
    animation: {
      show: {
        type: 'pop',
        from: { scale: 0.5, opacity: 0 },
        to: { scale: 1, opacity: 1 },
        duration: 300,
      },
      hide: {
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
    tooltipId: 'tooltipIdWithAnimation',
  },
};

export const WithImageContent: Story = {
  args: {
    position: 'right',
    width: undefined,
    maxWidth: 390,
    tooltipClass: 'me-custom-tooltip-wrapper',
    tooltipId: 'tooltipIdWithCustomImage',
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="container">
        <dx-button
          [id]="tooltipId"
        >
          Наведите, чтобы показался тултип
        </dx-button>
        <dx-tooltip
          [target]="'#' + tooltipId"
          ${argsToTemplate(args)}
        >
          <div *dxTemplate="let data = data; of: 'content'">

          <div class="me-tooltip-custom">
        <div class="me-tooltip-image">
          <svg xmlns="http://www.w3.org/2000/svg" width="390" height="140" viewBox="0 0 390 140" fill="none" preserveAspectRatio="xMidYMid slice">
            <path fill="url(#paint0_linear)" d="M0 0h390v140H0z"/>
            <path d="M0 70c97.5 0 97.5 40 195 40S487.5 30 585 30" stroke="#4A7DFF" stroke-width="2"/>
            <path d="M0 90c97.5 0 97.5-40 195-40s292.5 80 390 80" stroke="#8C62FF" stroke-width="2"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="390" y2="140" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#FF8A00"/>
                <stop offset="0.5" stop-color="#9C4DFF"/>
                <stop offset="1" stop-color="#4A7DFF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="me-tooltip-content">
          <h1 class="me-tooltip-title">Заголовок</h1>
          <p class="me-tooltip-text">Трансформатор - это устройство, способное изменять напряжение переменного тока</p>
        </div>
      </div>
          </div>
        </dx-tooltip>
      </div>
    `,
    styles: [
      `
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 20px;
      }
      `,
    ],
  }),
};

export const WithMaxDimensions: Story = {
  args: {
    position: 'top',
    width: undefined,
    maxWidth: 200,
    height: undefined,
    maxHeight: 150,
    demoTemplateText:
      'Длинное название пункта, которое занимает несколько строк',
    tooltipId: 'tooltipIdWithMaxDimensions',
  },
};
