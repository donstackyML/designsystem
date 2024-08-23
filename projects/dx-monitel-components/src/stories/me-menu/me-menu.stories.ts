import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxMenuComponent } from 'devextreme-angular';
import { MeIconStoreService } from 'src/app/service/icon-store.service';
import { MeMenuDirective } from '../../public-api';

const iconStore = new MeIconStoreService();

const data = [
  {
    text: 'Video Players',
    icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
  },
  {
    text: 'Televisions',
    icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
  },
  {
    text: 'Monitors',
    icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
    items: [
      {
        text: 'DesktopLCD 19',
      },
      {
        text: 'DesktopLCD 21',
      },
      {
        text: 'DesktopLED 21',
      },
    ],
  },
];

export default {
  title: 'Components/Menu',
  decorators: [
    moduleMetadata({
      declarations: [MeMenuDirective, DxMenuComponent],
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
  },
  render: (args) => ({
    props: args,
    template: `<dx-menu meMenu ${argsToTemplate(args)}></dx-menu>`,
  }),
} as Meta<MeMenuDirective | DxMenuComponent>;

type Story = StoryObj<MeMenuDirective | DxMenuComponent>;

export const Default: Story = {
  args: {
    dataSource: data,
    size: 'large',
    orientation: 'horizontal',
  },
};
