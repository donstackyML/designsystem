import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxLoadPanelModule,
} from 'devextreme-angular';
import { MeLoadPanelDirective } from '../../public-api';

export default {
  title: 'Components/LoadPanel',
  decorators: [
    moduleMetadata({
      declarations: [MeLoadPanelDirective],
      imports: [DxButtonModule, DxLoadPanelModule, DxCheckBoxModule],
    }),
  ],
  argTypes: {
    message: {
      description: 'Текст загрузки',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Loading...' },
      },
    },
    indicatorSrc: {
      description: 'URL изображения индикатора.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    visible: {
      description: 'Определяет, должна ли панель быть видимой.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    size: {
      description: 'Размер индикатора.',
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      description: 'Цвет индикатора загрузки.',
      control: 'select',
      options: ['normal', 'default', 'accent'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    stylingMode: {
      description: 'Стиль индикатора загрузки.',
      options: ['line', 'circle'],
      control: 'select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
    },
    shading: {
      description: 'Затемнение экрана',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    shadingColor: {
      description: 'Цвет затемнения экрана',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rgba(0, 0, 0, 0.2)' },
      },
    },
    showPane: {
      description: 'Показывать панель загрузки',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    hideOnOutsideClick: {
      description: 'Скрыть по клику вне панели',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideOnParentScroll: {
      description: 'Скрыть при прокрутке родительского элемента',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    height: {
      description: 'Высота индикатора загрузки.',
      control: 'text',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    width: {
      description: 'Ширина индикатора загрузки.',
      control: 'text',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    animation: {
      control: 'object',
      description: 'Настраивает анимацию показа и панели загрузки. Задает параметры для анимаций "show" и "hide".',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{ show: {…}, hide: {…} }' },
      },
    },
  },
  args: {
    message: 'Loading...',
    visible: false,
    size: 'medium',
    color: 'default',
    stylingMode: 'line',
    shading: true,
    shadingColor: 'transparent',
    showPane: true,
    hideOnOutsideClick: false,
    height: undefined,
    width: undefined,
    animation: { show: {}, hide: {} },
    hideOnParentScroll: false,
  },
  render: (args) => ({
    props: args,
    template: `
   <dx-button text="Open Load Panel" (onClick)="visible = true"> </dx-button>
    <dx-load-panel
      #loadPanel
      meLoadPanel
     ${argsToTemplate(args)}
    ></dx-load-panel>`,
  })
} satisfies Meta<DxLoadPanelModule | MeLoadPanelDirective>;

type Story = StoryObj<DxLoadPanelModule | MeLoadPanelDirective>

export const Default: Story = { };

export const WithCustomImage: Story = {
  args: {
    indicatorSrc:
      'https://static.tildacdn.com/tild6261-3766-4534-a636-643635653261/6068d1f9087cdc5982a3.gif',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small'
  }
};

export const SizeMedium: Story = {
  args: {
    size: 'medium'
  }
};

export const SizeLarge: Story = {
  args: {
    size: 'large'
  }
};

export const StylingModeCircle: Story = {
  args: {
    stylingMode: 'circle'
  }
};

export const StylingModeLine: Story = {
  args: {
    stylingMode: 'line'
  }
};


export const ColorDefault: Story = {
  args: {
    color: 'default'
  }
};

export const ColorNormal: Story = {
  args: {
    color: 'normal'
  }
};

export const ColorAccent: Story = {
  args: {
    color: 'accent'
  }
};
