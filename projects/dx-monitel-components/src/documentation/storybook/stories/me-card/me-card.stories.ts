import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxButtonModule, DxDropDownButtonModule } from 'devextreme-angular';
import {
  MeButtonModule,
  MeCardComponent,
  MeChipComponent,
  MeDropDownButtonModule,
  MeIconComponent,
  MeIconStoreService,
} from '../../../../public-api';

const iconStore = new MeIconStoreService();

const dropDownItems = [
  { id: 1, name: 'Пункт меню 1' },
  { id: 2, name: 'Пункт меню 2' },
  { id: 3, name: 'Пункт меню 3' },
];

export default {
  title: 'Components/Card',
  component: MeCardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        DxButtonModule,
        DxDropDownButtonModule,
        MeCardComponent,
        MeIconComponent,
        MeChipComponent,
        MeButtonModule,
        MeDropDownButtonModule,
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Определяет размер карточки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    showHeader: {
      control: 'boolean',
      description: 'Показывать заголовок.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showFooter: {
      control: 'boolean',
      description: 'Показывать футер.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    contentHeight: {
      control: 'text',
      description:
        'Устанавливает максимальную высоту контента в значениях с которыми работает CSS, например: "auto", "200px", "100%", "fit-content".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
  },
  args: {
    size: 'medium',
    showHeader: true,
    showFooter: true,
    contentHeight: 'auto',
  },
} satisfies Meta<MeCardComponent>;

type Story = StoryObj<MeCardComponent>;

const simpleCardTemplate = `
<me-card [size]="size" [showHeader]="true" [showFooter]="true">
  <!-- Заголовок -->
  <ng-container card-header-left>
    <span (click)="onHeaderClick()">Простой заголовок</span>
  </ng-container>

  <!-- Основной контент -->
  <p>
    Это пример простого содержимого карточки, демонстрирующий базовую архитектуру слотов.
    Здесь можно разместить любой текст или другой контент.
  </p>

  <!-- Подвал -->
  <ng-container card-footer>
    <dx-button
      meButton
      text="Действие"
      [stylingMode]="'normal'"
      [size]="size"
      (onClick)="onFooterClick()"
    ></dx-button>
  </ng-container>
</me-card>`;

export const SimpleCard: Story = {
  render: (args) => ({
    props: {
      ...args,
      onHeaderClick: action('Заголовок нажат'),
      onFooterClick: action('Кнопка подвала нажата'),
    },
    template: simpleCardTemplate,
  }),
};

export const ComplexCard: Story = {
  render: (args) => ({
    props: {
      ...args,
      chipProps: {
        label: 'Новая',
        size: 'medium',
        count: null,
        selected: false,
        removable: false,
      },
      dropDownItems,
      displayExpr: 'name',
      onSyncClick: action('Sync clicked'),
      onInfoClick: action('Info clicked'),
      icons: {
        sync: iconStore.getIcon({ icon: 'add', size: '24' }),
        info: iconStore.getIcon({ icon: 'mail', size: '24' }),
        more: iconStore.getIcon({ icon: 'public', size: '24' }),
      },
    },
    template: `
      <me-card
        [size]="size"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
      >
        <!-- Header -->
        <ng-container card-header-left>
          <dx-button
            meButton class="header-card-icon"
            iconOnly="public"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <span>Заголовок карточки</span>
        </ng-container>

        <ng-container card-header-right>
          <me-chip class="card-header-btn"
            [label]="chipProps.label"
            [size]="size"
            [count]="chipProps.count"
            [selected]="chipProps.selected"
            [removable]="chipProps.removable"
            style="margin-right: 16px;"
          ></me-chip>
          <dx-button
            meButton
            iconOnly="cached"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <dx-button
            meButton
            iconOnly="help"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <dx-button
            meButton
            iconOnly="overflow"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
        </ng-container>

        <!-- Content -->
        <p>
          Это пример содержимого карточки с использованием различных компонентов.
          Здесь может быть размещен любой контент, включая текст, кнопки, чипы и другие элементы.
        </p>

        <!-- Footer -->
        <ng-container card-footer>
          <dx-button
            meButton
            text="Добавить"
            [stylingMode]="'normal'"
            [size]="size"
          ></dx-button>
          <div class="card-footer-box">
          <dx-button
            meButton
            text="Принять"
            [stylingMode]="'normal'"
            [size]="size"
            buttonType="default"
          ></dx-button>
          <dx-button
            meButton
            text="Отмена"
            [stylingMode]="'normal'"
            [size]="size"
          ></dx-button>
          </div>
        </ng-container>
      </me-card>
    `,
  }),
};

export const LimitedAndScrollableContent: Story = {
  args: {
    size: 'medium',
    showHeader: true,
    showFooter: true,
    contentHeight: '200px',
  },
  render: (args) => ({
    props: {
      ...args,
      chipProps: {
        label: 'Новая',
        size: 'medium',
        count: null,
        selected: false,
        removable: false,
      },
      dropDownItems,
      displayExpr: 'name',
      onSyncClick: action('Sync clicked'),
      onInfoClick: action('Info clicked'),
      icons: {
        sync: iconStore.getIcon({ icon: 'add', size: '24' }),
        info: iconStore.getIcon({ icon: 'mail', size: '24' }),
        more: iconStore.getIcon({ icon: 'public', size: '24' }),
      },
    },
    template: `
      <me-card
        [size]="size"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
        [contentHeight]="contentHeight"
      >
        <!-- Header -->
        <ng-container card-header-left>
          <dx-button class="header-card-icon"
            meButton
            iconOnly="public"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <span>Карточка с прокруткой</span>
        </ng-container>

        <ng-container card-header-right>
          <me-chip class="card-header-btn"
            [label]="chipProps.label"
            [size]="size"
            [count]="chipProps.count"
            [selected]="chipProps.selected"
            [removable]="chipProps.removable"
            style="margin-right: 16px;"
          ></me-chip>
          <dx-button
            meButton
            iconOnly="cached"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <dx-button
            meButton
            iconOnly="help"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <dx-button
            meButton
            iconOnly="overflow"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
        </ng-container>

        <!-- Content с большим количеством текста -->
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </div>

        <!-- Footer -->
        <ng-container card-footer>
          <dx-button
            meButton
            text="Добавить"
            [stylingMode]="'text'"
            [size]="size"
            [stylingMode]="'normal'"
          ></dx-button>
          <div class="card-footer-box">
          <dx-button
            meButton
            text="Принять"
            [stylingMode]="'normal'"
            [size]="size"
            buttonType="default"
          ></dx-button>
          <dx-button
            meButton
            text="Отмена"
            [stylingMode]="'normal'"
            [size]="size"
          ></dx-button>
          </div>
        </ng-container>
      </me-card>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Пример карточки с ограниченной высотой контента и прокруткой.',
      },
    },
  },
};

export const UnlimitedContent: Story = {
  render: (args) => ({
    props: {
      ...args,
      chipProps: {
        label: 'Новая',
        size: 'medium',
        count: null,
        selected: false,
        removable: false,
      },
      dropDownItems,
      displayExpr: 'name',
      onSyncClick: action('Sync clicked'),
      onInfoClick: action('Info clicked'),
      icons: {
        sync: iconStore.getIcon({ icon: 'add', size: '24' }),
        info: iconStore.getIcon({ icon: 'mail', size: '24' }),
        more: iconStore.getIcon({ icon: 'public', size: '24' }),
      },
    },
    template: `
      <me-card
        [size]="size"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
      >
        <!-- Header -->
        <ng-container card-header-left>
          <dx-button class="header-card-icon"
            meButton
            iconOnly="public"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <span>Карточка без ограничения высоты</span>
        </ng-container>

        <ng-container card-header-right>
          <me-chip class="card-header-btn"
            [label]="chipProps.label"
            [size]="size"
            [count]="chipProps.count"
            [selected]="chipProps.selected"
            [removable]="chipProps.removable"
            style="margin-right: 16px;"
          ></me-chip>
          <dx-button
            meButton
            iconOnly="cached"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <dx-button
            meButton
            iconOnly="help"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <dx-button
            meButton
            iconOnly="overflow"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
        </ng-container>

        <!-- Content с большим количеством текста -->
        <div>
          <h3>Раздел 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <h3>Раздел 2</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

          <h3>Раздел 3</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>

          <h3>Раздел 4</h3>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor.</p>

          <h3>Раздел 5</h3>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
        </div>

        <!-- Footer -->
        <ng-container card-footer>
          <dx-button
            meButton
            text="Добавить"
            [size]="size"
            [stylingMode]="'normal'"
          ></dx-button>
          <div class="card-footer-box">
          <dx-button
            meButton
            text="Принять"
            [size]="size"
            [stylingMode]="'normal'"
            buttonType="default"
          ></dx-button>
          <dx-button
            meButton
            text="Отмена"
            [stylingMode]="'normal'"
            [size]="size"
          ></dx-button>
          </div>
        </ng-container>
      </me-card>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Пример карточки с большим количеством контента без ограничения высоты.',
      },
    },
  },
};

export const CardSizeSmall: Story = {
  args: {
    size: 'small',
  },
  render: (args) => ({
    props: {
      ...args,
      onHeaderClick: action('Заголовок нажат'),
      onFooterClick: action('Кнопка подвала нажата'),
    },
    template: simpleCardTemplate,
  }),
};

export const CardSizeMedium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => ({
    props: {
      ...args,
      onHeaderClick: action('Заголовок нажат'),
      onFooterClick: action('Кнопка подвала нажата'),
    },
    template: simpleCardTemplate,
  }),
};

export const CardSizeLarge: Story = {
  args: {
    size: 'large',
  },
  render: (args) => ({
    props: {
      ...args,
      onHeaderClick: action('Заголовок нажат'),
      onFooterClick: action('Кнопка подвала нажата'),
    },
    template: simpleCardTemplate,
  }),
};
