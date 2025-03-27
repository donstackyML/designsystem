import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxMenuComponent } from 'devextreme-angular';
import { MeMenuDirective } from '../../../../public-api';
import { meMenuMockData } from './me-menu-mock-data';

export default {
  title: 'Components/Menu',
  decorators: [
    moduleMetadata({
      declarations: [DxMenuComponent, MeMenuDirective],
    }),
  ],
  argTypes: {
    dataSource: {
      control: 'object',
      description: 'Добавь данные для таблицы.',
      table: {
        type: { summary: 'Array<any> | string' },
        defaultValue: { summary: '[]' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Принимает размер меню и его элементов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Устанавливает горизонтальное или вертикальное положение.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    selectByClick: {
      control: 'boolean',
      description:
        'Указывает, будет ли выбран элемент, если пользователь нажмет на него.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple', 'all', 'none'],
      description: 'Определяет тип выделения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
    },
    subMenuMaxHeight: {
      control: 'text',
      description: 'Устанавливает максимальную высоту подменю.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    width: {
      control: 'text',
      description: 'Ширина компонента.',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      control: 'text',
      description: 'Высота компонента.',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showFirstSubmenuMode: {
      control: 'object',
      description: 'Устанавливает режим показа первого подменю.',
      table: {
        type: { summary: "object | `onClick` | `onHover`", },
        defaultValue: { summary: "{ name: 'onClick', delay: { show: 50, hide: 300 } }" },
      }
    },
    showSubmenuMode: {
      control: 'object',
      description: 'Устанавливает режим показа подменю.',
      table: {
        type: { summary: "object | `onClick` | `onHover`", },
        defaultValue: { summary: "{ name: 'onClick', delay: { show: 50, hide: 300 } }" },
      }
    },
    hideSubmenuOnMouseLeave: {
      control: 'boolean',
      description: 'Устанавливает, будет ли скрываться подменю при уходе мыши.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onItemClick: {
      action: 'onItemClick',
      description: 'Событие при клике по пункту меню.',
      table: {
        type: { summary: 'function' },
      },
    },
    onSelectionChanged: {
      action: 'onSelectionChanged',
      description: 'Событие при изменении выделения.',
      table: {
        type: { summary: 'function' },
      },
    },
    onSubmenuShowing: {
      action: 'onSubmenuShowing',
      description: 'Событие при показе подменю.',
      table: {
        type: { summary: 'function' },
      },
    },
    onSubmenuShown: {
      action: 'onSubmenuShown',
      description: 'Событие, когда подменю показано.',
      table: {
        type: { summary: 'function' },
      },
    },
    onSubmenuHiding: {
      action: 'onSubmenuHiding',
      description: 'Событие при скрытии подменю.',
      table: {
        type: { summary: 'function' },
      },
    },
    onSubmenuHidden: {
      action: 'onSubmenuHidden',
      description: 'Событие, когда подменю скрыто.',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: {
    dataSource: meMenuMockData,
    size: 'large',
    orientation: 'horizontal',
    hideSubmenuOnMouseLeave: true,
    showSubmenuMode: { name: 'onClick', delay: { show: 50, hide: 300 } },
    showFirstSubmenuMode: { name: 'onClick', delay: { show: 50, hide: 300 } },
    selectByClick: false,
    selectionMode: 'none',
    width: undefined,
    height: undefined,
    subMenuMaxHeight: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 400px;">
       <dx-menu
         meMenu
         ${argsToTemplate(args)}
       >
         <dxi-item items="data.items"></dxi-item>
       </dx-menu>
      </div>
      `,
  }),
} satisfies Meta<MeMenuDirective | DxMenuComponent>;

type Story = StoryObj<MeMenuDirective | DxMenuComponent>;

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small'
  }
};

export const SizeLarge: Story = {
  args: {
    size: 'large'
  }
};

export const ShowSubMenuModeOnClick: Story = {
  args: {
    showFirstSubmenuMode: 'onClick',
    showSubmenuMode: 'onClick'
  }
};

export const ShowSubMenuModeOnHover: Story = {
  args: {
    showFirstSubmenuMode: 'onHover',
    showSubmenuMode: 'onHover'
  }
};

export const OrientationHorizontal: Story = {
  args: {
    orientation: 'horizontal'
  }
};

export const OrientationVertical: Story = {
  args: {
    orientation: 'vertical'
  }
};

export const WithSubMenuMaxHeight: Story = {
  args: {
    subMenuMaxHeight: '200px',
  },
};
