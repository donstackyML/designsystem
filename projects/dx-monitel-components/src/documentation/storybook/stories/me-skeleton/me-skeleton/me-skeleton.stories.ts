import { Component, Input, OnInit } from '@angular/core';
import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MeSkeletonComponent, MeSkeletonItemComponent } from '../../../../../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skeleton-loading-wrapper',
  template: `
    <me-skeleton
      [animated]="animated"
      [avatar]="avatar"
      [loading]="loading"
      [paragraph]="paragraph"
      [title]="title"
      [shape]="shape">
    </me-skeleton>
    <div *ngIf="!loading" style="margin-top: 16px;">
      Это содержимое, которое отображается после завершения загрузки.
    </div>
  `,
})
class SkeletonLoadingWrapperComponent implements OnInit {
  @Input() animated?: boolean;
  @Input() avatar?: any;
  @Input() paragraph?: any;
  @Input() title?: any;
  @Input() shape?: string;

  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}

export default {
  title: 'Components/Skeleton/Skeleton',
  decorators: [
    moduleMetadata({
      imports: [MeSkeletonComponent, MeSkeletonItemComponent, CommonModule]
    }),
  ],
  argTypes: {
    animated: {
      control: 'boolean',
      description: 'Включает анимацию скелета',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    avatar: {
      control: 'object',
      description:
        'Отображает аватар. Может быть объектом с параметрами размера (size или width/height) и формы (circle, rectangle)',
      table: {
        type: { summary: 'MeSkeletonAvatar | null' },
        defaultValue: { summary: 'null' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Отображает содержимое вместо скелета при `true`',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    paragraph: {
      control: 'object',
      description:
        'Отображает параграф. Может быть объектом с параметрами количества строк, их ширины, высоты и межстрочного интервала (gap)',
      table: {
        type: { summary: 'SkeletonParagraph | null' },
        defaultValue: { summary: 'null' },
      },
    },
    contentSettings: {
      control: 'object',
      description:
        'Настройки содержимого скелета, включая параметры зазора между элементами',
      table: {
        type: { summary: 'SkeletonContentSettings | null' },
        defaultValue: { summary: 'null' },
      },
    },
    title: {
      control: 'object',
      description:
        'Отображает заголовок. Может быть объектом с параметром ширины',
      table: {
        type: { summary: 'MeSkeletonTitle | null' },
        defaultValue: { summary: 'null' },
      },
    },
    shape: {
      control: 'select',
      options: ['rounded', 'circle', 'rectangle'],
      description: 'Определяет форму скелетона по умолчанию',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rounded' },
      },
    },
  },
  args: {
    animated: false,
    avatar: null,
    loading: true,
    paragraph: { rows: 3, width: ['100%', '100%', '80%'] },
    title: { width: '60%' },
    shape: 'rounded',
  },
  render: (args) => ({
    props: args,
    template: `<me-skeleton ${argsToTemplate(args)}></me-skeleton>`,
  }),
} satisfies Meta<MeSkeletonComponent>;

type Story = StoryObj<MeSkeletonComponent>;

export const Default: Story = {};

export const WithAvatar: Story = {
  args: {
    avatar: { size: 'large', shape: 'circle' },
  },
};

export const ActiveAnimation: Story = {
  args: {
    animated: true,
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
    shape: 'rounded',
    title: { width: '50%' },
    paragraph: { rows: 3, width: ['100%', '80%', '60%'] },
  },
};

export const Loading: Story = {
  decorators: [
    moduleMetadata({
      imports: [MeSkeletonComponent, MeSkeletonItemComponent],
      declarations: [SkeletonLoadingWrapperComponent]
    }),
  ],
  args: {
    animated: false,
    avatar: null,
    paragraph: { rows: 3, width: ['100%', '80%', '60%'] },
    title: { width: '60%' },
    shape: 'rounded',
  },
  render: (args) => ({
    template: `<skeleton-loading-wrapper ${argsToTemplate(args, { exclude: ['loading']})} ></skeleton-loading-wrapper>`,
    props: args,
  }),
};

export const ComplexCombination: Story = {
  args: {
    animated: true,
    avatar: { size: 'large', shape: 'circle' },
    title: { width: '50%' },
    paragraph: { rows: 4, width: '10%' },
    shape: 'rounded',
  },
};

export const Custom: Story = {
  args: {
    animated: true,
    title: { width: '50%' },
    shape: 'rounded',
    paragraph: null
  },
  render: (args) => ({
    props: args,
    template: `
<me-skeleton ${argsToTemplate(args)}>
  <div customParagraph #customParagraph class="custom-paragraph">
    <me-skeleton-item [animated]="animated" width="100%"></me-skeleton-item>
    <me-skeleton-item [animated]="animated" width="80%"></me-skeleton-item>
    <me-skeleton-item [animated]="animated" width="20%"></me-skeleton-item>
  </div>
</me-skeleton>
    `,
    styles: [
      `
      .custom-paragraph {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      `,
    ],
  }),
};

export const AvatarOnly: Story = {
  args: {
    avatar: { width: '50px', height: '50px', shape: 'circle' },
    paragraph: null,
    title: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Пример использования аватара отдельно от параграфа. Здесь можно задать произвольные размеры и форму, например, круглый аватар для замены поля ввода.',
      },
    },
  },
};

export const RectangleAvatar: Story = {
  args: {
    avatar: { width: '120px', height: '60px', shape: 'rectangle' },
    paragraph: null,
    title: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Пример прямоугольного аватара с произвольными размерами. Такой элемент можно использовать вместо кнопки или поля ввода.',
      },
    },
  },
};

export const ParagraphAndContentSpacing: Story = {
  args: {
    contentSettings: {
      gap: '20px',
    },
    paragraph: {
      rows: 4,
      gap: '20px',
      height: '12px',
    },
    title: null,
    avatar: null,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Пример, где задаётся межстрочный интервал через CSS-переменную (gap) и высота строк для параграфа. Это позволяет тонко настраивать внешний вид скелета.',
      },
    },
  },
};
