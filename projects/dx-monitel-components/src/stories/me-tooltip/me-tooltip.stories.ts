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
    },
    tooltipPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция тултипа относительно целевого элемента',
    },
    tooltipClass: {
      control: 'text',
      description: 'Пользовательский CSS-класс для тултипа',
    },
    tooltipWidth: {
      control: 'number',
      description: 'Ширина тултипа',
    },
    tooltipMaxWidth: {
      control: 'number',
      description: 'Максимальная ширина тултипа',
    },
    tooltipHeight: {
      control: 'number',
      description: 'Высота тултипа',
    },
    tooltipMaxHeight: {
      control: 'number',
      description: 'Максимальная высота тултипа',
    },
    tooltipShowAnimation: {
      control: 'object',
      description: 'Настройки анимации появления тултипа',
    },
    tooltipHideAnimation: {
      control: 'object',
      description: 'Настройки анимации скрытия тултипа',
    },
    colorMode: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Цветовая тема тултипа',
    },
  },
  args: {
    colorMode: 'dark',
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
        [tooltipPosition]="tooltipPosition"
        [colorMode]="colorMode">
        Базовый тултип
      </dx-button>
    `,
    props: {
      meTooltip: args.meTooltip,
      tooltipPosition: args.tooltipPosition,
      colorMode: args.colorMode
    }
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
        [tooltipPosition]="tooltipPosition"
        [colorMode]="colorMode">
        Тултип с HTML содержимым
      </dx-button>
    `,
    props: {
      meTooltip: args.meTooltip,
      tooltipPosition: args.tooltipPosition,
      colorMode: args.colorMode
    }
  }),
};

export const WithAnimation: Story = {
  args: {
    meTooltip: 'Анимированный тултип',
    tooltipPosition: 'top',
    tooltipMaxWidth: 400,
    tooltipShowAnimation: {
      type: 'pop',
      from: { scale: 0.5, opacity: 0 },
      to: { scale: 1, opacity: 1 },
      duration: 300,
    },
    tooltipHideAnimation: {
      type: 'fade',
      from: { opacity: 1 },
      to: { opacity: 0 },
      duration: 200,
    },
  },
  render: (args) => ({
    template: `
      <dx-button
        [meTooltip]="meTooltip"
        [tooltipPosition]="tooltipPosition"
        [tooltipMaxWidth]="tooltipMaxWidth"
        [tooltipShowAnimation]="tooltipShowAnimation"
        [tooltipHideAnimation]="tooltipHideAnimation"
        [colorMode]="colorMode">
        Тултип с анимацией
      </dx-button>
    `,
    props: {
      meTooltip: args.meTooltip,
      tooltipPosition: args.tooltipPosition,
      tooltipMaxWidth: args.tooltipMaxWidth,
      tooltipShowAnimation: args.tooltipShowAnimation,
      tooltipHideAnimation: args.tooltipHideAnimation,
      colorMode: args.colorMode
    }
  }),
};

export const ImageTooltip: Story = {
  args: {
    tooltipPosition: 'right',
    tooltipWidth: 390,
    tooltipClass: 'me-custom-tooltip-wrapper',
  },
  render: (args) => ({
    template: `
      <div style="padding: 50px;">
        <dx-button
          [meTooltip]="tooltipContent"
          [tooltipPosition]="tooltipPosition"
          [tooltipWidth]="tooltipWidth"
          [tooltipClass]="tooltipClass"
          [colorMode]="colorMode">
          Тултип с изображением
        </dx-button>
      </div>
    `,
    props: {
      tooltipContent: `
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
          <div class="me-tooltip-content me-tooltip-content-dark">
            <h1 class="me-tooltip-title">Заголовок</h1>
            <p class="me-tooltip-text">Трансформатор - это устройство, способное изменять напряжение переменного тока</p>
          </div>
        </div>
      `,
      tooltipPosition: args.tooltipPosition,
      tooltipWidth: args.tooltipWidth,
      tooltipClass: args.tooltipClass,
      colorMode: args.colorMode
    }
  }),
}
