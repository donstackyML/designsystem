import { Meta, StoryObj } from '@storybook/angular';
import { MeSkeletonComponent } from '../../public-api';

const meta: Meta<MeSkeletonComponent> = {
  title: 'Components/Skeleton',
  component: MeSkeletonComponent,
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Включает анимацию скелета',
    },
    avatar: {
      control: 'object',
      description: 'Отображает аватар. Может быть объектом с параметрами размера и формы',
    },
    loading: {
      control: 'boolean',
      description: 'Отображает содержимое вместо скелета при `true`',
    },
    paragraph: {
      control: 'object',
      description: 'Отображает параграфы. Может быть объектом с параметрами количества строк и ширины',
    },
    title: {
      control: 'object',
      description: 'Отображает заголовок. Может быть объектом с параметром ширины',
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
};

export default meta;
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
  parameters: {
    docs: {
      description: {
        story: 'Когда свойство `loading` равно true, скелетон скрывается, и отображается фактическое содержимое.',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { loading } = context.args;
      return {
        template: `
          <div>
            <me-skeleton [active]="active" [avatar]="avatar" [loading]="loading"
              [paragraph]="paragraph" [title]="title" [round]="round"></me-skeleton>
            ${loading ? '<p>This is the actual content that would be shown when loading is complete.</p>' : ''}
          </div>
        `,
        props: {
          active: context.args.active,
          avatar: context.args.avatar,
          loading: context.args.loading,
          paragraph: context.args.paragraph,
          title: context.args.title,
          round: context.args.round,
        },
      };
    },
  ],
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

export const WithCustomAvatarAndTitle: Story = {
  args: {
    avatar: { size: 'small', shape: 'square' },
    title: { width: '30%' },
    paragraph: { rows: 2, width: ['70%', '50%'] },
  },
};

export const ComplexLoadingState: Story = {
  args: {
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Эта история показывает, как скелет может выглядеть при загрузке сложного контента с аватаром, заголовком и несколькими параграфами.',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { loading } = context.args;
      return {
        template: `
          <div>
            <me-skeleton [active]="active" [avatar]="avatar" [loading]="loading"
              [paragraph]="paragraph" [title]="title" [round]="round"></me-skeleton>
            ${!loading ? `
              <div>
                <h4>Заголовок после загрузки</h4>
                <p>Этот текст отображается, когда загрузка завершена.</p>
              </div>
            ` : ''}
          </div>
        `,
        props: {
          active: context.args.active,
          avatar: context.args.avatar,
          loading: context.args.loading,
          paragraph: context.args.paragraph,
          title: context.args.title,
          round: context.args.round,
        },
      };
    },
  ],
};
