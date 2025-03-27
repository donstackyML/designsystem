import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MeSkeletonItemComponent } from '../../../../../public-api';

export default {
  title: 'Components/Skeleton/SkeletonItem',
  decorators: [
    moduleMetadata({
      imports: [MeSkeletonItemComponent],
    }),
  ],
  argTypes: {
    shape: {
      control: 'select',
      options: ['rounded', 'circle', 'rectangle'],
      description: 'Определяет форму скелетона.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rounded' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина скелетона. Может задаваться как число или строка (например, "100%" или "200px").',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '100%' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота скелетона. Может задаваться в пикселях или процентах.',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '8px' },
      },
    },
    animated: {
      control: 'boolean',
      description: 'Включает анимацию скелетона для более динамичного эффекта загрузки.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    shape: 'rounded',
    animated: false,
    height: '8px',
    width: '100%',
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="container">
        <me-skeleton-item ${argsToTemplate(args)}></me-skeleton-item>
      </div>
    `,
    styles: [
      `
      .container {
        padding: 20px;
        background-color: var(--Background-Content);
      }
      `,
    ],
  }),
} satisfies Meta<MeSkeletonItemComponent>;

type Story = StoryObj<MeSkeletonItemComponent>;

export const Default: Story = {
  args: {},
};

export const Circle: Story = {
  args: {
    shape: 'circle',
    width: '50px',
    height: '50px',
    animated: false,
  },
};

export const Rectangle: Story = {
  args: {
    shape: 'rectangle',
    width: '100px',
    height: '20px',
    animated: false,
  },
};

export const Animated: Story = {
  args: {
    shape: 'rounded',
    animated: true,
    width: '100%',
    height: '8px',
  },
};

export const CustomSize: Story = {
  args: {
    shape: 'rounded',
    animated: false,
    width: '200px',
    height: '20px',
  },
};
