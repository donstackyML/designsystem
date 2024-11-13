import { Component } from '@angular/core';
import {
  DxFileUploaderModule,
  DxSelectBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeFileUploaderDirective } from '../../public-api';

export default {
  title: 'Directives/FileUploader',
  component: MeFileUploaderDirective,
  decorators: [
    moduleMetadata({
      imports: [DxFileUploaderModule, DxSelectBoxModule, DxTextBoxModule],
      declarations: [MeFileUploaderDirective],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер компонента',
    },
    accept: {
      control: 'select',
      options: ['*', 'image/*', 'video/*', '.pdf,.doc,.docx'],
      description: 'Тип принимаемых файлов',
    },
    allowedFileExtensions: {
      control: 'object',
      description: 'Допустимые расширения файлов',
    },
  },
} as Meta<MeFileUploaderDirective>;

type Story = StoryObj<MeFileUploaderDirective>;

const defaultArgs = {
  size: 'medium' as const,
  accept: 'image/*',
  allowedFileExtensions: ['.jpg', '.jpeg', '.gif', '.png'],
};

// Form Upload
export const FormUpload: Story = {
  render: (args) => ({
    template: `
      <form class="dx-fieldset">
        <div class="dx-field">
          <div class="dx-field-label">First Name:</div>
          <dx-text-box class="dx-field-value" value="John"></dx-text-box>
        </div>
        <div class="dx-field">
          <div class="dx-field-label">Last Name:</div>
          <dx-text-box class="dx-field-value" value="Smith"></dx-text-box>
        </div>
        <div id="fileuploader-container">
          <dx-file-uploader
            meFileUploader
            selectButtonText="Select photo"
            labelText=""
            [accept]="accept"
            [allowedFileExtensions]="allowedFileExtensions"
            uploadMode="useForm"
          >
          </dx-file-uploader>
        </div>
      </form>
    `,
    props: args,
  }),
  args: defaultArgs,
};

// Async Upload - Instantly
export const AsyncUploadInstantly: Story = {
  render: (args) => ({
    template: `
      <dx-file-uploader
        meFileUploader
        [multiple]="false"
        [accept]="accept"
        [allowedFileExtensions]="allowedFileExtensions"
        uploadMode="instantly"
        uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
        [showFileList]="true"
      >
      </dx-file-uploader>
    `,
    props: args,
  }),
  args: defaultArgs,
};

// Async Upload with Buttons
export const AsyncUploadButtons: Story = {
  render: (args) => ({
    template: `
      <dx-file-uploader
        meFileUploader
        [multiple]="true"
        [accept]="accept"
        [allowedFileExtensions]="allowedFileExtensions"
        uploadMode="useButtons"
        uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
      >
      </dx-file-uploader>
    `,
    props: args,
  }),
  args: defaultArgs,
};

// Validation
export const ValidationExample: Story = {
  render: (args) => ({
    template: `
      <dx-file-uploader
        meFileUploader
        [multiple]="true"
        [accept]="accept"
        [allowedFileExtensions]="allowedFileExtensions"
        uploadMode="useButtons"
        uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
        [maxFileSize]="4000000"
      >
      </dx-file-uploader>
      <div class="allowed-extensions">
        Allowed file extensions: {{ allowedFileExtensions.join(', ') }}
      </div>
    `,
    props: args,
  }),
  args: defaultArgs,
};

// Chunk Uploading
export const ChunkUpload: Story = {
  render: (args) => ({
    template: `
      <dx-file-uploader
        meFileUploader
        [accept]="accept"
        [allowedFileExtensions]="allowedFileExtensions"
        uploadUrl="https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload"
        [chunkSize]="200000"
        uploadMode="instantly"
      >
      </dx-file-uploader>
    `,
    props: args,
  }),
  args: defaultArgs,
};

// File Types Selection
export const FileTypesSelection: Story = {
  render: (args) => ({
    template: `
      <div class="options">
        <div class="caption">File Type Options</div>
        <div class="option">
          <span>File types:</span>
          <dx-select-box
            [items]="fileTypes"
            [(value)]="selectedType"
            [inputAttr]="{ 'aria-label': 'File Type' }"
            valueExpr="value"
            displayExpr="name"
          >
          </dx-select-box>
        </div>
        <dx-file-uploader
          meFileUploader
          [accept]="selectedType"
          [allowedFileExtensions]="allowedExtensions[selectedType] || []"
          uploadMode="instantly"
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
        >
        </dx-file-uploader>
      </div>
    `,
    styles: [
      `
        .options {
          padding: 20px;
          background: var(--Controls-BG-Secondary-Elements-BG-Default);
          border-radius: 4px;
        }
        .caption {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 15px;
        }
        .option {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
      `,
    ],
    props: {
      ...args,
      selectedType: 'image/*',
      fileTypes: [
        { name: 'All types', value: '*' },
        { name: 'Images', value: 'image/*' },
        { name: 'Videos', value: 'video/*' },
        { name: 'Documents', value: '.pdf,.doc,.docx' },
      ],
      allowedExtensions: {
        '*': [],
        'image/*': ['.jpg', '.jpeg', '.gif', '.png'],
        'video/*': ['.mp4', '.avi', '.mov'],
        '.pdf,.doc,.docx': ['.pdf', '.doc', '.docx'],
      },
    },
  }),
  args: defaultArgs,
};

// Custom Drop Zone
export const CustomDropZone: Story = {
  render: (args) => ({
    template: `
      <div id="dropzone-external" class="flex-box custom-dropzone">
        <h3>Profile Picture</h3>
        <dx-file-uploader
          #fileUploader
          meFileUploader
          dialogTrigger="#dropzone-external"
          dropZone="#dropzone-external"
          [multiple]="false"
          [accept]="accept"
          [allowedFileExtensions]="allowedFileExtensions"
          uploadMode="instantly"
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          [showFileList]="false"
        >
        </dx-file-uploader>
      </div>
    `,
    styles: [
      `
      .custom-dropzone {
        text-align: center;
        padding: 20px;
        border: 1px dashed var(--Dividers-Borders-Long);
        border-radius: 4px;
        background-color: var(--Background-Content);
        min-height: 120px;
      }
      `,
    ],
    props: args,
  }),
  args: defaultArgs,
};

// Disabled State
export const DisabledState: Story = {
  render: (args) => ({
    template: `
      <dx-file-uploader
        meFileUploader
        [disabled]="true"
        [accept]="accept"
        [allowedFileExtensions]="allowedFileExtensions"
        uploadMode="instantly"
        uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
      >
      </dx-file-uploader>
    `,
    props: args,
  }),
  args: defaultArgs,
};
