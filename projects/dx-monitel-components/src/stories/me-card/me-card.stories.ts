import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeCardComponent } from '../../public-api';
import { MeIconComponent } from '../../public-api';
import { MeChipComponent } from '../../public-api';
import { DxButtonModule, DxDropDownButtonModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { MeButtonModule } from '../../public-api';
import { MeDropDownButtonModule } from '../../public-api';
import { addX20, mailX20, publicX20 } from '@monitel/me-icons';
import { registry } from '../../../.storybook/preview';

const dropDownItems = [
  { id: 1, name: 'Пункт меню 1' },
  { id: 2, name: 'Пункт меню 2' },
  { id: 3, name: 'Пункт меню 3' },
];

const meta: Meta<MeCardComponent> = {
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
        MeDropDownButtonModule
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Определяет размер карточки',
    },
    showHeader: {
      control: 'boolean',
      description: 'Показывать ли заголовок',
    },
    showFooter: {
      control: 'boolean',
      description: 'Показывать ли футер',
    },
  },
  args: {
    size: 'medium',
    showHeader: true,
    showFooter: true,
  }
};

export default meta;
type Story = StoryObj<MeCardComponent>;

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
      onSyncClick: () => console.log('Sync clicked'),
      onInfoClick: () => console.log('Info clicked'),
      icons: {
        sync: registry.getIcon(addX20),
        info: registry.getIcon(mailX20),
        more: registry.getIcon(publicX20),
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
            meButton
            iconOnly="overflow"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <span>Заголовок карточки</span>
        </ng-container>

        <ng-container card-header-right *ngIf="size !== 'small'">
          <me-chip
            [label]="chipProps.label"
            [size]="size"
            [count]="chipProps.count"
            [selected]="chipProps.selected"
            [removable]="chipProps.removable"
            style="margin-right: 16px;"
          ></me-chip>
          <dx-drop-down-button
            meDropDownButton
            [items]="dropDownItems"
            [icon]="icons.info"
            [stylingMode]="'text'"
            [size]="size"
            displayExpr="name"
          ></dx-drop-down-button>
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
            text="Cancel"
            [stylingMode]="'text'"
            [size]="size"
          ></dx-button>
          <dx-button
            meButton
            text="Save Draft"
            [stylingMode]="'outlined'"
            [size]="size"
          ></dx-button>
          <dx-button
            meButton
            text="Publish"
            type="success"
            [stylingMode]="'contained'"
            [size]="size"
          ></dx-button>
        </ng-container>
      </me-card>
    `
  })
};

export const ScrollableContent: Story = {
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
      onSyncClick: () => console.log('Sync clicked'),
      onInfoClick: () => console.log('Info clicked'),
      icons: {
        sync: registry.getIcon(addX20),
        info: registry.getIcon(mailX20),
        more: registry.getIcon(publicX20),
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
          <dx-button
            meButton
            iconOnly="overflow"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <span>Карточка с прокруткой</span>
        </ng-container>

        <ng-container card-header-right *ngIf="size !== 'small'">
          <me-chip
            [label]="chipProps.label"
            [size]="size"
            [count]="chipProps.count"
            [selected]="chipProps.selected"
            [removable]="chipProps.removable"
            style="margin-right: 16px;"
          ></me-chip>
          <dx-drop-down-button
            meDropDownButton
            [items]="dropDownItems"
            [icon]="icons.info"
            [stylingMode]="'text'"
            [size]="size"
              displayExpr="name"
          ></dx-drop-down-button>
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
            text="Cancel"
            [stylingMode]="'text'"
            [size]="size"
          ></dx-button>
          <dx-button
            meButton
            text="Save Draft"
            [stylingMode]="'outlined'"
            [size]="size"
          ></dx-button>
          <dx-button
            meButton
            text="Publish"
            type="success"
            [stylingMode]="'contained'"
            [size]="size"
          ></dx-button>
        </ng-container>
      </me-card>
    `
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
  args: {
    size: 'medium',
    showHeader: true,
    showFooter: true,
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
      onSyncClick: () => console.log('Sync clicked'),
      onInfoClick: () => console.log('Info clicked'),
      icons: {
        sync: registry.getIcon(addX20),
        info: registry.getIcon(mailX20),
        more: registry.getIcon(publicX20),
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
            meButton
            iconOnly="overflow"
            [stylingMode]="'text'"
            [size]="size"
            (onClick)="onSyncClick()"
          ></dx-button>
          <span>Карточка без ограничения высоты</span>
        </ng-container>

        <ng-container card-header-right *ngIf="size !== 'small'">
          <me-chip
            [label]="chipProps.label"
            [size]="size"
            [count]="chipProps.count"
            [selected]="chipProps.selected"
            [removable]="chipProps.removable"
            style="margin-right: 16px;"
          ></me-chip>
          <dx-drop-down-button
            meDropDownButton
            [items]="dropDownItems"
            [icon]="icons.info"
            [stylingMode]="'text'"
            [size]="size"
            displayExpr="name"
          ></dx-drop-down-button>
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
            text="Cancel"
            [stylingMode]="'text'"
            [size]="size"
          ></dx-button>
          <dx-button
            meButton
            text="Save Draft"
            [stylingMode]="'outlined'"
            [size]="size"
          ></dx-button>
          <dx-button
            meButton
            text="Publish"
            type="success"
            [stylingMode]="'contained'"
            [size]="size"
          ></dx-button>
        </ng-container>
      </me-card>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Пример карточки с большим количеством контента без ограничения высоты.',
      },
    },
  },
};
