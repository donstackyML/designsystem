import { moduleMetadata, Meta, StoryObj, StoryFn } from '@storybook/angular';
import {
  DxFormModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxCheckBoxModule,
  DxDateBoxModule,
} from 'devextreme-angular';
import {
  MeFormDirective,
  MeTextBoxDirective,
  MeSelectBoxDirective,
  MeCheckBoxDirective,
} from '../../public-api';

interface FormStoryArgs {
  size: 'small' | 'medium' | 'large';
  labelMode: 'outside' | 'static' | 'floating' | 'hidden';
  labelLocation: 'left' | 'top';
  colCount: 'auto' | 1 | 2 | 3;
  readOnly: boolean;
  disabled: boolean;
  showColonAfterLabel: boolean;
}

export default {
  title: 'Components/Form(RC)',
  component: MeFormDirective,
  decorators: [
    moduleMetadata({
      imports: [
        DxFormModule,
        DxSelectBoxModule,
        DxTextBoxModule,
        DxCheckBoxModule,
        DxDateBoxModule,
      ],
      declarations: [
        MeFormDirective,
        MeTextBoxDirective,
        MeSelectBoxDirective,
        MeCheckBoxDirective,
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    labelMode: {
      control: 'select',
      options: ['outside', 'floating', 'hidden'],
    },
    labelLocation: {
      control: 'radio',
      options: ['left', 'top'],
    },
    colCount: {
      control: 'select',
      options: ['auto', 1, 2, 3],
    },
    readOnly: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    showColonAfterLabel: {
      control: 'boolean',
    },
  },
} as Meta<FormStoryArgs>;

type Story = StoryObj<FormStoryArgs>;

const Template: StoryFn<FormStoryArgs> = (args) => ({
  props: {
    ...args,
    formData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      gender: 'male',
      birthDate: new Date(1990, 0, 1),
      occupation: '',
      isSubscribed: false,
      country: 'USA',
    },
    genderOptions: ['male', 'female', 'other'],
    countryOptions: ['USA', 'Canada', 'UK', 'Australia', 'Germany'],
  },
  template: `
    <dx-form
      meForm
      [size]="size"
      [formData]="formData"
      [labelMode]="labelMode"
      [labelLocation]="labelLocation"
      [colCount]="colCount"
      [showColonAfterLabel]="showColonAfterLabel"
    >
      <dxi-item dataField="firstName">
        <dxi-validation-rule type="required" message="First Name is required"></dxi-validation-rule>
        <dxo-label text="First Name"></dxo-label>
        <div *dxTemplate>
          <dx-text-box meTextBox [(value)]="formData.firstName" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
        </div>
      </dxi-item>
      <dxi-item dataField="lastName">
        <dxi-validation-rule type="required" message="Last Name is required"></dxi-validation-rule>
        <dxo-label text="Last Name"></dxo-label>
        <div *dxTemplate>
          <dx-text-box meTextBox [(value)]="formData.lastName" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
        </div>
      </dxi-item>
      <dxi-item dataField="email">
        <dxi-validation-rule type="required" message="Email is required"></dxi-validation-rule>
        <dxi-validation-rule type="email" message="Email is invalid"></dxi-validation-rule>
        <dxo-label text="Email"></dxo-label>
        <div *dxTemplate>
          <dx-text-box meTextBox [(value)]="formData.email" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
        </div>
      </dxi-item>
      <dxi-item dataField="phone">
        <dxo-label text="Phone"></dxo-label>
        <div *dxTemplate>
          <dx-text-box meTextBox [(value)]="formData.phone" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
        </div>
      </dxi-item>
      <dxi-item dataField="gender">
        <dxo-label text="Gender"></dxo-label>
        <div *dxTemplate>
          <dx-select-box meSelectBox [(value)]="formData.gender" [items]="genderOptions" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-select-box>
        </div>
      </dxi-item>
      <dxi-item dataField="birthDate">
        <dxo-label text="Birth Date"></dxo-label>
        <div *dxTemplate>
          <dx-date-box meDateBox [(value)]="formData.birthDate" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-date-box>
        </div>
      </dxi-item>
      <dxi-item dataField="occupation">
        <dxo-label text="Occupation"></dxo-label>
        <div *dxTemplate>
          <dx-text-box meTextBox [(value)]="formData.occupation" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
        </div>
      </dxi-item>
      <dxi-item dataField="isSubscribed">
        <div *dxTemplate>
          <dx-check-box meCheckBox [(value)]="formData.isSubscribed" text="Subscribe to newsletter" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-check-box>
        </div>
      </dxi-item>
      <dxi-item dataField="country">
        <dxo-label text="Country"></dxo-label>
        <div *dxTemplate>
          <dx-select-box meSelectBox [(value)]="formData.country" [items]="countryOptions" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-select-box>
        </div>
      </dxi-item>
    </dx-form>
  `,
});

export const Default: Story = {
  render: Template,
  args: {
    size: 'medium',
    labelMode: 'floating',
    labelLocation: 'top',
    colCount: 2,
    readOnly: false,
    disabled: false,
    showColonAfterLabel: true,
  },
};

export const SmallSize: Story = {
  render: Template,
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const LargeSize: Story = {
  render: Template,
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const FloatingLabels: Story = {
  render: Template,
  args: {
    ...Default.args,
    labelMode: 'floating',
  },
};

export const LeftLabels: Story = {
  render: Template,
  args: {
    ...Default.args,
    labelMode: 'outside',
    labelLocation: 'left',
  },
};

export const SingleColumn: Story = {
  render: Template,
  args: {
    ...Default.args,
    colCount: 1,
  },
};

export const ReadOnly: Story = {
  render: Template,
  args: {
    ...Default.args,
    readOnly: true,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithoutColon: Story = {
  render: Template,
  args: {
    ...Default.args,
    showColonAfterLabel: false,
  },
};

export const WithGrouping: Story = {
  render: Template,
  args: Default.args,
};

WithGrouping.decorators = [
  (Story) => ({
    template: `
      <dx-form
        meForm
        [size]="size"
        [formData]="formData"
        [labelMode]="labelMode"
        [labelLocation]="labelLocation"
        [colCount]="colCount"
        [showColonAfterLabel]="showColonAfterLabel"
      >
        <dxi-item itemType="group" caption="Personal Information">
          <dxi-item dataField="firstName">
            <div *dxTemplate>
              <dx-text-box meTextBox [(value)]="formData.firstName" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
            </div>
          </dxi-item>
          <dxi-item dataField="lastName">
            <div *dxTemplate>
              <dx-text-box meTextBox [(value)]="formData.lastName" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
            </div>
          </dxi-item>
          <dxi-item dataField="email">
            <div *dxTemplate>
              <dx-text-box meTextBox [(value)]="formData.email" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
            </div>
          </dxi-item>
          <dxi-item dataField="phone">
            <div *dxTemplate>
              <dx-text-box meTextBox [(value)]="formData.phone" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
            </div>
          </dxi-item>
          <dxi-item dataField="gender">
            <div *dxTemplate>
              <dx-select-box meSelectBox [(value)]="formData.gender" [items]="genderOptions" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-select-box>
            </div>
          </dxi-item>
          <dxi-item dataField="birthDate">
            <div *dxTemplate>
              <dx-date-box meDateBox [(value)]="formData.birthDate" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-date-box>
            </div>
          </dxi-item>
        </dxi-item>
        <dxi-item itemType="group" caption="Additional Information">
          <dxi-item dataField="occupation">
            <div *dxTemplate>
              <dx-text-box meTextBox [(value)]="formData.occupation" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-text-box>
            </div>
          </dxi-item>
          <dxi-item dataField="isSubscribed">
            <div *dxTemplate>
              <dx-check-box meCheckBox [(value)]="formData.isSubscribed" text="Subscribe to newsletter" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-check-box>
            </div>
          </dxi-item>
          <dxi-item dataField="country">
            <div *dxTemplate>
              <dx-select-box meSelectBox [(value)]="formData.country" [items]="countryOptions" [size]="size" [readOnly]="readOnly" [disabled]="disabled"></dx-select-box>
            </div>
          </dxi-item>
        </dxi-item>
      </dx-form>
    `,
  }),
];
