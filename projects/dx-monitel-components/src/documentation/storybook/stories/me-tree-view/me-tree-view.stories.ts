import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxTreeViewComponent } from 'devextreme-angular';
import { MeTreeViewDirective } from '../../../../public-api';
import { meTreeViewMockData } from './me-tree-view-mock-data';
import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';

export default {
  title: 'Components/TreeView',
  decorators: [
    moduleMetadata({
      declarations: [MeTreeViewDirective, DxTreeViewComponent],
    }),
  ],
  argTypes: {
    dataSource: {
      description: 'Определяет ветви в дереве.',
      table: {
        type: { summary: 'any[]' },
        defaultValue: { summary: '[]' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Принимает размер `TreeView` и его элементов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает `TreeView` и его элементы.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showCheckBoxesMode: {
      control: 'select',
      options: ['normal', 'selectAll', 'none'],
      description:
        'Определяет режим отображения чекбоксов `TreeView` и его элементов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Определяет режим выбора элементов в `TreeView`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
    },
    textTruncateBehavior: {
      control: 'select',
      options: ['truncate', 'wrap'],
      description: 'Определяет поведение текста в `TreeView` и его элементах.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'wrap' },
      },
    },
    searchEnabled: {
      control: 'boolean',
      description: 'Включает возможность поиска в `TreeView`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    expandNodesRecursive: {
      control: 'boolean',
      description: 'Определяет, будут ли узлы раскрываться рекурсивно.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    dataSource: meTreeViewMockData,
    size: 'large',
    disabled: false,
    showCheckBoxesMode: 'normal',
    selectionMode: 'single',
    textTruncateBehavior: 'wrap',
    searchEnabled: false,
    expandNodesRecursive: false,
    virtualModeEnabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<dx-tree-view meTreeView ${argsToTemplate(
      args
    )}></dx-tree-view>`,
  }),
} satisfies Meta<MeTreeViewDirective | DxTreeViewComponent>;

type Story = StoryObj<MeTreeViewDirective | DxTreeViewComponent>;

export const Default: Story = {};

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

export const TextOverflowBehaviorTruncateWithTooltip: Story = {
  args: {
    textTruncateBehavior: 'truncate',
  },
};

export const TextOverflowBehaviorWrap: Story = {
  args: {
    textTruncateBehavior: 'wrap',
  },
};

export const SelectionModeSingle: Story = {
  args: {
    selectionMode: 'single',
  },
};

export const SelectionModeMultiple: Story = {
  args: {
    selectionMode: 'multiple',
  },
};

export const WithSearch: Story = {
  args: {
    searchEnabled: true,
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
  },
};

export const WithFixedHeight: Story = {
  args: {
    height: '300px',
  },
};

@Component({
  selector: 'tree-view-with-virtual-mode-demo',
  template: ` <dx-tree-view
    meTreeView
    dataStructure="plain"
    keyExpr="Id"
    displayExpr="Name"
    parentIdExpr="CategoryId"
    hasItemsExpr="IsGroup"
    [virtualModeEnabled]="true"
    [dataSource]="dataSource"
  ></dx-tree-view>`,
})
class TreeViewDemo {
  dataSource = new DataSource({
    store: new ODataStore({
      version: 2,
      url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/HierarchicalItems',
    }),
  });
}

export const WithVirtualMode: Story = {
  decorators: [
    moduleMetadata({
      declarations: [TreeViewDemo],
    }),
  ],

  render: (args) => ({
    props: args,
    template: `
      <tree-view-with-virtual-mode-demo></tree-view-with-virtual-mode-demo>
    `,
  }),
};
