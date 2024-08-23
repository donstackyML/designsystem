import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxFileUploaderModule } from 'devextreme-angular';
import { MeFileUploaderDirective } from '../../public-api';

export default {
  title: 'Components/FileUploader',
  decorators: [
    moduleMetadata({
      declarations: [MeFileUploaderDirective],
      imports: [DxFileUploaderModule],
    }),
  ],
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    customClass: {
      control: 'text',
    },
    customStyle: {
      control: 'object',
    },
    selectButtonText: {
      control: 'text',
    },
    uploadButtonText: {
      control: 'text',
    },
    uploadUrl: {
      control: 'text',
    },
    multiple: {
      control: 'boolean',
    },
  },
  args: {
    isDisabled: false,
    customClass: '',
    selectButtonText: 'Select File',
    uploadButtonText: 'Upload',
    uploadUrl: '/upload',
    multiple: false,
  },
  render: (args) => ({
    props: {
      ...args,
      onValueChanged: (e: any) => console.log('Value changed:', e.value),
      onUploadStarted: () => console.log('Upload started'),
      onUploaded: () => console.log('Uploaded'),
      onUploadError: () => console.log('Upload error'),
    },
    template: `<dx-file-uploader
      meFileUploader
      uploadMode="useButtons"
      ${argsToTemplate(args)}
       [abortUpload]="true"
  [allowCanceling]="true"

      (onValueChanged)="onValueChanged($event)"
      (onUploadStarted)="onUploadStarted()"
      (onUploaded)="onUploaded()"
      (onUploadError)="onUploadError()"
    ></dx-file-uploader>`,
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const CustomClass: Story = {
  args: {
    customClass: 'my-custom-class',
  },
};

export const MultipleFiles: Story = {
  args: {
    multiple: true,
  },
};
