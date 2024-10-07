import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';

import { MeSkeletonComponent } from '../../public-api';

export default {
  title: 'Components/Skeleton',
  decorators: [
    moduleMetadata({
      imports: [MeSkeletonComponent],
    }),
  ],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Включает анимацию скелета',
    },
    avatar: {
      control: 'object',
      description:
        'Отображает аватар. Может быть объектом с параметрами размера и формы',
    },
    loading: {
      control: 'boolean',
      description: 'Отображает содержимое вместо скелета при `true`',
    },
    paragraph: {
      control: 'object',
      description:
        'Отображает параграфы. Может быть объектом с параметрами количества строк и ширины',
    },
    title: {
      control: 'object',
      description:
        'Отображает заголовок. Может быть объектом с параметром ширины',
    },
    round: {
      control: 'boolean',
      description: 'Скругляет углы заголовка и параграфов',
    },
  },
  args: {
    active: false,
    avatar: false,
    loading: false,
    paragraph: { rows: 3, width: ['100%', '100%', '80%'] },
    title: { width: '60%' },
    round: false,
  },
  render: (args) => ({
    props: args,
    template: `<me-skeleton ${argsToTemplate(args)}></me-skeleton>`,
  }),
} as Meta<MeSkeletonComponent>;

type Story = StoryObj<MeSkeletonComponent>;

export const Default: Story = {
  args: {},
};

export const WithAvatar: Story = {
  args: {
    avatar: { size: 'large', shape: 'circle' },
  },
};

export const ActiveAnimation: Story = {
  args: {
    active: true,
  },
};

export const CustomTitleAndParagraph: Story = {
  args: {
    title: { width: '40%' },
    paragraph: { rows: 4, width: ['100%', '90%', '80%', '60%'] },
  },
};

export const Rounded: Story = {
  args: {
    round: true,
    title: { width: '50%' },
    paragraph: { rows: 3, width: ['100%', '80%', '60%'] },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div>
        <me-skeleton ${argsToTemplate(args)}></me-skeleton>
        ${
          args.loading
            ? '<p>This is the actual content that would be shown when loading is complete.</p>'
            : ''
        }
      </div>
    `,
  }),
};

export const ComplexCombination: Story = {
  args: {
    active: true,
    avatar: { size: 'large', shape: 'circle' },
    title: { width: '50%' },
    paragraph: { rows: 4, width: ['100%', '90%', '80%', '70%'] },
    round: true,
  },
};
