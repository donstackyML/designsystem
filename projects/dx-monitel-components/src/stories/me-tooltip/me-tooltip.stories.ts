import { CommonModule } from '@angular/common';
import {
  Meta,
  StoryObj,
  argsToTemplate,
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
type Story = StoryObj;

export const Basic: Story = {
  args: {
    meTooltip: 'Это базовый тултип',
    tooltipPosition: 'top',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-button
				${argsToTemplate(args)}>
        Базовый тултип
      </dx-button>
    `,
  }),
};

export const Positioning: Story = {
  args: {
    meTooltip: 'Позиционированный тултип',
    tooltipPosition: 'right',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-button
        text="Позиционирование тултипа"
        ${argsToTemplate(args)}
				>
        Позиционирование тултипа
      </dx-button>
    `,
  }),
};

export const HTMLContent: Story = {
  args: {
    meTooltip: '<strong>Жирный текст</strong> и <em>курсив</em>',
    tooltipPosition: 'bottom',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-button
        text="Тултип с HTML содержимым"
        ${argsToTemplate(args)}
				>
        Тултип с HTML содержимым
      </dx-button>
    `,
  }),
};

export const CustomStyles: Story = {
  args: {
    meTooltip: 'Стилизованный тултип',
    tooltipPosition: 'left',
    tooltipClass: 'custom-tooltip',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-button
        text="Тултип с кастомными стилями"
        ${argsToTemplate(args)}
				>
        Тултип с кастомными стилями
      </dx-button>
    `,
  }),
};

export const WithAnimation: Story = {
  args: {
    meTooltip:
      'Анимированный тултип juhsdfbvjsdbfkjsbdkfskdjfhkjsdhfkjhsdkfjhsdkjfhksjdhfksdhfkhsdkfhskjdhfkjsdhfkjshdfkshdkjfhsdkjfhkshfkjshdfkjhsdkfhsdkfhkshfkshkfhskjfhskjhfkjshfkjshdfkjhskdjfhskjfdhkjh',
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
      duration: 200000000,
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-button
        text="Тултип с анимацией"
        ${argsToTemplate(args)}
				>
        Тултип с анимацией
      </dx-button>
    `,
  }),
};

export const CustomTemplate: Story = {
  args: {
    tooltipPosition: 'right',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-button
        text="Тултип с кастомным шаблоном"
        ${argsToTemplate(args)}
				>
        Тултип с кастомным шаблоном
      </dx-button>

      <ng-template #tooltipTemplate>
        <div>
          <h4>Заголовок тултипа</h4>
          <p>Это пример тултипа с кастомной разметкой.</p>
          <ul>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
          </ul>
        </div>
      </ng-template>
    `,
  }),
};

export const ImageTooltip: Story = {
  args: {
    tooltipPosition: 'right',
    tooltipWidth: 390,
  },
  render: (args) => ({
    props: {
      ...args,
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
          <div class="me-tooltip-content">
            <h1 class="me-tooltip-title">Заголовок</h1>
            <p class="me-tooltip-text">Трансформатор - это устройство, способное изменять напряжение переменного тока</p>
          </div>
        </div>
      `,
      tooltipClass: 'me-custom-tooltip-wrapper',
    },
    template: `
      <div style="padding: 50px;">
        <dx-button
          text="Тултип с изображением"
          [meTooltip]="tooltipContent"
          [tooltipPosition]="tooltipPosition"
          [tooltipWidth]="tooltipWidth"
          [tooltipClass]="tooltipClass">
          Тултип с изображением
        </dx-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Пример тултипа с изображением, заголовком и текстом. Содержит SVG-изображение с градиентом и волнами.',
      },
    },
  },
};
