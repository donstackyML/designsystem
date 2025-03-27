import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxLoadIndicatorModule } from 'devextreme-angular';
import { MeLoadIndicatorDirective } from '../../../../public-api';

export default {
  title: 'Components/LoadIndicator',
  component: MeLoadIndicatorDirective,
  decorators: [
    moduleMetadata({
      declarations: [MeLoadIndicatorDirective],
      imports: [DxLoadIndicatorModule],
    }),
  ],
  argTypes: {
    color: {
      description: 'Цвет индикатора загрузки.',
      control: 'select',
      options: ['normal', 'default', 'accent'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    indicatorSrc: {
      control: 'text',
      description: 'URL изображения индикатора.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    size: {
      description: 'Размер индикатора.',
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    stylingMode: {
      options: ['line', 'circle'],
      control: 'select',
      description: 'Стиль индикатора загрузки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
    },
    height: {
      description: 'Высота индикатора загрузки.',
      control: 'text',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    width: {
      description: 'Ширина индикатора загрузки.',
      control: 'text',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    color: 'default',
    size: 'medium',
    stylingMode: 'circle',
    height: undefined,
    width: undefined,
    indicatorSrc: ''
  },
  render: (args) => ({
    props: args,
    template: `
		<div class="load-indicator-example">
		<dx-load-indicator
			id="small-indicator"
			meLoadIndicator
			${argsToTemplate(args)}
		></dx-load-indicator>
		</div>
    `,
    styles: [
      `
      .load-indicator-example {
        display: flex;
        padding: 20px;
        width: fit-content;
        height: fit-content;
        justify-content: center;
        align-items: center; background-color: var(--Background-Canvas);
        border-radius: 4px;
        border: 1px dashed #9747ff
      }
      `
    ]
  }),
} satisfies Meta<DxLoadIndicatorModule  | MeLoadIndicatorDirective>;

type Story = StoryObj<DxLoadIndicatorModule | MeLoadIndicatorDirective>;

export const Default: Story = {};

export const WithCustomImage: Story = {
  args: {
    indicatorSrc:
      'https://static.tildacdn.com/tild6261-3766-4534-a636-643635653261/6068d1f9087cdc5982a3.gif',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small'
  }
};

export const SizeMedium: Story = {
  args: {
    size: 'medium'
  }
};

export const SizeLarge: Story = {
  args: {
    size: 'large'
  }
};

export const StylingModeCircle: Story = {
  args: {
    stylingMode: 'circle'
  }
};

export const StylingModeLine: Story = {
  args: {
    stylingMode: 'line'
  }
};


export const ColorDefault: Story = {
  args: {
    color: 'default'
  }
};

export const ColorNormal: Story = {
  args: {
    color: 'normal'
  }
};

export const ColorAccent: Story = {
  args: {
    color: 'accent'
  }
};
