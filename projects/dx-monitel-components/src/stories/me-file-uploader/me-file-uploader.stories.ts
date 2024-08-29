import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeFileUploaderComponent } from "../../public-api";

export default {
  title: 'Components/FileUploader',
  component: MeFileUploaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MeFileUploaderComponent],
    }),
  ],
  argTypes: {
    allowedFileExtensions: {
      control: 'object',
      description: 'Допустимые расширения файлов',
    },
    maxFileSize: {
      control: { type: 'number', min: 0, max: 100 * 1024 * 1024, step: 1024 * 1024 },
      description: 'Максимальный размер файла в байтах',
    },
    minFileSize: {
      control: { type: 'number', min: 0, max: 10 * 1024 * 1024, step: 1024 },
      description: 'Минимальный размер файла в байтах',
    },
    multiple: {
      control: 'boolean',
      description: 'Разрешить выбор нескольких файлов',
    },
    labelText: {
      control: 'text',
      description: 'Текст метки для загрузчика',
    },
    selectButtonText: {
      control: 'text',
      description: 'Текст кнопки выбора файла',
    },
    showFileList: {
      control: 'boolean',
      description: 'Показывать список выбранных файлов',
    },
    fileAdded: { action: 'fileAdded' },
    fileRemoved: { action: 'fileRemoved' },
    allFilesRemoved: { action: 'allFilesRemoved' },
    invalidFile: { action: 'invalidFile' },
  },
  args: {
    allowedFileExtensions: ['jpg', 'png', 'pdf'],
    maxFileSize: 5 * 1024 * 1024, // 5MB
    minFileSize: 1024, // 1KB
    multiple: true,
    labelText: 'Перетащите файлы сюда или нажмите для выбора',
    selectButtonText: 'Выбрать файлы',
    showFileList: true,
  },
} as Meta<MeFileUploaderComponent>;

type Story = StoryObj<MeFileUploaderComponent>;

const Template: Story = {
  render: (args) => ({
    props: {
      ...args,
      onFileAdded: (e: any) => console.log('Файл добавлен', e),
      onFileRemoved: (e: any) => console.log('Файл удален', e),
      onAllFilesRemoved: (e: any) => console.log('Все файлы удалены', e),
      onInvalidFile: (e: any) => console.log('Недопустимый файл', e),
    },
    template: `
      <me-file-uploader
        [allowedFileExtensions]="allowedFileExtensions"
        [maxFileSize]="maxFileSize"
        [minFileSize]="minFileSize"
        [multiple]="multiple"
        [labelText]="labelText"
        [selectButtonText]="selectButtonText"
        [showFileList]="showFileList"
        (fileAdded)="onFileAdded($event)"
        (fileRemoved)="onFileRemoved($event)"
        (allFilesRemoved)="onAllFilesRemoved()"
        (invalidFile)="onInvalidFile($event)"
      >
      </me-file-uploader>
    `,
  }),
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const SingleFileUpload: Story = {
  ...Template,
  args: {
    multiple: false,
    labelText: 'Выберите один файл',
  },
};

export const CustomFileTypes: Story = {
  ...Template,
  args: {
    allowedFileExtensions: ['doc', 'docx', 'txt'],
    labelText: 'Загрузите только документы',
  },
};

export const LargeFileUpload: Story = {
  ...Template,
  args: {
    maxFileSize: 100 * 1024 * 1024, // 100MB
    minFileSize: 1 * 1024 * 1024, // 1MB
    labelText: 'Загрузите большие файлы (1MB - 100MB)',
  },
};

export const HideFileList: Story = {
  ...Template,
  args: {
    showFileList: false,
  },
};

export const CustomButtonText: Story = {
  ...Template,
  args: {
    selectButtonText: 'Обзор файлов',
  },
};

export const CustomLabelText: Story = {
  ...Template,
  args: {
    labelText: 'Перетащите файлы сюда или нажмите на кнопку ниже',
  },
};
