// tooltip.stories.ts

import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, Input, TemplateRef } from '@angular/core';
import {TooltipDirective} from "../app/directives/tooltip.directive";

@Component({
  selector: 'tooltip-demo',
  template: `
    <div class="tooltip-demo dx-widget">
      <div class="tooltip-group">
        <div class="tooltip-controls">
          <button
            class="tooltip-button"
            [meTooltip]="simpleTooltip"
            [tooltipPosition]="simplePosition"
          >
            {{ simpleButtonText }}
          </button>

          <button
            class="tooltip-button"
            [meTooltip]="animatedTooltip"
            [tooltipPosition]="animatedPosition"
            [tooltipShowAnimation]="showAnimation"
            [tooltipHideAnimation]="hideAnimation"
          >
            {{ animatedButtonText }}
          </button>

          <button
            class="tooltip-button"
            [meTooltip]="positionedTooltip"
            [tooltipPosition]="positionedPosition"
          >
            {{ positionedButtonText }}
          </button>
        </div>
      </div>

      <div class="tooltip-group">
        <div class="tooltip-controls">
          <button
            class="tooltip-button"
            [meTooltip]="''"
            [tooltipTemplateRef]="interactiveTemplate"
            [tooltipPosition]="interactivePosition"
            [tooltipMaxWidth]="interactiveMaxWidth"
          >
            {{ interactiveButtonText }}
          </button>

          <button
            class="tooltip-button"
            [meTooltip]="''"
            [tooltipTemplateRef]="htmlTemplate"
            [tooltipPosition]="htmlPosition"
            [tooltipMaxWidth]="htmlMaxWidth"
          >
            {{ htmlButtonText }}
          </button>

          <button
            class="tooltip-button"
            [meTooltip]="''"
            [tooltipTemplateRef]="customStyleTemplate"
            [tooltipPosition]="customStylePosition"
            [tooltipClass]="customStyleClass"
          >
            {{ customStyleButtonText }}
          </button>
        </div>
      </div>
    </div>

    <ng-template #htmlTemplate>
      <div class="html-tooltip">
        <h3>HTML в тултипе</h3>
        <p>
          Тултипы могут содержать <strong>форматированный текст</strong>, <em>списки</em> и другие
          HTML-элементы:
        </p>
        <ul>
          <li>Пункт 1</li>
          <li>Пункт 2</li>
        </ul>
      </div>
    </ng-template>

    <ng-template #interactiveTemplate>
      <div class="interactive-tooltip">
        <h3>Интерактивный тултип</h3>
        <p>Тултипы могут содержать интерактивные элементы:</p>
        <button class="accept-button">Принять</button>
        <button class="decline-button">Отменить</button>
      </div>
    </ng-template>

    <ng-template #customStyleTemplate>
      <div class="custom-tooltip">
        <h3>Пользовательские стили</h3>
        <p>Этот тултип имеет особое оформление, заданное через CSS-класс.</p>
      </div>
    </ng-template>
  `,
  styles: [`
    .tooltip-demo {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      background-color: #f0f0f0;
      border-radius: 10px;
    }

    .tooltip-group {
      text-align: center;
      margin-left: 20px;
    }

    .tooltip-controls {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .tooltip-button {
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .interactive-tooltip {
      box-sizing: border-box;
      padding: 4px;
    }

    .interactive-tooltip * {
      text-wrap: balance;
    }

    .interactive-tooltip button {
      margin-top: 8px;
      margin-inline: 4px;
      padding: 4px 8px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }

    .interactive-tooltip .accept-button {
      background-color: #3257dc;
      color: white;
    }

    .interactive-tooltip .decline-button {
      background-color: #ecedf3;
      color: #18181a;
    }

    .custom-tooltip {
      background-color: #ff9800;
      color: white;
      border: 2px solid #e68a00;
      border-radius: 10px;
      padding: 10px;
    }

    .html-tooltip * {
      text-wrap: balance;
      text-align: start;
      margin-top: 4px;
    }
  `]
})
class TooltipDemoComponent {
  @Input() simpleTooltip: string = 'Это простой текстовый тултип';
  @Input() simplePosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() simpleButtonText: string = 'Простой тултип';

  @Input() animatedTooltip: string = 'Тултип с анимацией';
  @Input() animatedPosition: 'top' | 'bottom' | 'left' | 'right' = 'left';
  @Input() animatedButtonText: string = 'Анимированный';
  @Input() showAnimation: any = {
    type: 'slide',
    from: { left: -100, opacity: 0 },
    to: { opacity: 1, left: 0 },
  };
  @Input() hideAnimation: any = {
    type: 'pop',
    from: { scale: 1, opacity: 1 },
    to: { opacity: 0, scale: 0.1 },
  };

  @Input() positionedTooltip: string = 'Тултип снизу';
  @Input() positionedPosition: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() positionedButtonText: string = 'Позиционирование';

  @Input() interactivePosition: 'top' | 'bottom' | 'left' | 'right' = 'right';
  @Input() interactiveMaxWidth: string = '200';
  @Input() interactiveButtonText: string = 'Интерактивный тултип';

  @Input() htmlPosition: 'top' | 'bottom' | 'left' | 'right' = 'right';
  @Input() htmlMaxWidth: string = '300';
  @Input() htmlButtonText: string = 'HTML-содержимое';

  @Input() customStylePosition: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() customStyleClass: string = 'custom-tooltip';
  @Input() customStyleButtonText: string = 'Пользовательские стили';
}

const meta: Meta<TooltipDemoComponent> = {
  title: 'Directives/Tooltip',
  component: TooltipDemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [TooltipDirective, TooltipDemoComponent],
    }),
  ],
  argTypes: {
    simpleTooltip: { control: 'text' },
    simplePosition: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
    simpleButtonText: { control: 'text' },

    animatedTooltip: { control: 'text' },
    animatedPosition: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
    animatedButtonText: { control: 'text' },
    showAnimation: { control: 'object' },
    hideAnimation: { control: 'object' },

    positionedTooltip: { control: 'text' },
    positionedPosition: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
    positionedButtonText: { control: 'text' },

    interactivePosition: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
    interactiveMaxWidth: { control: 'text' },
    interactiveButtonText: { control: 'text' },

    htmlPosition: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
    htmlMaxWidth: { control: 'text' },
    htmlButtonText: { control: 'text' },

    customStylePosition: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
    customStyleClass: { control: 'text' },
    customStyleButtonText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TooltipDemoComponent>;

export const Default: Story = {
  args: {
    simpleTooltip: 'Это простой текстовый тултип',
    simplePosition: 'top',
    simpleButtonText: 'Простой тултип',

    animatedTooltip: 'Тултип с анимацией',
    animatedPosition: 'left',
    animatedButtonText: 'Анимированный',

    positionedTooltip: 'Тултип снизу',
    positionedPosition: 'bottom',
    positionedButtonText: 'Позиционирование',

    interactivePosition: 'right',
    interactiveMaxWidth: '200',
    interactiveButtonText: 'Интерактивный тултип',

    htmlPosition: 'right',
    htmlMaxWidth: '300',
    htmlButtonText: 'HTML-содержимое',

    customStylePosition: 'bottom',
    customStyleClass: 'custom-tooltip',
    customStyleButtonText: 'Пользовательские стили',
  },
};

export const CustomPositions: Story = {
  args: {
    ...Default.args,
    simplePosition: 'right',
    animatedPosition: 'top',
    positionedPosition: 'left',
    interactivePosition: 'bottom',
    htmlPosition: 'left',
    customStylePosition: 'top',
  },
};

export const CustomContent: Story = {
  args: {
    ...Default.args,
    simpleTooltip: 'Измененный простой тултип',
    animatedTooltip: 'Новый анимированный тултип',
    positionedTooltip: 'Позиционированный тултип сверху',
  },
};

export const CustomAnimations: Story = {
  args: {
    ...Default.args,
    showAnimation: {
      type: 'pop',
      from: { scale: 0.5, opacity: 0 },
      to: { scale: 1, opacity: 1 },
    },
    hideAnimation: {
      type: 'slide',
      from: { top: 0, opacity: 1 },
      to: { top: -20, opacity: 0 },
    },
  },
};
