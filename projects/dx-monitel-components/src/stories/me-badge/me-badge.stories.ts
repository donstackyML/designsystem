import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeBadgeComponent } from '../../public-api';

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
      description: 'Размер значка',
    },
    color: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'attention', 'error'],
      description: 'Цвет значка',
    },
    value: {
      control: 'number',
      description: 'Значение для отображения на значке',
    },
    customStyle: {
      control: 'object',
      description: 'Пользовательские стили для значка',
    },
  },
} as Meta<MeBadgeComponent>;

type Story = StoryObj<MeBadgeComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
  }),
};

export const Default: Story = {
  ...Template,
  args: {
    size: '20',
    color: 'default',
    value: 5,
  },
};

export const LargeBadge: Story = {
  ...Template,
  args: {
    size: '24',
    color: 'success',
    value: 10,
  },
};

export const OverflowValue: Story = {
  ...Template,
  args: {
    size: '20',
    color: 'error',
    value: 100,
  },
};

export const CustomStyleBadge: Story = {
  ...Template,
  args: {
    size: '24',
    color: 'secondary',
    value: 7,
    customStyle: { border: '2px solid black' },
  },
};
