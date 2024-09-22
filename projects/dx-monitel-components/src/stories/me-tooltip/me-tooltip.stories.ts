import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeTooltipDirective } from '../../public-api';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';
import { CommonModule } from '@angular/common';

const meta: Meta<MeTooltipDirective> = {
  title: 'Components/Tooltip(RC)',
  component: MeTooltipDirective,
  decorators: [
    moduleMetadata({
      declarations: [MeTooltipDirective],
      imports: [DxTooltipModule, CommonModule],
    }),
  ],
  argTypes: {
    meTooltip: { control: 'text', description: 'Текст или HTML-контент тултипа' },
    tooltipPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция тултипа относительно целевого элемента',
    },
    tooltipClass: { control: 'text', description: 'Пользовательский CSS-класс для тултипа' },
    tooltipWidth: { control: 'number', description: 'Ширина тултипа' },
    tooltipMaxWidth: { control: 'number', description: 'Максимальная ширина тултипа' },
    tooltipHeight: { control: 'number', description: 'Высота тултипа' },
    tooltipMaxHeight: { control: 'number', description: 'Максимальная высота тултипа' },
    tooltipShowAnimation: { control: 'object', description: 'Настройки анимации появления тултипа' },
    tooltipHideAnimation: { control: 'object', description: 'Настройки анимации скрытия тултипа' },
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
    props: args,
    template: `
      <button [meTooltip]="meTooltip"
              [tooltipPosition]="tooltipPosition">
        Наведите на меня
      </button>
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
      <button [meTooltip]="meTooltip"
              [tooltipPosition]="tooltipPosition">
        Тултип {{ tooltipPosition }}
      </button>
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
      <button [meTooltip]="meTooltip" [tooltipPosition]="tooltipPosition">
        HTML-тултип
      </button>
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
      <button [meTooltip]="meTooltip"
              [tooltipPosition]="tooltipPosition"
              [tooltipClass]="tooltipClass">
        Кастомный тултип
      </button>
    `,
  }),
};

export const WithAnimation: Story = {
  args: {
    meTooltip: 'Анимированный тултип',
    tooltipPosition: 'top',
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
    props: args,
    template: `
      <button
        [meTooltip]="meTooltip"
        [tooltipPosition]="tooltipPosition"
        [tooltipShowAnimation]="tooltipShowAnimation"
        [tooltipHideAnimation]="tooltipHideAnimation"
      >
        Анимированный тултип
      </button>
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
      <button [meTooltip]="''"
              [tooltipPosition]="tooltipPosition"
              [tooltipTemplateRef]="tooltipTemplate">
        Тултип с кастомным шаблоном
      </button>

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

export const CustomSizedTooltip: Story = {
  args: {
    meTooltip: 'Этот тултип имеет фиксированные размеры',
    tooltipPosition: 'bottom',
    tooltipWidth: 200,
    tooltipHeight: 100,
    tooltipMaxWidth: 300,
    tooltipMaxHeight: 150,
  },
  render: (args) => ({
    props: args,
    template: `
      <button [meTooltip]="meTooltip"
              [tooltipPosition]="tooltipPosition"
              [tooltipWidth]="tooltipWidth"
              [tooltipHeight]="tooltipHeight"
              [tooltipMaxWidth]="tooltipMaxWidth"
              [tooltipMaxHeight]="tooltipMaxHeight">
        Тултип с фиксированными размерами
      </button>
    `,
  }),
};

export const ContainerTooltip: Story = {
  args: {
    meTooltip: 'Этот тултип отображается в определенном контейнере',
    tooltipPosition: 'bottom'
  },
  render: (args) => ({
    props: args,
    template: `
      <div id="tooltipContainer" style="position: relative; height: 100px; border: 1px solid #ccc; padding: 10px;">
        <button [meTooltip]="meTooltip"
                [tooltipPosition]="tooltipPosition">
          Тултип в контейнере
        </button>
      </div>
    `,
  }),
};
