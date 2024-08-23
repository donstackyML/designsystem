import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeTooltipDirective } from '../../public-api';

const meta: Meta<MeTooltipDirective> = {
  title: 'Components/Tooltip',
  component: MeTooltipDirective,
  decorators: [
    moduleMetadata({
      declarations: [MeTooltipDirective],
    }),
  ],
  argTypes: {
    meTooltip: { control: 'text' },
    tooltipPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    tooltipClass: { control: 'text' },
    tooltipWidth: { control: 'text' },
    tooltipMaxWidth: { control: 'text' },
    tooltipShowAnimation: { control: 'object' },
    tooltipHideAnimation: { control: 'object' },
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
      <button [meTooltip]="meTooltip" [tooltipPosition]="tooltipPosition">
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
      <button [meTooltip]="meTooltip" [tooltipPosition]="tooltipPosition">
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
      <button [meTooltip]="meTooltip" [tooltipPosition]="tooltipPosition" [tooltipClass]="tooltipClass">
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
    },
    tooltipHideAnimation: {
      type: 'fade',
      from: { opacity: 1 },
      to: { opacity: 0 },
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
      <button [meTooltip]="tooltipTemplate" [tooltipTemplateRef]="tooltipTemplate" [tooltipPosition]="tooltipPosition">
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
