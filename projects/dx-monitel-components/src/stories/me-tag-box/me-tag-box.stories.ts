import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxTagBoxModule, DxValidatorModule } from 'devextreme-angular';
import { MeLabelDirective, MeTagBoxDirective } from '../../public-api';

const data = Array.from({ length: 25 }, (_, i) => `Пункт ${i + 1}`);

export default {
  title: 'Components/TagBox(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeTagBoxDirective, MeLabelDirective],
      imports: [DxTagBoxModule, DxValidatorModule],
    }),
  ],
  argTypes: {
    items: {
      control: 'text',
      description: 'Массив данных для отображения',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер компонента',
    },
    label: {
      control: 'text',
      description: 'Текст label',
    },
    labelMode: {
      control: 'select',
      options: ['static', 'floating', 'hidden', 'outside'],
      description: 'Режим отображения label',
    },
    activeStateEnabled: {
      control: 'boolean',
      defaultValue: true,
      description: 'Определяет состояние при нажатии на компонент',
    },
    applyValueMode: {
      control: 'select',
      options: ['instantly', 'useButtons'],
      description:
        'Режим применения данных. `instantly` - Применяет значения, когда они выбраны. `useButtons` - Применяет значения, когда пользователь нажимает кнопку "ОК".',
    },
    fieldTemplate: {
      control: 'text',
      description: 'Шаблон для отображения.',
    },
    disabled: {
      control: 'boolean',
    },
    hoverStateEnabled: {
      control: 'boolean',
    },
    focusStateEnabled: {
      control: 'boolean',
    },
    isValid: {
      control: 'boolean',
    },
    validationMessageMode: {
      control: 'select',
      options: ['auto', 'always'],
      description:
        'Режим отображения сообщения об ошибке. В рамках дизайн системы добавлены позиции: `text`, `icon`.',
    },
    validationMessagePosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description:
        'Режим отображения сообщения об ошибке. В рамках дизайн системы добавлены позиции: `top`, `bottom`, `left`, `right`.',
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    noDataText: {
      control: 'text',
    },
    hideSelectedItems: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    readOnly: {
      control: 'boolean',
    },
    searchEnabled: {
      control: 'boolean',
    },
    showClearButton: {
      control: 'boolean',
    },
    showSelectionControls: {
      control: 'boolean',
    },
  },
  args: {
    items: data,
    size: 'small',
    width: '400px',
    height: '',
    label: 'Label*',
    labelMode: 'outside',
    disabled: false,
    isValid: true,
    readOnly: false,
    applyValueMode: 'instantly',
    searchEnabled: true,
    placeholder: 'Выберите...',
    showClearButton: false,
    showSelectionControls: false,
    hideSelectedItems: false,
    activeStateEnabled: true,
    hoverStateEnabled: true,
    focusStateEnabled: true,
    validationMessageMode: 'auto',
    validationMessagePosition: 'top',
    description: 'description',
    noDataText: 'Не найдено',
  },
  render: (args) => ({
    props: args,
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
    <div class='me-text-body2' *ngIf="size=='large'">{{ description }}</div>
    <div class='me-text-caption' *ngIf="size=='small'">{{ description }}</div>
    <div class='me-text-caption' *ngIf="size=='medium'">{{ description }}</div>
		`,
    styles: [
      `
			.me-text-body2, .me-text-caption {
				color: var(--Text-Secondary);
				margin-top: 4px;
			}`,
    ],
  }),
} satisfies Meta<DxTagBoxModule | MeTagBoxDirective>;

type Story = StoryObj<DxTagBoxModule | MeTagBoxDirective>;

export const Default: Story = {};

export const WithGroups: Story = {
  args: {
    items: [
      {
        key: 'Group 1',
        items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
      },
      {
        key: 'Group 2',
        items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
      },
    ],
    grouped: true,
  },
};
export const WithGroupsAndIcons: Story = {
  args: {
    items: [
      {
        key: 'Group 1',
        items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
      },
      {
        key: 'Group 2',
        items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
      },
    ],
    grouped: true,
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
		<div *dxTemplate="let data of 'group'">
          <div class="custom-icon">
            <span class="dx-icon-globe icon"></span>
            {{ data.key }}
          </div>
        </div>
		</dx-tag-box>
    <div class='me-text-body2' *ngIf="size=='large'">{{ description }}</div>
    <div class='me-text-caption' *ngIf="size=='small'">{{ description }}</div>
    <div class='me-text-caption' *ngIf="size=='medium'">{{ description }}</div>
		`,
    styles: [
      `
			.me-text-body2, .me-text-caption {
				color: var(--Text-Secondary);
				margin-top: 4px;
			}`,
    ],
  }),
};

export const WithLabelRow: Story = {
  args: {
    labelMode: 'hidden',
  },
  render: (args) => ({
    props: args,
    template: `
		<label
    meLabel
    labelDirection="row"
    width="250px"
    >
		Label*
			<dx-tag-box
      meTagBox
			${argsToTemplate(args)}
				></dx-tag-box>
		</label>
		`,
  }),
};
