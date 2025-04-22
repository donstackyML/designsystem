import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  DxCheckBoxModule,
  DxDateBoxModule,
  DxFormModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import {
  MeCheckBoxModule,
  MeDateBoxModule,
  MeFormDirective,
  MeFormItemModule,
  MeFormModule,
  MeNumberBoxModule,
  MeSelectBoxModule,
  MeTextBoxModule,
} from '../../../../public-api';
import { meFormFilledFormData, meFormInitialFormData } from './me-form-mock-data';

export default {
  title: 'Components/Form',
  component: MeFormDirective,
  decorators: [
    moduleMetadata({
      imports: [
        DxFormModule,
        DxSelectBoxModule,
        DxTextBoxModule,
        DxCheckBoxModule,
        DxNumberBoxModule,
        DxDateBoxModule,
        MeTextBoxModule,
        MeDateBoxModule,
        MeNumberBoxModule,
        MeFormModule,
        MeFormItemModule,
        MeSelectBoxModule,
        MeCheckBoxModule,
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Определяет размер полей формы.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    labelMode: {
      control: 'select',
      options: ['outside', 'static', 'floating', 'hidden'],
      description: 'Указывает, где будет размещаться лейбл.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'outside' },
      },
    },
    labelLocation: {
      control: 'radio',
      options: ['left', 'top'],
      description: 'Определяет расположение лейбла.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Определяет состояние только для чтения',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает компонент.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showColonAfterLabel: {
      control: 'boolean',
      description: 'Определяет, будет ли отображаться двоеточие после лейбла.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showRequiredMark: {
      control: 'boolean',
      description: 'Определяет, будет ли отображаться обязательный маркер.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    colCount: {
      control: 'number',
      description: 'Определяет количество колонок.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number | "auto"' },
        defaultValue: { summary: '1' },
      },
    },
    minColWidth: {
      control: 'number',
      description: 'Минимальная ширина колонки, используемая для расчета количества колонок в макете формы. Применяется только если свойство colCount имеет значение `"auto"`.',
      table: {
        category: 'Внешний вид и размеры',
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      }
    }
  },
  args: {
    size: 'medium',
    labelMode: 'outside',
    labelLocation: 'left',
    readOnly: false,
    disabled: false,
    showColonAfterLabel: true,
    showRequiredMark: true,
    colCount: 1,
    minColWidth: 200
  },
  render: (args) => ({
    props: {
      ...args,
      formData: meFormInitialFormData,
    },
    template: `
<div style="max-width: 800px; margin: 0 auto;">
  <dx-form
    meForm
    ${argsToTemplate(args)}
  >
    <dxi-item meFormItem dataField="firstName">
      <dxo-label text="First Name"></dxo-label>
      <div *dxTemplate>
        <dx-text-box
          meTextBox
          [(value)]="formData.firstName"
          [size]="size"
          [readOnly]="readOnly"
          [disabled]="disabled"
          showClearButton="true"
          >
        </dx-text-box>
      </div>
    </dxi-item>
    <dxi-item meFormItem dataField="email">
      <dxo-label text="Email"></dxo-label>
      <div *dxTemplate>
        <dx-text-box
          meTextBox
          [(value)]="formData.email"
          [size]="size"
          [readOnly]="readOnly"
          [disabled]="disabled"
          showClearButton="true"
          >
        </dx-text-box>
      </div>
    </dxi-item>
    <dxi-item meFormItem dataField="birthDate">
      <dxo-label text="Age"></dxo-label>
      <div *dxTemplate>
        <dx-number-box
          meNumberBox
          [showSpinButtons]="true"
          [(value)]="formData.age"
          [size]="size"
          [readOnly]="readOnly"
          [disabled]="disabled"
        ></dx-number-box>
      </div>
    </dxi-item>
  </dx-form>
</div>
    `
  }),
} satisfies Meta<DxFormModule | MeFormDirective>;

type Story = StoryObj<DxFormModule | MeFormDirective>;

export const Default: Story = {};

export const WithFormData: Story = {
  render: (args) => ({
    props: {
      ...args,
      formData: meFormFilledFormData,
    },
    template: `
<div style="max-width: 800px; margin: 0 auto;">
  <dx-form
    meForm
    ${argsToTemplate(args)}
  >
    <dxi-item meFormItem dataField="firstName">
      <dxo-label text="First Name"></dxo-label>
      <div *dxTemplate>
        <dx-text-box
          meTextBox
          [(value)]="formData.firstName">
        </dx-text-box>
      </div>
    </dxi-item>
    <dxi-item meFormItem dataField="email">
      <dxo-label text="Email"></dxo-label>
      <div *dxTemplate>
        <dx-text-box
          meTextBox
          [(value)]="formData.email">
        </dx-text-box>
      </div>
    </dxi-item>
  </dx-form>
</div>
`})
};

export const MultipleFields: Story = {
  render: (args) => ({
    props: {
      ...args,
      formData: meFormInitialFormData,
      genderOptions: ['male', 'female', 'other'],
      countryOptions: ['Russia', 'USA', 'Canada', 'UK', 'Australia', 'Germany'],
    },
    template: `
    <div style="max-width: 800px; margin: 0 auto;">
      <dx-form
        meForm
        ${argsToTemplate(args)}
      >
        <dxi-item meFormItem dataField="firstName">
          <dxi-validation-rule type="required" message="First Name is required"></dxi-validation-rule>
          <dxo-label text="First Name"></dxo-label>
          <div *dxTemplate>
            <dx-text-box meTextBox [(value)]="formData.firstName" [size]="size" [readOnly]="readOnly" [disabled]="disabled" showClearButton="true"></dx-text-box>
          </div>
        </dxi-item>
        <dxi-item meFormItem dataField="lastName">
          <dxi-validation-rule type="required" message="Last Name is required"></dxi-validation-rule>
          <dxo-label text="Last Name"></dxo-label>
          <div *dxTemplate>
            <dx-text-box meTextBox [(value)]="formData.lastName" [size]="size" [readOnly]="readOnly" [disabled]="disabled"  showClearButton="true"></dx-text-box>
          </div>
        </dxi-item>
        <dxi-item meFormItem dataField="email">
          <dxo-label text="Email"></dxo-label>
          <div *dxTemplate>
            <dx-text-box meTextBox [(value)]="formData.email" [size]="size" [readOnly]="readOnly" [disabled]="disabled"  showClearButton="true"></dx-text-box>
          </div>
        </dxi-item>
        <dxi-item meFormItem dataField="phone">
          <dxo-label text="Phone"></dxo-label>
          <div *dxTemplate>
            <dx-text-box meTextBox [(value)]="formData.phone" [size]="size" [readOnly]="readOnly" [disabled]="disabled"  showClearButton="true"></dx-text-box>
          </div>
        </dxi-item>
        <dxi-item meFormItem dataField="gender">
          <dxo-label text="Gender"></dxo-label>
          <div *dxTemplate>
            <dx-select-box meSelectBox [(value)]="formData.gender" [items]="genderOptions" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-select-box>
          </div>
        </dxi-item>
        <dxi-item meFormItem dataField="birthDate">
          <dxo-label text="Birth Date"></dxo-label>
          <div *dxTemplate>
            <dx-date-box meDateBox [(value)]="formData.birthDate" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-date-box>
          </div>
        </dxi-item>
        <dxi-item meFormItem dataField="occupation">
          <dxo-label text="Occupation"></dxo-label>
          <div *dxTemplate>
            <dx-text-box meTextBox [(value)]="formData.occupation" [placeholder]="'placeholder'" [size]="size" [readOnly]="readOnly" [disabled]="disabled"  showClearButton="true"></dx-text-box>
          </div>
        </dxi-item>
        <dxi-item dataField="isSubscribed">
          <div *dxTemplate>
            <dx-check-box meCheckBox [(value)]="formData.isSubscribed" text="Subscribe to newsletter" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-check-box>
          </div>
        </dxi-item>
        <dxi-item meFormItem dataField="country">
          <dxo-label text="Country"></dxo-label>
          <div *dxTemplate>
            <dx-select-box meSelectBox [(value)]="formData.country" [items]="countryOptions" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-select-box>
          </div>
        </dxi-item>
         <dxi-item meFormItem dataField="age">
      <dxo-label text="Age"></dxo-label>
      <div *dxTemplate>
       <dx-number-box
          meNumberBox
          [(value)]="formData.age"
          [size]="size"
          [readOnly]="readOnly"
          [disabled]="disabled"
          showClearButton="true"
        ></dx-number-box>

      </div>
    </dxi-item>
      </dx-form>
    </div>
  `
  })
};

export const MultipleFieldsWithGroups: Story = {
  args: {
    colCount: 2
  },
  render: (args) => ({
    props: {
      ...args,
      formData: meFormInitialFormData,
      genderOptions: ['male', 'female', 'other'],
      countryOptions: ['Russia', 'USA', 'Canada', 'UK', 'Australia', 'Germany'],
    },
    template: `
    <div style="max-width: 800px; margin: 0 auto;">
  <dx-form
    meForm
    ${argsToTemplate(args)}
  >
    <!-- Группа: First Name и Last Name -->
    <dxi-item itemType="group" [colCount]="2">
      <dxi-item meFormItem dataField="firstName">
        <dxo-label text="First Name"></dxo-label>
        <div *dxTemplate>
          <dx-text-box
            meTextBox
            [(value)]="formData.firstName"
            [size]="size"
            [readOnly]="readOnly"
            [disabled]="disabled"
            showClearButton="true"
          ></dx-text-box>
        </div>
      </dxi-item>
      <dxi-item meFormItem dataField="lastName">
        <dxo-label text="Last Name"></dxo-label>
        <div *dxTemplate>
          <dx-text-box
            meTextBox
            [(value)]="formData.lastName"
            [size]="size"
            [readOnly]="readOnly"
            [disabled]="disabled"
            showClearButton="true"
          ></dx-text-box>
        </div>
      </dxi-item>
    </dxi-item>

    <!-- Группа: Email и Phone -->
    <dxi-item itemType="group" [colCount]="2">
      <dxi-item meFormItem dataField="email">
        <dxo-label text="Email"></dxo-label>
        <div *dxTemplate>
          <dx-text-box
            meTextBox
            [(value)]="formData.email"
            [size]="size"
            [readOnly]="readOnly"
            [disabled]="disabled"
            showClearButton="true">
          </dx-text-box>
        </div>
      </dxi-item>
      <dxi-item meFormItem dataField="phone">
        <dxo-label text="Phone"></dxo-label>
        <div *dxTemplate>
          <dx-text-box
            meTextBox
            [(value)]="formData.phone"
            [size]="size"
            [readOnly]="readOnly"
            [disabled]="disabled"
            showClearButton="true">
          </dx-text-box>
        </div>
      </dxi-item>
    </dxi-item>

    <!-- Группа: Gender и Birth Date -->
    <dxi-item itemType="group" [colCount]="2">
      <dxi-item meFormItem dataField="gender">
        <dxo-label text="Gender"></dxo-label>
        <div *dxTemplate>
          <dx-select-box
            meSelectBox
            [(value)]="formData.gender"
            [items]="genderOptions"
            [size]="size"
            [readOnly]="readOnly"
            [disabled]="disabled">
          </dx-select-box>
        </div>
      </dxi-item>
      <dxi-item meFormItem dataField="birthDate">
        <dxo-label text="Birth Date"></dxo-label>
        <div *dxTemplate>
          <dx-date-box
            meDateBox
            [(value)]="formData.birthDate"
            [size]="size"
            [readOnly]="readOnly"
            [disabled]="disabled">
          </dx-date-box>
        </div>
      </dxi-item>
    </dxi-item>

    <!-- Группа: Occupation и Subscribe -->
    <dxi-item itemType="group" [colCount]="2">
      <dxi-item meFormItem dataField="occupation">
        <dxo-label text="Occupation"></dxo-label>
        <div *dxTemplate>
          <dx-text-box
            meTextBox
            [(value)]="formData.occupation"
            [placeholder]="'placeholder'"
            [size]="size"
            [readOnly]="readOnly"
            [disabled]="disabled"
            showClearButton="true">
          </dx-text-box>
        </div>
      </dxi-item>
      <dxi-item meFormItem dataField="isSubscribed">
        <div *dxTemplate>
          <dx-check-box
            meCheckBox
            [(value)]="formData.isSubscribed"
            text="Subscribe to newsletter"
            [size]="size"
            [readOnly]="readOnly"
            [disabled]="disabled">
          </dx-check-box>
        </div>
      </dxi-item>
    </dxi-item>

    <!-- Группа: Country и пустая ячейка -->
    <dxi-item itemType="group" [colCount]="2">
      <dxi-item meFormItem dataField="country">
        <dxo-label text="Country"></dxo-label>
        <div *dxTemplate>
          <dx-select-box
            meSelectBox
            [(value)]="formData.country"
            [items]="countryOptions"
            [size]="size"
            [readOnly]="readOnly"
            [disabled]="disabled">
          </dx-select-box>
        </div>
      </dxi-item>
      <!-- Пустой элемент для заполнения второй колонки -->
      <dxi-item></dxi-item>
    </dxi-item>
  </dx-form>
</div>
`
  })
};

export const DynamicForm: Story = {
  render: (args) => ({
    props: {
      ...args,
      formData: {
        hasDetails: false,
        details: ''
      },
    },
    template: `
<div style="max-width: 800px; margin: 0 auto;">
  <dx-form meForm [formData]="formData">
    <dxi-item dataField="hasDetails">
      <dxo-label text="Есть детали?"></dxo-label>
      <div *dxTemplate>
        <dx-check-box meCheckBox [(value)]="formData.hasDetails"></dx-check-box>
      </div>
    </dxi-item>
    <dxi-item *ngIf="formData.hasDetails" dataField="details">
      <dxo-label text="Детали"></dxo-label>
      <div *dxTemplate>
        <dx-text-box meTextBox [(value)]="formData.details"></dx-text-box>
      </div>
    </dxi-item>
  </dx-form>
</div>
    `
  })
};


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

export const LabelLocationLeft: Story = {
  args: {
    labelLocation: 'left',
  },
};

export const LabelLocationTop: Story = {
  args: {
    labelLocation: 'top',
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

export const LabelModeFloating: Story = {
  args: {
    labelMode: 'floating',
  },
};

export const LabelModeHidden: Story = {
  args: {
    labelMode: 'hidden',
  },
};

export const LabelWithoutColon: Story = {
  args: {
    showColonAfterLabel: false,
  },
};

export const TwoColumns: Story = {
  args: {
    colCount: 2,
  },
};

export const AutoColumns: Story = {
  args: {
    colCount: 'auto',
    minColWidth: 200
  },
};

export const StateReadOnly: Story = {
  args: {
    readOnly: true,
  },
  render: (args) => ({
    props: {
      ...args,
      formData: meFormFilledFormData,
      readOnly: true
    },
    template: `
<div style="max-width: 800px; margin: 0 auto;">
  <dx-form
    meForm
    ${argsToTemplate(args)}
  >
    <dxi-item meFormItem dataField="firstName">
      <dxo-label text="First Name"></dxo-label>
      <div *dxTemplate>
        <dx-text-box
          meTextBox
          [(value)]="formData.firstName"
          [disabled]="disabled"
          [readOnly]="readOnly"
          >
        </dx-text-box>
      </div>
    </dxi-item>
    <dxi-item meFormItem dataField="email">
      <dxo-label text="Email"></dxo-label>
      <div *dxTemplate>
        <dx-text-box
          meTextBox
          [(value)]="formData.email"
          [disabled]="disabled"
          [readOnly]="readOnly"
          >
        </dx-text-box>
      </div>
    </dxi-item>
    <dxi-item meFormItem dataField="birthDate">
      <dxo-label text="Age"></dxo-label>
      <div *dxTemplate>
        <dx-number-box
          meNumberBox
          [showSpinButtons]="true"
          [(value)]="formData.age"
          [size]="size"
          [readOnly]="readOnly"
          [disabled]="disabled"
        ></dx-number-box>
      </div>
    </dxi-item>
  </dx-form>
</div>
    `
  })
};

export const StateDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const StateDisabledAndReadOnly: Story = {
  args: {
    readOnly: true,
    disabled: true
  },
  render: StateReadOnly.render
};

export const WithGrouping: Story = {
  render: (args) => ({
    props: args,
    template: `<dx-form meForm [formData]="formData" ${argsToTemplate(args)}>
  <dxi-item itemType="group" caption="Personal Info">
    <dxi-item meFormItem dataField="firstName">
      <dxo-label text="First Name"></dxo-label>
      <div *dxTemplate>
        <dx-text-box meTextBox вшы></dx-text-box>
      </div>
    </dxi-item>
    <dxi-item meFormItem dataField="lastName">
      <dxo-label text="Last Name"></dxo-label>
      <div *dxTemplate>
        <dx-text-box meTextBox></dx-text-box>
      </div>
    </dxi-item>
  </dxi-item>
  <dxi-item itemType="group" caption="Contact Info">
    <dxi-item meFormItem dataField="phone">
      <dxo-label text="Phone"></dxo-label>
      <div *dxTemplate>
        <dx-text-box meTextBox></dx-text-box>
      </div>
    </dxi-item>
    <dxi-item meFormItem dataField="email">
      <dxo-label text="Email"></dxo-label>
      <div *dxTemplate>
        <dx-text-box meTextBox></dx-text-box>
      </div>
    </dxi-item>
  </dxi-item>
</dx-form>`
  })
};

export const WithValidation: Story = {
  render: (args) => ({
    props: args,
    template: `
<dx-form meForm [formData]="formData">
  <dxi-item dataField="email">
    <dxi-validation-rule
      type="required"
      message="Email is required">
    </dxi-validation-rule>
    <dxi-validation-rule
      type="email"
      message="Invalid email format">
    </dxi-validation-rule>
    <div *dxTemplate>
      <dx-text-box meTextBox></dx-text-box>
    </div>
  </dxi-item>
</dx-form>
`
  })
};
