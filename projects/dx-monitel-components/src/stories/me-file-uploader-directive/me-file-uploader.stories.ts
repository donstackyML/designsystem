import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  DxButtonModule,
  DxFileUploaderModule,
  DxProgressBarModule,
  DxSelectBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import { MeButtonModule, MeFileUploaderDirective } from '../../public-api';

export default {
  title: 'Directives/FileUploader',
  component: MeFileUploaderDirective,
  decorators: [
    moduleMetadata({
      imports: [
        DxFileUploaderModule,
        DxSelectBoxModule,
        DxTextBoxModule,
        DxButtonModule,
        DxProgressBarModule,
        MeButtonModule,
      ],
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
    title: {
      control: 'text',
      description: 'Заголовок для компонента',
    },
  },
} as Meta<MeFileUploaderDirective>;

type Story = StoryObj<MeFileUploaderDirective>;

const defaultArgs = {
  size: 'medium' as const,
  accept: 'image/*',
  allowedFileExtensions: ['.jpg', '.jpeg', '.gif', '.png'],
  title: 'Profile Settings',
};

// Form Upload
export const FormUpload: Story = {
  render: (args) => ({
    template: `
      <!-- Пример формы, в которой используется File Uploader -->
      <form class="dx-fieldset">
        <h2 class='form-title' *ngIf="title">{{ title }}</h2>
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
        <div class='form-btn-box'>
          <dx-button meButton type='default' size="small" text='Update profile'></dx-button>
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
      ></dx-file-uploader>
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
      ></dx-file-uploader>
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
      ></dx-file-uploader>
      <div class="allowed-extensions me-text-caption">
        Allowed file extensions: <span class="me-action-med4"> {{ allowedFileExtensions.join(', ') }} </span>
      </div>
    `,
    props: args,
    styles: [
      `
			.allowed-extensions {
				color: var(--Text-Secondary);
			}
			`,
    ],
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
      ></dx-file-uploader>
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
          ></dx-select-box>
        </div>
        <dx-file-uploader
          meFileUploader
          [accept]="selectedType"
          [allowedFileExtensions]="allowedExtensions[selectedType] || []"
          uploadMode="instantly"
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
        ></dx-file-uploader>
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

export const AdvancedCustomDropZone: Story = {
  render: (args) => {
    const componentState = {
      isDropZoneActive: false,
      imageSource: '',
      textVisible: true,
      progressVisible: false,
      progressValue: 0,
      allowedFileExtensions: (args as any).allowedFileExtensions,
    };

    const onDropZoneEnter = (e: any) => {
      if (e.dropZoneElement.id === 'dropzone-external') {
        const items = e.event.originalEvent.dataTransfer.items;
        const allowedFileExtensions = componentState.allowedFileExtensions;
        const draggedFileExtension = `.${items[0].type.replace(
          /^image\//,
          ''
        )}`;

        const isSingleFileDragged = items.length === 1;
        const isValidFileExtension =
          allowedFileExtensions.includes(draggedFileExtension);

        if (isSingleFileDragged && isValidFileExtension) {
          componentState.isDropZoneActive = true;
        }
      }
    };

    const onDropZoneLeave = (e: any) => {
      if (e.dropZoneElement.id === 'dropzone-external') {
        componentState.isDropZoneActive = false;
      }
    };

    const onUploaded = (e: any) => {
      const file = e.file;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        componentState.isDropZoneActive = false;
        componentState.imageSource = fileReader.result as string;
      };
      fileReader.readAsDataURL(file);
      componentState.textVisible = false;
      componentState.progressVisible = false;
      componentState.progressValue = 0;
    };

    const onProgress = (e: any) => {
      componentState.progressValue = (e.bytesLoaded / e.bytesTotal) * 100;
    };

    const onUploadStarted = () => {
      componentState.imageSource = '';
      componentState.progressVisible = true;
    };

    return {
      template: `
        <div class="widget-container flex-box">
          <span class="me-title-subheader1">Profile Picture</span>
          <div
            id="dropzone-external"
            class="flex-box"
            [ngClass]="componentState.isDropZoneActive ? 'dropzone-active' : null"
          >
            <img id="dropzone-image" [src]="componentState.imageSource" *ngIf="componentState.imageSource" alt="" />
            <div id="dropzone-text" class="flex-box" *ngIf="componentState.textVisible">
              <span class="me-text-caption">Drag&Drop the desired file or click to browse for a file instead</span>
            </div>
            <dx-progress-bar
              #uploadProgress
              meProgressBar
              [min]="0"
              [max]="100"
              width="100%"
              [showStatus]="true"
              [visible]="componentState.progressVisible"
              [value]="componentState.progressValue"
            ></dx-progress-bar>
          </div>
          <dx-file-uploader
            #fileUploader
            meFileUploader
            dialogTrigger="#dropzone-external"
            dropZone="#dropzone-external"
            [multiple]="false"
            [allowedFileExtensions]="componentState.allowedFileExtensions"
            uploadMode="instantly"
            uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
            [visible]="false"
            (onDropZoneEnter)="onDropZoneEnter($event)"
            (onDropZoneLeave)="onDropZoneLeave($event)"
            (onUploaded)="onUploaded($event)"
            (onProgress)="onProgress($event)"
            (onUploadStarted)="onUploadStarted()"
          ></dx-file-uploader>
        </div>
      `,
      props: {
        ...args,
        componentState,
        onDropZoneEnter,
        onDropZoneLeave,
        onUploaded,
        onProgress,
        onUploadStarted,
      },
      styles: [
        `
        .widget-container {
         font-family: "Roboto", sans-serif;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }
        .flex-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #dropzone-external {
          font-family: "Roboto", sans-serif;
          flex-direction: column;
          border: 1px dashed #ccc;
          padding: 20px;
          border-radius: 4px;
          width: 300px;
          height: 200px;
          position: relative;
          transition: border-color 0.3s;
        }
        #dropzone-external.dropzone-active {
          border-color: #3257DC;
          #dropzone-text {
            color: #2e2e2f
          }
        }
        #dropzone-text {
          flex-direction: column;
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color:#18181A66 !important;

        }
        #dropzone-image {
          max-width: 100%;
          max-height: 100%;
          margin-bottom: 10px;
        }
        `,
      ],
    };
  },
  args: {
    ...defaultArgs,
  },
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
      ></dx-file-uploader>
    `,
    props: args,
  }),
  args: defaultArgs,
};
