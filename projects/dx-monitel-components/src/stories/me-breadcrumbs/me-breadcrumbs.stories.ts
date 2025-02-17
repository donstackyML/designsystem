import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  DxButtonModule,
  DxContextMenuModule,
  DxMenuModule,
} from 'devextreme-angular';
import {
  MeBreadcrumbsComponent,
  MeIconComponent,
  MeIconStoreService
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
  }
} satisfies Meta<MeBreadcrumbsComponent> ;

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
