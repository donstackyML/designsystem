import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import {
  DxButtonModule,
  DxFileUploaderComponent,
  DxFileUploaderModule,
  DxProgressBarModule,
  DxSelectBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import {
  MeButtonModule,
  MeFileUploaderDirective,
  MeProgressBarDirective,
  MeTextBoxDirective,
} from '../../../../../public-api';

export default {
  title: 'Components/FileUploader/Directive',
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
      declarations: [
        MeFileUploaderDirective,
        MeTextBoxDirective,
        MeProgressBarDirective,
      ],
    }),
  ],
  argTypes: {
    labelText: {
      control: 'text',
      description: 'Текст метки для загрузчика',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'or Drop file here' },
      },
    },
    selectButtonText: {
      control: 'text',
      description: 'Текст кнопки выбора файла',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'Select File' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер загрузчика файлов',
      table: {
        category: 'Внешний вид',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    showFileList: {
      control: 'boolean',
      description: 'Показывать список выбранных файлов',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Разрешить выбор нескольких файлов',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    accept: {
      control: 'select',
      options: ['*', 'image/*', 'video/*', '.pdf,.doc,.docx'],
      description: 'Допустимые типы файлов для загрузки',
      table: {
        category: 'Валидация',
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    allowedFileExtensions: {
      control: 'object',
      description: 'Допустимые расширения файлов',
      table: {
        category: 'Валидация',
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    maxFileSize: {
      control: {
        type: 'number',
        min: 0,
        max: 100 * 1024 * 1024,
        step: 1024 * 1024,
      },
      description: 'Максимальный размер файла в байтах',
      table: {
        category: 'Валидация',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    minFileSize: {
      control: {
        type: 'number',
        min: 0,
        max: 10 * 1024 * 1024,
        step: 1024,
      },
      description: 'Минимальный размер файла в байтах',
      table: {
        category: 'Валидация',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    uploadMode: {
      control: 'select',
      options: ['instantly', 'useButtons', 'useForm'],
      description: 'Режим загрузки файлов',
      table: {
        category: 'Поведение',
        type: { summary: 'instantly | useButtons | useForm' },
        defaultValue: { summary: 'instantly' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключить загрузчик файлов',
      table: {
        category: 'Поведение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Режим только для чтения (без возможности загрузки файлов)',
      table: {
        category: 'Поведение',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    size: 'medium',
    accept: 'image/*',
    allowedFileExtensions: ['.jpg', '.jpeg', '.gif', '.png'],
    labelText: 'Перетащите сюда файлы для загрузки или выберите на устройстве',
    selectButtonText: 'Выбрать файлы',
    multiple: false,
    showFileList: true,
    maxFileSize: 0,
    minFileSize: 0,
    uploadMode: 'instantly',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-file-uploader
        meFileUploader
        ${argsToTemplate(args)}
      ></dx-file-uploader>
    `,
  }),
} satisfies Meta<DxFileUploaderComponent | MeFileUploaderDirective>;

type Story = StoryObj<DxFileUploaderComponent | MeFileUploaderDirective>;

export const Default: Story = {};

export const WithForm: Story = {
  args: {
    uploadMode: 'useForm',
    labelText: '',
    selectButtonText: 'Select photo',
  },
  render: (args) => ({
    props: args,
    template: `
      <form class="dx-fieldset">
        <h2 class='form-title' *ngIf="title">{{ title }}</h2>
        <div class="dx-field">
          <div class="dx-field-label">First Name:</div>
          <dx-text-box meTextBox size="small" class="dx-field-value" value="John"></dx-text-box>
        </div>
        <div class="dx-field">
          <div class="dx-field-label">Last Name:</div>
          <dx-text-box meTextBox size="small" class="dx-field-value" value="Smith"></dx-text-box>
        </div>
        <div id="fileuploader-container">
          <dx-file-uploader
            meFileUploader
            ${argsToTemplate(args)}
          >
          </dx-file-uploader>
        </div>
        <div class='form-btn-box'>
          <dx-button meButton buttonType='default' size="small" text='Update profile'></dx-button>
        </div>
      </form>
    `,
    styles: [
      `
      .dx-fieldset {
        margin: 0;
        padding: 16px;
        background: var(--Background-Content);
      }
      `,
    ],
  }),
};

export const AsyncUploadInstantly: Story = {
  render: (args) => ({
    props: args,
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
  }),
};

export const AsyncUploadButtons: Story = {
  args: {
    uploadMode: 'useButtons',
    uploadUrl: 'https://js.devexpress.com/Demos/NetCore/FileUploader/Upload',
    multiple: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-file-uploader
        meFileUploader
        ${argsToTemplate(args)}
      ></dx-file-uploader>
    `,
  }),
};

export const ValidationExample: Story = {
  args: {
    uploadMode: 'useButtons',
    uploadUrl: 'https://js.devexpress.com/Demos/NetCore/FileUploader/Upload',
    maxFileSize: 4000,
    multiple: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-file-uploader
        meFileUploader
        ${argsToTemplate(args)}
      ></dx-file-uploader>
      <div class="allowed-extensions me-text-caption">
        Allowed file extensions: <span class="me-action-med4"> {{ allowedFileExtensions.join(', ') }} </span>
      </div>
    `,
    styles: [
      `
			.allowed-extensions {
				color: var(--Text-Secondary);
			}
			`,
    ],
  }),
};

export const ChunkUpload: Story = {
  args: {
    uploadMode: 'instantly',
    uploadUrl:
      'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload',
    multiple: true,
    chunkSize: 200000,
  },
  render: (args) => ({
    template: `
      <dx-file-uploader
        meFileUploader
        ${argsToTemplate(args)}
      ></dx-file-uploader>
    `,
    props: args,
  }),
};

export const FileTypesSelection: Story = {
  args: {
    uploadMode: 'instantly',
    uploadUrl: 'https://js.devexpress.com/Demos/NetCore/FileUploader/Upload',
    multiple: true,
  },
  render: (args) => ({
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
    template: `
      <div class="options dx-widget">
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
          ${argsToTemplate(args)}
          [accept]="selectedType"
          [allowedFileExtensions]="allowedExtensions[selectedType] || []"
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
  }),
};

export const StateDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const StateReadonly: Story = {
  args: {
    readOnly: true,
  },
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
      componentState.isDropZoneActive = false;
    };

    return {
      props: {
        ...args,
        componentState,
        onDropZoneEnter,
        onDropZoneLeave,
        onUploaded,
        onProgress,
        onUploadStarted,
      },
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
              meProgressBar
              #uploadProgress
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
      styles: [
        `
        .widget-container {
         font-family: "Roboto", sans-serif;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        .flex-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .me-progress-bar {
          color: var(--Text-Secondary);
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
        }
        `,
      ],
    };
  },
};
