import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeCardComponent } from '../../public-api';
import { MeIconComponent } from '../../public-api';
import { MeChipComponent, MeChipsContainerComponent } from '../../public-api';
import { DxButtonModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Components/MeCard',
  component: MeCardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        DxButtonModule,
        MeCardComponent,
        MeIconComponent,
        MeChipComponent,
        MeChipsContainerComponent,
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description:
        'Определяет размер карточки. Возможные значения: small, medium, large.',
      defaultValue: 'medium',
    },
    showHeader: {
      control: 'boolean',
      description:
        'Показывать ли заголовок карточки. True - отображать, False - скрыть.',
      defaultValue: true,
    },
    showFooter: {
      control: 'boolean',
      description:
        'Показывать ли нижний колонтитул карточки. True - отображать, False - скрыть.',
      defaultValue: true,
    },
    contentHeight: {
      control: 'text',
      description:
        'Максимальная высота содержимого карточки. Можно задать значение в px, %, и т.д.',
      defaultValue: '300px',
    },
  },
} as Meta<MeCardComponent>;

type Story = StoryObj<MeCardComponent>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
      <me-card
        [size]="size"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
        [contentHeight]="contentHeight">

        <ng-container card-header-left>
          <me-icon icon="sync" [size]="size" color="#000000"></me-icon>
          <span>Заголовок</span>
        </ng-container>

        <ng-container card-header-right *ngIf="size !== 'small'">
          <me-chip [label]="'Маркер'" [size]="'large'" [removable]="false" [color]="'#ffffff'" [backgroundColor]="'#4CAF50'"></me-chip>
          <me-icon icon="sync" [size]="size" color="#000000" (click)="onSyncClick()"></me-icon>
          <me-icon icon="info" [size]="size" color="#000000" (click)="onInfoClick()"></me-icon>
          <me-icon icon="more_vert" [size]="size" color="#000000" (click)="onMoreClick()"></me-icon>
        </ng-container>

        <div>
          <!-- Содержимое карточки -->
        </div>

        <ng-container card-footer>
          <dx-button text="Добавить" type="default" stylingMode="text" style="margin-right: auto;"></dx-button>
          <dx-button text="Принять" type="success" stylingMode="contained" style="background-color: #3f51b5; color: white; margin-right: 8px;"></dx-button>
          <dx-button text="Отмена" type="default" stylingMode="outlined" style="border-color: #3f51b5; color: #3f51b5;"></dx-button>
        </ng-container>
      </me-card>
    `,
    styles: [
      `
      .small-icon {
        font-size: 24px;
      }
    `,
    ],
  }),
};

export const Default: Story = {
  ...Template,
  args: {
    size: 'medium',
    showHeader: true,
    showFooter: true,
    contentHeight: '300px',
  },
};

export const SmallCard: Story = {
  ...Template,
  args: {
    ...Default.args,
    size: 'small',
    contentHeight: '200px',
  },
};

export const LargeCard: Story = {
  ...Template,
  args: {
    ...Default.args,
    size: 'large',
    contentHeight: '400px',
  },
};

export const NoFooter: Story = {
  ...Template,
  args: {
    ...Default.args,
    showFooter: false,
  },
};

export const WithOverflow: Story = {
  ...Template,
  args: {
    ...Default.args,
    size: 'small',
    contentHeight: '200px',
  },
  render: (args) => ({
    props: args,
    template: `
      <me-card
        [size]="size"
        [showHeader]="showHeader"
        [showFooter]="showFooter"
        [contentHeight]="contentHeight">

        <ng-container card-header-left>
          <me-icon icon="sync" [size]="size" color="#000000"></me-icon>
          <span>Overflow Example</span>
        </ng-container>

        <div>
          <p>This is an example of a card with overflow content. The content will scroll when it exceeds the maximum height.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.</p>
        </div>

        <ng-container card-footer>
          <dx-button text="Принять" type="success" stylingMode="contained" style="background-color: #3f51b5; color: white; margin-right: 8px;"></dx-button>
          <dx-button text="Отмена" type="default" stylingMode="outlined" style="border-color: #3f51b5; color: #3f51b5;"></dx-button>
        </ng-container>
      </me-card>
    `,
  }),
};
