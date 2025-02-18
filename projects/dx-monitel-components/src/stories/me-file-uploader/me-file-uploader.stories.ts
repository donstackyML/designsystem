import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MeFileUploaderComponent } from '../../public-api';

export default {
  title: 'Components/FileUploader',
  component: MeFileUploaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MeFileUploaderComponent],
    }),
  ],
  argTypes: {
    labelText: {
      control: 'text',
      description: 'Текст метки для загрузчика',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'Перетащите сюда файлы для загрузки или выберите на устройстве' },
      },
    },
    selectButtonText: {
      control: 'text',
      description: 'Текст кнопки выбора файла',
      table: {
        category: 'Контент и управление контентом',
        type: { summary: 'string' },
        defaultValue: { summary: 'Выбрать файлы' },
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
        step: 1024
      },
      description: 'Минимальный размер файла в байтах',
      table: {
        category: 'Валидация',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    fileAdded: {
      action: 'fileAdded',
      description: 'Вызывается при добавлении нового файла.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<File>' },
      },
    },
    fileRemoved: {
      action: 'fileRemoved',
      description: 'Вызывается при удалении файла.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<File>' },
      },
    },
    allFilesRemoved: {
      action: 'allFilesRemoved',
      description: 'Вызывается при удалении всех файлов.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<void>' },
      },
    },
    invalidFile: {
      action: 'invalidFile',
      description: 'Вызывается при добавлении недопустимого файла.',
      table: {
        category: 'События',
        type: { summary: 'EventEmitter<{ file: File; error: string }>' },
      },
    },
  },
  args: {
    labelText: 'Перетащите сюда файлы для загрузки или выберите на устройстве',
    selectButtonText: 'Выбрать файлы',
    allowedFileExtensions: [],
    multiple: false,
    showFileList: true,
    maxFileSize: 0,
    minFileSize: 0,
  },
  render: (args) => ({
    props: args,
    template: `<me-file-uploader ${argsToTemplate(args)}></me-file-uploader>`,
  })
} satisfies Meta<MeFileUploaderComponent>;

type Story = StoryObj<MeFileUploaderComponent>;

export const Default: Story = {};

export const WithFileSizeRestrictions: Story = {
  args: {
    maxFileSize: 5 * 1024 * 1024, // 5MB
    minFileSize: 1024, // 1KB
  }
};

export const WithFileExtensionRestriction: Story = {
  args: {
    allowedFileExtensions: ['jpg', 'png', 'pdf'],
    labelText: 'Выберите файлы только с расширениями JPG, PNG или PDF',
  }
};


export const WithoutFileList: Story = {
  args: {
    showFileList: false,
  },
};

export const SingleFileUpload: Story = {
  args: {
    multiple: false,
    labelText: 'Выберите один файл',
  },
}

export const CustomSelectButtonText: Story = {
  args: {
    selectButtonText: 'Обзор файлов',
  },
};

export const CustomizableUploader: Story = {
  args: {
    labelText:"Перетащите ваши файлы сюда или нажмите кнопку ниже",
    selectButtonText:"Выбрать файлы",
    allowedFileExtensions : ['jpg', 'png', 'pdf'],
    maxFileSize : 5 * 1024 * 1024,
    multiple : true,
  },
};
