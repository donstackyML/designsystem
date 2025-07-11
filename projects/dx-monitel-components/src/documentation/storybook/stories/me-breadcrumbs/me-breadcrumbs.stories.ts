import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import {
  DxButtonModule,
  DxContextMenuModule,
  DxMenuModule,
} from 'devextreme-angular';
import {
  MeBreadcrumbsComponent,
  MeButtonModule,
  MeIconComponent,
} from '../../../../public-api';
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
      options: ['small', 'medium', 'large'],
      description:
        'Изменяет размер компонента элементов, которыми управляет компонент `me-breadcrumbs`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    dropdownPosition: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Определяет положение выпадающего меню.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom' },
      },
    },
    truncateFrom: {
      control: 'select',
      options: ['left', 'right'],
      description:
        'Определяет, с какой стороны будет происходить усечение элементов компонента `me-breadcrumbs`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'right' },
      },
    },
    showDivider: {
      control: 'boolean',
      description:
        'Определяет, будет ли отображаться разделитель между элементами.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    displayExpr: {
      control: 'text',
      description:
        'Имя поля, используемого для отображения текста хлебной крошки. По умолчанию "text".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    iconExpr: {
      control: 'text',
      description:
        'Имя поля, используемого для отображения иконки хлебной крошки. По умолчанию "icon".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'icon' },
      },
    },
    itemsExpr: {
      control: 'text',
      description:
        'Имя поля, используемого для вложенных элементов хлебных крошек. По умолчанию "items".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'items' },
      },
    },
    urlExpr: {
      control: 'text',
      description:
        'Имя поля, используемого для ссылки хлебной крошки. По умолчанию "url".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'url' },
      },
    },
    itemClick: {
      action: 'itemClicked',
      table: {
        disable: true,
      },
    },
  },
  args: {
    truncateFrom: 'right',
    size: 'small',
    items: meBreadcrumbsMockData,
    showDivider: true,
    displayExpr: 'text',
    iconExpr: 'icon',
    itemsExpr: 'items',
    urlExpr: 'url',
    dropdownPosition: 'bottom',
  },
  render: (args) => ({
    props: args,
    template: `<me-breadcrumbs ${argsToTemplate(args)}></me-breadcrumbs>`,
    styles: [
      `
        :host {
          display: block;
        }
      `,
    ],
  }),
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
    showDivider: false,
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
    items: [
      {
        text: 'Home',
        url: '/',
        icon: 'home',
      },
      {
        text: 'Category 1',
        url: '/cat1',
        icon: 'repeat',
      },
      {
        text: 'Category 2',
        url: '/cat1/cat2',
        icon: 'repeat',
      },
      {
        text: 'Category 3',
        url: '/cat1/cat2/cat3',
        icon: 'repeat',
      },
      {
        text: 'Category 4',
        url: '/cat1/cat2/cat3/cat4',
        icon: 'repeat',
      },
      {
        text: 'Category 5',
        url: '/cat1/cat2/cat3/cat4/cat5',
        icon: 'repeat',
      },
      {
        text: 'Product',
        url: '/cat1/cat2/cat3/cat4/cat5/product',
        icon: 'like',
      },
      {
        text: 'Product',
        url: '/cat1/cat2/cat3/cat4/cat5/product',
        icon: 'like',
      },
      {
        text: 'Product',
        url: '/cat1/cat2/cat3/cat4/cat5/product',
        icon: 'like',
      },
      {
        text: 'Product',
        url: '/cat1/cat2/cat3/cat4/cat5/product',
        icon: 'like',
      },
      {
        text: 'Product',
        url: '/cat1/cat2/cat3/cat4/cat5/product',
        icon: 'like',
      },
      {
        text: 'Product',
        url: '/cat1/cat2/cat3/cat4/cat5/product',
        icon: 'like',
      },
      {
        text: 'Product',
        url: '/cat1/cat2/cat3/cat4/cat5/product',
        icon: 'like',
      },
      {
        text: 'Product',
        url: '/cat1/cat2/cat3/cat4/cat5/product',
        icon: 'like',
      },
      {
        text: 'Product',
        url: '/cat1/cat2/cat3/cat4/cat5/product',
        icon: 'like',
      },
    ],
  },
};

export const WithFlexContainer: Story = {
  args: {
    items: meBreadcrumbsMockDataWithManyItems,
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
      }
      `,
    ],
  }),
};

@Component({
  selector: 'storybook-breadcrumbs-wrapper',
  template: `
    <div class="container">
      <me-breadcrumbs
        [items]="breadcrumbs"
        [truncateFrom]="truncateFrom"
        [size]="size"
        [showDivider]="showDivider"
        [displayExpr]="displayExpr"
        [iconExpr]="iconExpr"
        [itemsExpr]="itemsExpr"
        [urlExpr]="urlExpr"
        (itemClick)="onItemClick($event)"
      >
      </me-breadcrumbs>
      <div class="button-group">
        <dx-button
          meButton
          text="Добавить хлебную крошку"
          (click)="addBreadcrumb()"
        ></dx-button>
        <dx-button
          meButton
          text="Удалить последнюю"
          (click)="removeLastBreadcrumb()"
        ></dx-button>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
        gap: 10px;
      }
      .button-group {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
    `,
  ],
})
class BreadcrumbsWrapperComponent {
  @Input() items: any[] = [];
  @Input() truncateFrom: 'left' | 'right' = 'right';
  @Input() size: 'small' | 'large' = 'small';
  @Input() showDivider = true;
  @Input() displayExpr: string = 'text';
  @Input() iconExpr: string = 'icon';
  @Input() itemsExpr: string = 'items';
  @Input() urlExpr: string = 'url';

  breadcrumbs: any[] = [];

  ngOnInit() {
    this.breadcrumbs = [...this.items];
  }

  addBreadcrumb() {
    this.breadcrumbs = [
      ...this.breadcrumbs,
      {
        text: `Новый элемент ${this.breadcrumbs.length + 1}`,
        url: `/new-${this.breadcrumbs.length + 1}`,
      },
    ];
  }

  removeLastBreadcrumb() {
    this.breadcrumbs = this.breadcrumbs.slice(0, this.breadcrumbs.length - 1);
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
  render: (args) => ({
    props: args,
    template: `
      <storybook-breadcrumbs-wrapper
        [items]="items"
        [size]="size"
        [showDivider]="showDivider"
        [truncateFrom]="truncateFrom"
        [displayExpr]="displayExpr"
        [iconExpr]="iconExpr"
        [itemsExpr]="itemsExpr"
        [urlExpr]="urlExpr"
      ></storybook-breadcrumbs-wrapper>
    `,
  }),
};

export const WithCustomFields: Story = {
  args: {
    items: [
      {
        name: 'Главная',
        link: '/',
        iconData: 'home',
      },
      {
        name: 'Продукты',
        link: '/products',
        links: [
          {
            name: 'Электроника',
            link: '/products/electronics',
            iconData: 'computer_x20',
          },
        ],
      },
    ],
    displayExpr: 'name',
    itemsExpr: 'links',
    iconExpr: 'iconData',
    urlExpr: 'link',
  },
};

export const WithDropdownTop: Story = {
  args: {
    items: meBreadcrumbsMockDataWithNestedItemsAndIcons,
    dropdownPosition: 'top',
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
        height: 80%;
        align-items: flex-end;
      }
      `,
    ],
  }),
};
