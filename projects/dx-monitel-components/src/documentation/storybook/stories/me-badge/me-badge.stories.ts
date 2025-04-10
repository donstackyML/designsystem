import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MeBadgeComponent } from '../../../../public-api';

export default {
  title: 'Components/Badge',
  component: MeBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [MeBadgeComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['20', '24'],
      description: 'Размер бейджа',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '20' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'attention', 'error'],
      description: 'Цветовая тема бейджа',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    value: {
      control: 'number',
      description: 'Числовое значение бейджа',
      table: {
        type: { summary: 'number | null' },
        defaultValue: { summary: 'null' },
      },
    },
  },
} satisfies Meta<MeBadgeComponent>;

type Story = StoryObj<MeBadgeComponent>;

export const Default: Story = {
  args: {
    value: 1,
    size: '20',
    color: 'default'
  },
  render: (args) => ({
    props: args,
    template: `<me-badge ${argsToTemplate(args)}></me-badge>`,
  })
}

export const BasicExamples: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; margin-bottom: 24px;">
        <me-badge [value]="5" color="default"></me-badge>
        <me-badge [value]="5" color="secondary"></me-badge>
        <me-badge [value]="5" color="success"></me-badge>
        <me-badge [value]="5" color="success-light"></me-badge>
        <me-badge [value]="5" color="attention"></me-badge>
        <me-badge [value]="5" color="attention-light"></me-badge>
        <me-badge [value]="5" color="error"></me-badge>
      </div>
    `,
  }),
};


export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <me-badge [value]="8" size="20" color="default"></me-badge>
        <me-badge [value]="8" size="24" color="default"></me-badge>
      </div>
    `,
  }),
};

// Длинные числа
export const LongNumbers: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <me-badge [value]="99" color="default"></me-badge>
        <me-badge [value]="100" color="default"></me-badge>
        <me-badge [value]="1000" color="default"></me-badge>
        <me-badge [value]="9999" color="default"></me-badge>
      </div>
    `,
  }),
};

// Все размеры и цвета
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Size 20 -->
        <div>
          <h4 class="badge-title" style="margin-bottom: 12px;">Size: 20px</h4>
          <div style="display: flex; gap: 16px; align-items: center;">
            <me-badge [value]="5" size="20" color="default"></me-badge>
            <me-badge [value]="5" size="20" color="secondary"></me-badge>
            <me-badge [value]="5" size="20" color="success"></me-badge>
            <me-badge [value]="5" size="20" color="success-light"></me-badge>
            <me-badge [value]="5" size="20" color="attention"></me-badge>
            <me-badge [value]="5" size="20" color="attention-light"></me-badge>
            <me-badge [value]="5" size="20" color="error"></me-badge>
          </div>
        </div>

        <!-- Size 24 -->
        <div>
          <h4 class="badge-title" style="margin-bottom: 12px;">Size: 24px</h4>
          <div style="display: flex; gap: 16px; align-items: center;">
            <me-badge [value]="5" size="24" color="default"></me-badge>
            <me-badge [value]="5" size="24" color="secondary"></me-badge>
            <me-badge [value]="5" size="24" color="success"></me-badge>
            <me-badge [value]="5" size="24" color="success-light"></me-badge>
            <me-badge [value]="5" size="24" color="attention"></me-badge>
            <me-badge [value]="5" size="24" color="attention-light"></me-badge>
            <me-badge [value]="5" size="24" color="error"></me-badge>
          </div>
        </div>
      </div>
    `,
  }),
};

// Разные значения чисел для каждого цвета
export const NumbersAndColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <me-badge [value]="5" color="default"></me-badge>
          <me-badge [value]="25" color="default"></me-badge>
          <me-badge [value]="125" color="default"></me-badge>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <me-badge [value]="7" color="secondary"></me-badge>
          <me-badge [value]="77" color="secondary"></me-badge>
          <me-badge [value]="777" color="secondary"></me-badge>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <me-badge [value]="3" color="success"></me-badge>
          <me-badge [value]="33" color="success"></me-badge>
          <me-badge [value]="333" color="success"></me-badge>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <me-badge [value]="4" color="attention"></me-badge>
          <me-badge [value]="44" color="attention"></me-badge>
          <me-badge [value]="444" color="attention"></me-badge>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <me-badge [value]="9" color="error"></me-badge>
          <me-badge [value]="99" color="error"></me-badge>
          <me-badge [value]="999" color="error"></me-badge>
        </div>
      </div>
    `,
  }),
};

// Кастомные стили
export const CustomStyles: Story = {
  render: () => ({
    props: {
      styles: {
        border: '2px solid var(--Controls-Content-In-Controls-Accent-Default)',
      },
      outlineStyles: {
        boxShadow:
          '0 0 0 2px var(--Controls-Content-In-Controls-Accent-Default)',
      },
    },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <me-badge [value]="7" [customStyle]="styles"></me-badge>
        <me-badge [value]="42" [customStyle]="outlineStyles"></me-badge>
        <me-badge [value]="100" [customStyle]="styles"></me-badge>
      </div>
    `,
  }),
};


export const SplitValueExample: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px;">
        <me-badge [value]="5" color="default"></me-badge>
        <me-badge [value]="5" leftValue="left" color="default"></me-badge>
        <me-badge [value]="5" rightValue="right" color="default"></me-badge>
        <me-badge value="center" leftValue="left" rightValue="right" color="default"></me-badge>
      </div>
    `,
  }),
}
