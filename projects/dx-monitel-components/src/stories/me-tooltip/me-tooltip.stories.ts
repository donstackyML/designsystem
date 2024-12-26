import { CommonModule } from '@angular/common';
import {
  Meta,
  StoryObj,
  moduleMetadata,
} from '@storybook/angular';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';
import { MeTooltipDirective } from '../../public-api';

const meta: Meta<MeTooltipDirective> = {
  title: 'Components/Tooltip',
  component: MeTooltipDirective,
  decorators: [
    moduleMetadata({
      declarations: [MeTooltipDirective],
      imports: [DxTooltipModule, DxButtonModule, CommonModule],
    }),
  ],
  argTypes: {
    meTooltip: {
      control: 'text',
      description: 'Текст или HTML-контент тултипа',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      }
    },
    tooltipPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция тултипа относительно целевого элемента',
      table: {
        type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
        defaultValue: { summary: 'top' },
      }
    },
    tooltipClass: {
      control: 'text',
      description: 'Пользовательский CSS-класс для тултипа',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'me-tooltip' },
      }
    },
    tooltipWidth: {
      control: 'number',
      description: 'Ширина тултипа',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      }
    },
    tooltipMaxWidth: {
      control: 'number',
      description: 'Максимальная ширина тултипа',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      }
    },
    tooltipHeight: {
      control: 'number',
      description: 'Высота тултипа',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      }
    },
    tooltipMaxHeight: {
      control: 'number',
      description: 'Максимальная высота тултипа',
      table: {
        type: { summary: 'number | string | undefined' },
        defaultValue: { summary: 'auto' },
      }
    },
    tooltipShowAnimation: {
      control: 'object',
      description: 'Настройки анимации появления тултипа',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{ type: "fade", from: 0, to: 1, duration: 300 }' },
      }
    },
    tooltipHideAnimation: {
      control: 'object',
      description: 'Настройки анимации скрытия тултипа',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{ type: "fade", from: 1, to: 0, duration: 300 }' },
      }
    },
    colorMode: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Цветовая тема тултипа',
      table: {
        type: { summary: "'light' | 'dark'" },
        defaultValue: { summary: 'dark' },
      }
    }
  },
};

export default meta;
type Story = StoryObj<MeTooltipDirective>;

export const Basic: Story = {
  args: {
    meTooltip: 'Это базовый тултип',
    tooltipPosition: 'top',
  },
  render: (args) => ({
    template: `
      <dx-button
        [meTooltip]="meTooltip"
        [tooltipPosition]="tooltipPosition">
        Базовый тултип
      </dx-button>
    `,
    props: args,
  }),
};

export const HTMLContent: Story = {
  args: {
    meTooltip: '<strong>Жирный текст</strong> и <em>курсив</em>',
    tooltipPosition: 'bottom',
  },
  render: (args) => ({
    template: `
      <dx-button
        [meTooltip]="meTooltip"
        [tooltipPosition]="tooltipPosition">
        Тултип с HTML содержимым
      </dx-button>
    `,
    props: args,
  }),
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
      "type": "fade",

      "from": {
        "opacity": 1
      },

      "to": {
        "opacity": 0
      },

      "duration": 90000000
    },
  },
  render: (args) => ({
    template: `
      <dx-button
        [meTooltip]="meTooltip"
        [tooltipPosition]="tooltipPosition"
        [tooltipWidth]="tooltipWidth"
        [tooltipMaxWidth]="tooltipMaxWidth"
        [tooltipHeight]="tooltipHeight"
        [tooltipMaxHeight]="tooltipMaxHeight"
        [tooltipShowAnimation]="tooltipShowAnimation"
        [tooltipHideAnimation]="tooltipHideAnimation">
        Тултип с анимацией
      </dx-button>
    `,
    props: args,
  }),
};

export const ImageTooltip: Story = {
  args: {
    tooltipPosition: 'right',
    tooltipWidth: undefined,
    tooltipMaxWidth: 390,
    tooltipClass: 'me-custom-tooltip-wrapper',
    colorMode: 'light',
    meTooltip: `
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
    `,
  },
  render: (args) => ({
    template: `
      <div style="padding: 50px;">
        <dx-button
          [meTooltip]="meTooltip"
          [tooltipPosition]="tooltipPosition"
          [tooltipWidth]="tooltipWidth"
          [tooltipMaxWidth]="tooltipMaxWidth"
          [tooltipClass]="tooltipClass"
          [colorMode]="colorMode">
          Тултип с изображением
        </dx-button>
      </div>
    `,
    props: args,
  }),
};

export const WithMaxDimensions: Story = {
  args: {
    meTooltip: 'Это тултип с ограничением максимальных размеров. Длинный текст будет автоматически переноситься на новую строку при достижении максимальной ширины.',
    tooltipPosition: 'top',
    tooltipWidth: undefined,
    tooltipMaxWidth: 200,
    tooltipHeight: undefined,
    tooltipMaxHeight: 150,
  },
  render: (args) => ({
    template: `
      <dx-button
        [meTooltip]="meTooltip"
        [tooltipPosition]="tooltipPosition"
        [tooltipWidth]="tooltipWidth"
        [tooltipMaxWidth]="tooltipMaxWidth"
        [tooltipHeight]="tooltipHeight"
        [tooltipMaxHeight]="tooltipMaxHeight">
        Тултип с ограничением размеров
      </dx-button>
    `,
    props: args,
  }),
};
