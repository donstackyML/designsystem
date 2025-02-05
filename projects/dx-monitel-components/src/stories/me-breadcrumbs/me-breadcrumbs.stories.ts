import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  DxButtonModule,
  DxContextMenuModule,
  DxMenuModule,
} from 'devextreme-angular';
import { MeBreadcrumbsComponent } from '../../lib/components/me-breadcrumbs/me-breadcrumbs.component';
import { MeIconStoreService } from '../../lib/service/icon-store.service';
import { MeIconComponent } from '../../public-api';
import {
  meBreadcrumbsMockData,
  meBreadcrumbsMockDataWithIcons,
  meBreadcrumbsMockDataWithManyItems,
  meBreadcrumbsMockDataWithNestedItems,
  meBreadcrumbsMockDataWithNestedItemsAndIcons
} from './me-breadcrumbs-mock-data';

const meta: Meta<MeBreadcrumbsComponent> = {
  title: 'Components/Breadcrumbs',
  component: MeBreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MeBreadcrumbsComponent,
        DxMenuModule,
        DxButtonModule,
        DxContextMenuModule,
        MeIconComponent,
      ],
      providers: [MeIconStoreService],
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
  }
};

export default meta;
type Story = StoryObj<MeBreadcrumbsComponent>;

export const Default: Story = {
  args: {},
};

export const WithIcons: Story = {
  args: {
    items: meBreadcrumbsMockDataWithIcons,
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
