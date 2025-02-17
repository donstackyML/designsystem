import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxMenuComponent, DxMenuModule } from 'devextreme-angular';
import { MeMenuDirective } from '../../public-api';
import { meMenuMockData } from './me-menu-mock-data';

export default {
  title: 'Components/Menu',
  decorators: [
    moduleMetadata({
      imports: [DxMenuModule],
      declarations: [MeMenuDirective],
    }),
  ],
  argTypes: {
    dataSource: {
      description: 'Определяет пункты меню.',
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
    focusStateEnabled: {
      control: 'select',
      options: [true, false],
      description: 'Определяет состояние `focused`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hoverStateEnabled: {
      control: 'select',
      options: [true, false],
      description: 'Определяет состояние `hovered`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectByClick: {
      control: 'select',
      options: [true, false],
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
  },
  args: {
    dataSource: meMenuMockData,
    size: 'large',
    orientation: 'horizontal',
    focusStateEnabled: true,
    hoverStateEnabled: true,
    selectByClick: true,
    selectionMode: 'single',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 400px;">
       <dx-menu
         meMenu
         ${argsToTemplate(args)}
         showFirstSubmenuMode="onHover"
         showSubmenuMode="onHover"
       >
         <dxi-item items="data.items"></dxi-item>
       </dx-menu>
      </div>
      `,
  }),
} satisfies Meta<MeMenuDirective | DxMenuComponent>;

type Story = StoryObj<MeMenuDirective | DxMenuComponent>;

export const Default: Story = {};

export const WithSubMenuMaxHeight: Story = {
  args: {
    subMenuMaxHeight: '200px',
  },
};
