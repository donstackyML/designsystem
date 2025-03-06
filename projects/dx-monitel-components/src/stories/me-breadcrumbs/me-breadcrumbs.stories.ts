import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  DxButtonModule,
  DxContextMenuModule,
  DxMenuModule,
} from 'devextreme-angular';
import {
  MeBreadcrumbsComponent,
  MeButtonModule,
  MeIconComponent,
} from '../../public-api';
import {
  meBreadcrumbsMockData,
  meBreadcrumbsMockDataWithIcons,
  meBreadcrumbsMockDataWithIconsOnly,
  meBreadcrumbsMockDataWithManyItems,
  meBreadcrumbsMockDataWithNestedItems,
  meBreadcrumbsMockDataWithNestedItemsAndIcons,
} from './me-breadcrumbs-mock-data';

export default {
  title: 'Components/Breadcrumbs',
  decorators: [
    moduleMetadata({
      imports: [
        MeBreadcrumbsComponent,
        DxMenuModule,
        DxButtonModule,
        DxContextMenuModule,
        MeIconComponent,
      ],
    }),
  ],
  argTypes: {
    items: {
      control: 'object',
      description: 'Определяет массив элементов компонента `me-breadcrumbs`.',
      table: {
        type: { summary: 'BreadcrumbItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Изменяет размер компонента элементов, которыми управляет компонент `me-breadcrumbs`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    truncateFrom: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Определяет, с какой стороны будет происходить усечение элементов компонента `me-breadcrumbs`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' },
      },
    },
    showDivider: {
      control: 'boolean',
      description: 'Определяет, будет ли отображаться разделитель между элементами.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    itemClick: {
      action: 'itemClicked',
      table: {
        disable: true
      }
    }
  },
  args: {
    truncateFrom: 'right',
    size: 'small',
    items: meBreadcrumbsMockData,
    showDivider: true
  },
  render: (args) => ({
    props: args,
    template: `<me-breadcrumbs ${argsToTemplate(args)}></me-breadcrumbs>`,
  })
} satisfies Meta<MeBreadcrumbsComponent>;

type Story = StoryObj<MeBreadcrumbsComponent>;

export const Default: Story = {
  args: {},
};

export const WithIcons: Story = {
  args: {
    items: meBreadcrumbsMockDataWithIcons,
  },
};

export const WithIconsOnly: Story = {
  args: {
    items: meBreadcrumbsMockDataWithIconsOnly,
  },
};

export const WithDropdowns: Story = {
  args: {
    items: meBreadcrumbsMockDataWithNestedItems,
  },
};

export const WithIconsAndDropdowns: Story = {
  args: {
    items: meBreadcrumbsMockDataWithNestedItemsAndIcons,
  },
};

export const WithoutDivider: Story = {
  args: {
    showDivider: false
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const TruncateFromLeft: Story = {
  args: {
    truncateFrom: 'left',
  },
};

export const TruncateFromRight: Story = {
  args: {
    truncateFrom: 'right',
  },
};

export const WithManyItems: Story = {
  args: {
    items: meBreadcrumbsMockDataWithManyItems
  },
};

export const WithFlexContainer: Story = {
  args: {
    items: meBreadcrumbsMockDataWithManyItems
  },
  render: (args) => ({
    props: args,
    template: `
    <div class="container">
      <me-breadcrumbs ${argsToTemplate(args)}></me-breadcrumbs>
    </div>
    `,
    styles: [
      `
      .container {
        display: flex;
        width: 800px;
      }
      `
    ]
  })
};

@Component({
  selector: 'storybook-breadcrumbs-wrapper',
  template: `
    <div style="margin-bottom: 10px;">
      <dx-button meButton text="Добавить хлебную крошку" (click)="addBreadcrumb()"></dx-button>
    </div>
    <me-breadcrumbs
      [items]="breadcrumbs"
      [truncateFrom]="truncateFrom"
      [size]="size"
      [showDivider]="showDivider"
      (itemClick)="onItemClick($event)">
    </me-breadcrumbs>
  `,
})
class BreadcrumbsWrapperComponent {
  @Input() items: any[] = [];
  @Input() truncateFrom: 'left' | 'right' = 'right';
  @Input() size: 'small' | 'large' = 'small';
  @Input() showDivider = true;

  breadcrumbs: any[] = [];

  ngOnInit() {
    this.breadcrumbs = [...this.items];
  }

  addBreadcrumb() {
    this.breadcrumbs = [
      ...this.breadcrumbs,
      { text: `Новый элемент ${this.breadcrumbs.length + 1}`, url: `/new-${this.breadcrumbs.length + 1}` },
    ];
  }

  onItemClick(item: any) {
    console.log('Нажата хлебная крошка:', item);
  }
}

export const DynamicItems: Story = {
  decorators: [
    moduleMetadata({
      declarations: [BreadcrumbsWrapperComponent],
      imports: [
        CommonModule,
        DxMenuModule,
        MeBreadcrumbsComponent,
        DxButtonModule,
        MeButtonModule,
        DxContextMenuModule,
        MeIconComponent,
      ],
    }),
  ],
  args: {
    items: [
      { text: 'Главная', url: '/' },
      { text: 'Категория', url: '/category' },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <storybook-breadcrumbs-wrapper
      [items]="items"
      [size]="size"
      [showDivider]="showDivider"
      [truncateFrom]="truncateFrom"
      ></storybook-breadcrumbs-wrapper>
    `,
  }),
};
