import { moduleMetadata, Meta, StoryObj, StoryFn } from '@storybook/angular';
import { DxFormModule, DxSelectBoxModule, DxTextBoxModule, DxCheckBoxModule, DxDateBoxModule } from 'devextreme-angular';
import { MeFormDirective } from '../../public-api';

interface FormStoryArgs {
  size: 'small' | 'medium' | 'large';
  labelMode: 'outside' | 'static' | 'floating' | 'hidden';
  labelLocation: 'left' | 'top';
  colCount: 'auto' | 1 | 2 | 3;
  readOnly: boolean;
  showColonAfterLabel: boolean;
}

export default {
  title: 'Components/Form(RC)',
  component: MeFormDirective,
  decorators: [
    moduleMetadata({
      imports: [DxFormModule, DxSelectBoxModule, DxTextBoxModule, DxCheckBoxModule, DxDateBoxModule],
      declarations: [MeFormDirective],
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
      [readOnly]="readOnly"
      [showColonAfterLabel]="showColonAfterLabel"
    >
      <dxi-item dataField="firstName" editorType="dxTextBox"></dxi-item>
      <dxi-item dataField="lastName" editorType="dxTextBox"></dxi-item>
      <dxi-item dataField="email" editorType="dxTextBox"></dxi-item>
      <dxi-item dataField="phone" editorType="dxTextBox"></dxi-item>
      <dxi-item dataField="gender" editorType="dxSelectBox" [editorOptions]="{items: genderOptions}"></dxi-item>
      <dxi-item dataField="birthDate" editorType="dxDateBox"></dxi-item>
      <dxi-item dataField="occupation" editorType="dxTextBox"></dxi-item>
      <dxi-item dataField="isSubscribed" editorType="dxCheckBox" [label]="{text: 'Subscribe to newsletter'}"></dxi-item>
      <dxi-item dataField="country" editorType="dxSelectBox" [editorOptions]="{items: countryOptions}"></dxi-item>
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

export const MediumSize: Story = {
  render: Template,
  args: {
    ...Default.args,
    size: 'medium',
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
        [readOnly]="readOnly"
        [showColonAfterLabel]="showColonAfterLabel"
      >
        <dxi-item itemType="group" caption="Personal Information">
          <dxi-item dataField="firstName" editorType="dxTextBox"></dxi-item>
          <dxi-item dataField="lastName" editorType="dxTextBox"></dxi-item>
          <dxi-item dataField="email" editorType="dxTextBox"></dxi-item>
          <dxi-item dataField="phone" editorType="dxTextBox"></dxi-item>
          <dxi-item dataField="gender" editorType="dxSelectBox" [editorOptions]="{items: genderOptions}"></dxi-item>
          <dxi-item dataField="birthDate" editorType="dxDateBox"></dxi-item>
        </dxi-item>
        <dxi-item itemType="group" caption="Additional Information">
          <dxi-item dataField="occupation" editorType="dxTextBox"></dxi-item>
          <dxi-item dataField="isSubscribed" editorType="dxCheckBox" [label]="{text: 'Subscribe to newsletter'}"></dxi-item>
          <dxi-item dataField="country" editorType="dxSelectBox" [editorOptions]="{items: countryOptions}"></dxi-item>
        </dxi-item>
      </dx-form>
    `,
  }),
];

export const VariousInputTypes: Story = {
  render: Template,
  args: {
    ...Default.args,
    colCount: 2,
  },
};
