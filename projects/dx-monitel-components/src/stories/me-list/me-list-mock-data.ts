import { MeIconStoreService } from '../../public-api';

const iconStore = new MeIconStoreService();

export const meListDefaultMockData = [
  {
    key: 'Prepare 2013 Financial',
    text: 'Prepare 2013 Financial',
  },
  {
    key: 'Prepare 3013 Marketing',
    text: 'Prepare 3013 Marketing',
  },
  {
    key: 'Update Personnel Files',
    text: 'Update Personnel Files',
  },
  {
    key: 'Review Health',
    text: 'Review Health',
  },
  {
    key: 'Prepare 2013 Marketing Plan',
    text: 'Prepare 2013 Marketing Plan',
  },
  {
    key: 'Conduct Employee Training',
    text: 'Conduct Employee Training',
  },
  {
    key: 'Develop New Product Line',
    text: 'Develop New Product Line',
  },
  {
    key: 'Analyze Market Trends',
    text: 'Analyze Market Trends',
  },
  {
    key: 'Expand Overseas Operations',
    text: 'Expand Overseas Operations',
  },
  {
    key: 'Improve Customer Service',
    text: 'Improve Customer Service',
  },
];

export const meListMockDataWithHeaders = [
  {
    key: 'Prepare 2013 Financial',
    text: 'Prepare 2013 Financial',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
  {
    key: 'Prepare 3013 Marketing',
    text: 'Prepare 3013 Marketing',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
  {
    key: 'Update Personnel Files',
    text: 'Update Personnel Files',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
  {
    key: 'Review Health',
    text: 'Review Health',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
  {
    key: 'Prepare 2013 Marketing Plan',
    text: 'Prepare 2013 Marketing Plan',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
];

export const meListMockDataWithHeaderDescription = [
  {
    key: 'Fruits',
    description: 'fruits desc',
    items: [
      { name: 'Apples', count: 10 },
      { name: 'Oranges', count: 12 },
      { name: 'Lemons', count: 15 },
    ],
  },
  {
    key: 'Vegetables',
    description: 'vegetables desc',
    items: [
      { name: 'Potatoes', count: 5 },
      { name: 'Tomatoes', count: 9 },
      { name: 'Turnips', count: 8 },
    ],
  },
];

export const meListMockDataWithImageAndDescription = [
  {
    name: 'Apples',
    count: 10,
    image: '../../../assets/images/image.png',
    icon: 'favorites',
    description: 'Vegetables are good for you too.',
  },
  {
    name: 'Oranges',
    count: 12,
    image: '../../../assets/images/image.png',
    icon: 'favorites',
    description: 'Vegetables are good for you too.',
  },
  {
    name: 'Lemons',
    count: 15,
    image: '../../../assets/images/image.png',
    icon: 'favorites',
    description: 'Vegetables are good for you too.',
  },
];

export const meListMockDataWithIcons = [
  {
    name: 'Apples',
    count: 10,
    icon: iconStore.getIcon({ icon: 'check', size: '24' }),
  },
  {
    name: 'Oranges',
    count: 10,
    icon: iconStore.getIcon({ icon: 'check', size: '24' }),
  },
  {
    name: 'Lemons',
    count: 10,
    icon: iconStore.getIcon({ icon: 'check', size: '24' }),
  },
];
