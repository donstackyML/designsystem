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

const argsIcon = iconStore.getIcon({ icon: 'folder', size: 'size' });

const data = [
  {
    icon: argsIcon,
    text: 'Electronics',
    items: [
      {
        icon: argsIcon,
        text: 'Computers',
        items: [
          {
            icon: argsIcon,
            text: 'Desktops',
          },
          {
            icon: argsIcon,
            text: 'Laptops',
          },
          {
            icon: argsIcon,
            text: 'Tablets',
          },
          {
            icon: argsIcon,
            text: 'Monitors',
          },
          {
            icon: argsIcon,
            text: 'Printers',
          },
          {
            icon: argsIcon,
            text: 'Scanners',
          },
          {
            icon: argsIcon,
            text: 'Servers',
          },
          {
            icon: argsIcon,
            text: 'Network Devices',
          },
          {
            icon: argsIcon,
            text: 'Warranties',
          },
          {
            icon: argsIcon,
            text: 'Projectors & Screens',
          },
          {
            icon: argsIcon,
            text: 'Computer Accessories',
          },
        ],
      },
      {
        icon: argsIcon,
        text: 'Cell Phones',
        items: [
          {
            icon: argsIcon,
            text: 'Home & Office Phones',
          },
          {
            icon: argsIcon,
            text: 'Smart Phones & PDAs',
          },
          {
            icon: argsIcon,
            text: 'Senior Cell Phones',
          },
          {
            icon: argsIcon,
            text: 'Mobile Broadband Devices',
          },
          {
            icon: argsIcon,
            text: 'Cell Phone Accessories',
          },
        ],
      },
      {
        icon: argsIcon,
        text: 'Camera & Photo',
        items: [
          {
            icon: argsIcon,
            text: 'Action Cameras',
          },
          {
            icon: argsIcon,
            text: 'Camcorders',
          },
          {
            icon: argsIcon,
            text: 'Digital Cameras',
          },
          {
            icon: argsIcon,
            text: 'Digital Picture Frames',
          },
          {
            icon: argsIcon,
            text: 'Film Cameras',
          },
          {
            icon: argsIcon,
            text: 'Professional Video Cameras',
          },
          {
            icon: argsIcon,
            text: 'Flashes',
          },
          {
            icon: argsIcon,
            text: 'Lenses',
          },
          {
            icon: argsIcon,
            text: 'Photo Printers',
          },
          {
            icon: argsIcon,
            text: 'Film & Slide Scanners',
          },
          {
            icon: argsIcon,
            text: 'Slide Projectors',
          },
          {
            icon: argsIcon,
            text: 'Slide Viewers',
          },
          {
            icon: argsIcon,
            text: 'Tripods & Monopods',
          },
          {
            icon: argsIcon,
            text: 'Underwater Video & Photography',
          },
          {
            icon: argsIcon,
            text: 'Camera Accessories',
          },
        ],
      },
      {
        icon: argsIcon,
        text: 'Audio',
        items: [
          {
            icon: argsIcon,
            text: 'Boomboxes',
          },
          {
            icon: argsIcon,
            text: 'DVD & CD Player Bags',
          },
          {
            icon: argsIcon,
            text: 'Hi-Fi & Home Audio Accessories',
          },
          {
            icon: argsIcon,
            text: 'Media Streaming Devices',
          },
          {
            icon: argsIcon,
            text: 'MP3 & Digital Media Players',
          },
          {
            icon: argsIcon,
            text: 'MP3 Player Accessories',
          },
          {
            icon: argsIcon,
            text: 'Personal Cassette Players',
          },
          {
            icon: argsIcon,
            text: 'Personal CD Players',
          },
          {
            icon: argsIcon,
            text: 'Compact Stereos',
          },
          {
            icon: argsIcon,
            text: 'Speakers',
          },
        ],
      },
      {
        icon: argsIcon,
        text: 'Home Appliances',
        items: [
          {
            icon: argsIcon,
            text: 'Air Conditioners',
          },
          {
            icon: argsIcon,
            text: 'Coffee Machines',
          },
          {
            icon: argsIcon,
            text: 'Fans',
          },
          {
            icon: argsIcon,
            text: 'Lamps',
          },
          {
            icon: argsIcon,
            text: 'Microwaves',
          },
          {
            icon: argsIcon,
            text: 'Refrigerators',
          },
          {
            icon: argsIcon,
            text: 'Washers & Dryers',
          },
          {
            icon: argsIcon,
            text: ' Water Heaters',
          },
          {
            icon: argsIcon,
            text: 'Vacuum',
          },
          {
            icon: argsIcon,
            text: 'Steaming & Ironing',
          },
        ],
      },
    ],
  },

  {
    icon: argsIcon,
    text: 'Entertainment',
    items: [
      {
        icon: argsIcon,
        text: 'Films & Music',
        items: [
          {
            icon: argsIcon,
            text: 'TV Shows',
          },
          {
            icon: argsIcon,
            text: 'DVD',
          },
          {
            icon: argsIcon,
            text: 'Blu-ray',
          },
          {
            icon: argsIcon,
            text: 'CD',
          },
          {
            icon: argsIcon,
            text: 'SACD',
          },
          {
            icon: argsIcon,
            text: 'Vinyl',
          },
          {
            icon: argsIcon,
            text: 'Cassette',
          },
          {
            icon: argsIcon,
            text: 'Musical Instruments',
          },
          {
            icon: argsIcon,
            text: 'DJ Equipment',
          },
        ],
      },
      {
        icon: argsIcon,
        text: 'Games & Toys',
        items: [
          {
            icon: argsIcon,
            text: 'PC Games',
          },
          {
            icon: argsIcon,
            text: 'Virtual Reality',
          },
          {
            icon: argsIcon,
            text: 'Boxed Games',
          },
          {
            icon: argsIcon,
            text: 'Download Games',
          },
          {
            icon: argsIcon,
            text: 'Handheld Game Systems',
          },
          {
            icon: argsIcon,
            text: 'Legacy Systems',
          },
          {
            icon: argsIcon,
            text: 'Cards',
          },
        ],
      },
    ],
  },

  {
    icon: argsIcon,
    text: 'Healthcare & Living',
    items: [
      {
        icon: argsIcon,
        text: 'Sports & Outdoors',
        items: [
          {
            icon: argsIcon,
            text: 'Camping',
          },
          {
            icon: argsIcon,
            text: 'Fitness',
          },
          {
            icon: argsIcon,
            text: 'Football',
          },
          {
            icon: argsIcon,
            text: 'Cycling',
          },
          {
            icon: argsIcon,
            text: 'Running',
          },
          {
            icon: argsIcon,
            text: 'Sport Electronics',
          },
          {
            icon: argsIcon,
            text: 'Sport Apparel',
          },
          {
            icon: argsIcon,
            text: 'Trainers & Tennis Shoes',
          },
        ],
      },
      {
        icon: argsIcon,
        text: 'Beauty',
        items: [
          {
            icon: argsIcon,
            text: 'Bath & Shower',
          },
          {
            icon: argsIcon,
            text: 'Skin Care',
          },
          {
            icon: argsIcon,
            text: 'Hair Care',
          },
          {
            icon: argsIcon,
            text: 'Nail Care',
          },
          {
            icon: argsIcon,
            text: 'Make-up',
          },
          {
            icon: argsIcon,
            text: 'Fragrance',
          },
          {
            icon: argsIcon,
            text: 'Salon & SPA Equipment',
          },
          {
            icon: argsIcon,
            text: 'Tools & Accessories',
          },
        ],
      },
      {
        icon: argsIcon,
        text: 'Fashion',
        items: [
          {
            icon: argsIcon,
            text: 'Clothing',
          },
          {
            icon: argsIcon,
            text: 'Jewellery',
          },
          {
            icon: argsIcon,
            text: 'Shoes',
          },
          {
            icon: argsIcon,
            text: 'Handbags & Shoulder Bags',
          },
          {
            icon: argsIcon,
            text: 'Watches',
          },
          {
            icon: argsIcon,
            text: 'Accessories',
          },
        ],
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
    focusStateEnabled: {
      control: 'select',
      options: [true, false],
      description: 'Определяет состояние `focused`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    hoverStateEnabled: {
      control: 'select',
      options: [true, false],
      description: 'Определяет состояние `hovered`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    selectByClick: {
      control: 'select',
      options: [true, false],
      description:
        'Указывает, будет ли выбран элемент, если пользователь нажмет на него.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
  },
  args: {
    size: 'large',
    orientation: 'horizontal',
    dataSource: data,
    focusStateEnabled: true,
    hoverStateEnabled: true,
    selectByClick: true,
    selectionMode: 'single',
  },
  render: (args) => ({
    props: args,
    template: `
		<dx-menu meMenu ${argsToTemplate(args)}
		showFirstSubmenuMode="onHover"
		showSubmenuMode="onHover"
		>
			<dxi-item items="data.items"></dxi-item>
		</dx-menu>`,
  }),
} as Meta<MeMenuDirective | DxMenuComponent>;

type Story = StoryObj<MeMenuDirective | DxMenuComponent>;

export const Default: Story = {};
