import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxTagBoxComponent, DxValidatorModule } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { MeLabelDirective, MeTagBoxDirective } from '../../../../public-api';
import { meTagBoxMockDataWithCategories, meTagBoxMockDataWithDividers } from './me-tag-box-mock-data';

function generateItems(length: number): string[] {
  return Array.from({ length }, (_, i) => `Пункт ${i + 1}`);
}

const defaultItems = generateItems(25);

export default {
  title: 'Components/Fields/TagBox',
  decorators: [
    moduleMetadata({
      imports: [DxValidatorModule, CommonModule],
      declarations: [MeTagBoxDirective, DxTagBoxComponent, MeLabelDirective],
    }),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст, отображаемый в качестве лейбла.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Текст подсказки, отображаемый внутри поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    items: {
      control: 'object',
      description: 'Массив данных для отображения',
      table: {
        type: {
          summary: 'Array<{ disabled?: boolean; html?: string; template?: any; text?: string; visible?: boolean; } | Array<any>>'
        },
        defaultValue: { summary: '[]' },
      },
    },
    dataSource: {
      description: 'Данные для отображения',
      table: {
        type: { summary: 'Array<any>' },
        defaultValue: { summary: '[]' },
      },
    },
    value: {
      control: 'text',
      description: 'Значение поля.',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Изменяет размер текстового поля.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    labelMode: {
      control: 'select',
      options: ['outside', 'static', 'floating', 'hidden'],
      description: 'Указывает, где будет размещаться лейбл.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outside' },
      },
    },
    showClearButton: {
      control: 'boolean',
      description: 'Показывает кнопку для очистки поля.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Определяет состояние только для чтения',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает компонент и его элементы.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    dividersVisibility: {
      control: 'select',
      options: ['auto', 'all', 'none'],
      description: 'Определяет видимость разделителей в выпадающем меню.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    grouped: {
      control: 'boolean',
      description: 'Определяет, использовать ли группировку элементов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxDisplayedTags: {
      control: 'number',
      description: 'Максимальное количество отображаемых тегов.',
      table: {
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showMultiTagOnly: {
      control: 'boolean',
      description: 'Отображает мульти-тег, если выбрано более одного значения.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    applyValueMode: {
      control: 'select',
      options: ['instantly', 'useButtons'],
      description:
        'Режим применения данных. `instantly` - Применяет значения, когда они выбраны. `useButtons` - Применяет значения, когда пользователь нажимает кнопку "ОК".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'instantly' },
      },
    },
    hideSelectedItems: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showSelectionControls: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectAllMode: {
      control: 'select',
      options: ['allPages', 'page'],
      description:
        'Определяет, какие элементы будут выбраны при нажатии на кнопку "Выбрать все".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'page' },
      },
    },
    showRequiredMark: {
      control: 'boolean',
      description: 'Определяет, является ли поле обязательным для заполнения.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isValid: {
      control: 'boolean',
      description: 'Проверяет валидность данных.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    noDataText: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "No data to display" },
      },
    },
    validationError: {
      control: 'text',
      description: 'Текст ошибки валидации.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'null' },
      },
    },
    validationMessageMode: {
      control: 'select',
      options: ['auto', 'always'],
      description: 'Режим отображения сообщений об ошибках.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    validationMessagePosition: {
      control: 'select',
      options: ['auto', 'top', 'bottom', 'left', 'right'],
      description: 'Расположение сообщений об ошибках.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина компонента.',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота компонента.',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Выберите...',
    items: defaultItems,
    dataSource: null,
    size: 'small',
    labelMode: 'outside',
    showClearButton: false,
    disabled: false,
    readOnly: false,
    applyValueMode: 'instantly',
    searchEnabled: true,
    grouped: undefined,
    maxDisplayedTags: undefined,
    showMultiTagOnly: true,
    showSelectionControls: false,
    selectAllMode: 'page',
    hideSelectedItems: false,
    isValid: true,
    showRequiredMark: false,
    noDataText: 'Не найдено',
    validationError: '',
    validationMessageMode: 'auto',
    validationMessagePosition: 'top',
    width: '400px',
    height: '',
  },
  render: (args) => ({
    props: { ...args },
    template: `
      <dx-tag-box
        meTagBox
        ${argsToTemplate(args)}
      >
        <dx-validator>
          <dxi-validation-rule
            type="required"
            message="Required"
          >
          </dxi-validation-rule>
        </dx-validator>
      </dx-tag-box>
    `,
  }),
} satisfies Meta<DxTagBoxComponent | MeTagBoxDirective>;

type Story = StoryObj<DxTagBoxComponent | MeTagBoxDirective>;

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium'
  }
}

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const LabelModeFloating: Story = {
  args: {
    labelMode: 'floating',
  },
};

export const LabelModeOutside: Story = {
  args: {
    labelMode: 'outside',
  },
};

export const LabelModeStatic: Story = {
  args: {
    labelMode: 'static',
  },
};

export const LabelModeHidden: Story = {
  args: {
    labelMode: 'hidden',
  },
};

export const WithLabelRow: Story = {
  args: {
    labelMode: 'hidden',
  },
  render: (args) => ({
    props: args,
    template: `
    <div
      meLabel
      labelDirection="row"
    >
      <span>Label</span>
      <dx-tag-box
        meTagBox
        ${argsToTemplate(args)}
      ></dx-tag-box>
    </div>
    `,
  }),
};

export const WithLabelColumn: Story = {
  args: {
    labelMode: 'hidden'
  },
  render: (args) => ({
    props: args,
    template: `
		<div
      meLabel
		  labelDirection="column"
		>
      <span>Label</span>
      <dx-tag-box
        meTagBox
        ${argsToTemplate(args)}
      ></dx-tag-box>
		</div>`,
  }),
}

export const StateDisabled: Story = {
  args: {
    disabled: true
  },
};

export const StateReadOnly: Story = {
  args: {
    readOnly: true,
    value: generateItems(3)
  },
};

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true,
    value: generateItems(3)
  },
};

export const DividersVisibilityNone: Story = {
  args: {
    dataSource: meTagBoxMockDataWithDividers,
    dividersVisibility: 'none',
    displayExpr: 'name',
  },
};

export const DividersVisibilityAll: Story = {
  args: {
    dataSource: meTagBoxMockDataWithDividers,
    dividersVisibility: 'all',
    displayExpr: 'name',
  },
};

export const DividersVisibilityByContent: Story = {
  args: {
    dataSource: meTagBoxMockDataWithDividers,
    dividersVisibility: 'auto',
    displayExpr: 'name',
  },
};

export const WithRequiredMark: Story = {
  args: {
    showRequiredMark: true
  },
};

export const WithSelectionControls: Story = {
  args: {
    showSelectionControls: true
  },
};

export const ApplyInstantly: Story = {
  args: {
    applyValueMode: 'instantly'
  },
};

export const ApplyWithButtons: Story = {
  args: {
    applyValueMode: 'useButtons'
  },
};

@Component({
  selector: 'me-tag-box-grouped-items-demo',
  template: `
   <dx-tag-box
      meTagBox
      [label]="label"
      [placeholder]="placeholder"
      [items]="items"
      [size]="size"
      [labelMode]="labelMode"
      [showClearButton]="showClearButton"
      [disabled]="disabled"
      [readOnly]="readOnly"
      [applyValueMode]="applyValueMode"
      [searchEnabled]="searchEnabled"
      [grouped]="grouped"
      [maxDisplayedTags]="maxDisplayedTags"
      [showMultiTagOnly]="showMultiTagOnly"
      [showSelectionControls]="showSelectionControls"
      [selectAllMode]="selectAllMode"
      [hideSelectedItems]="hideSelectedItems"
      [isValid]="isValid"
      [showRequiredMark]="showRequiredMark"
      [noDataText]="noDataText"
      [validationMessageMode]="validationMessageMode"
      [validationMessagePosition]="validationMessagePosition"
      [width]="width"
      [height]="height"
      [dataSource]="dataSource"
      displayExpr="Name"
      valueExpr="ID"
    >
    <ng-container *ngIf="hasIcons">
      <div *dxTemplate="let data of 'group'">
        <div class="custom-icon">
          <span class="dx-icon-globe icon"></span>
          {{ data.key }}
        </div>
      </div>
    </ng-container>
  </dx-tag-box>
  `,
  styles: [
    `
      .me-text-body2, .me-text-caption {
        color: var(--Text-Secondary);
        margin-top: 4px;
      }
    .custom-icon {
        display: flex;
        gap: 4px;
      }
    `,
  ]
})
class MeTagBoxGroupedItemsDemo {
  @Input() label: string = 'Label';
  @Input() placeholder: string = 'Выберите...';
  @Input() items: any[] = defaultItems;
  @Input() size: string = 'small';
  @Input() labelMode: string = 'outside';
  @Input() showClearButton: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() applyValueMode: string = 'instantly';
  @Input() searchEnabled: boolean = true;
  @Input() grouped: any = undefined;
  @Input() maxDisplayedTags: any = undefined;
  @Input() showMultiTagOnly: boolean = true;
  @Input() showSelectionControls: boolean = false;
  @Input() selectAllMode: string = 'page';
  @Input() hideSelectedItems: boolean = false;
  @Input() isValid: boolean = true;
  @Input() showRequiredMark: boolean = false;
  @Input() noDataText: string = 'Не найдено';
  @Input() validationMessageMode: string = 'auto';
  @Input() validationMessagePosition: string = 'top';
  @Input() width: string = '400px';
  @Input() height: string = '';

  @Input() hasIcons = false;

  loading = true;
  dataSource = new DataSource({
    store: new ArrayStore({
      data: meTagBoxMockDataWithCategories,
      key: 'Id',
    }),
    group: 'Category',
  })
}

export const GroupedItems: Story = {
  decorators: [
    moduleMetadata({
      declarations: [
        MeTagBoxGroupedItemsDemo,
      ],
    }),
  ],
  args: {
    grouped: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <me-tag-box-grouped-items-demo
        ${argsToTemplate(args)}
      ></me-tag-box-grouped-items-demo>
    `,
  })
};

export const CustomTemplateWithGroupsHeaderIcon: Story = {
  decorators: [
    moduleMetadata({
      declarations: [
        MeTagBoxGroupedItemsDemo,
      ],
    }),
  ],
  args: {
    grouped: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <me-tag-box-grouped-items-demo
        ${argsToTemplate(args)}
        [hasIcons]="true"
      ></me-tag-box-grouped-items-demo>
    `,
  })
};

export const WithMaxDisplayedTags: Story = {
  args: {
    maxDisplayedTags: 3,
    value: generateItems(7),
  },
};

export const WithMaxDisplayedTagsWithoutMultiTagOnly: Story = {
  args: {
    maxDisplayedTags: 3,
    value: generateItems(7),
    showMultiTagOnly: false
  },
};
