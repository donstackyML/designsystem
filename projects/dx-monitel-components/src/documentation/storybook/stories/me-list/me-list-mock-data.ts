import { MeIconStoreService } from '../../../../public-api';

const iconStore = new MeIconStoreService();

function createMeListDefaultMockData() {
  const items = [
    'Prepare 2013 Financial',
    'Prepare 3013 Marketing',
    'Update Personnel Files',
    'Review Health',
    'Prepare 2013 Marketing Plan',
    'Conduct Employee Training',
    'Develop New Product Line',
    'Analyze Market Trends',
    'Expand Overseas Operations',
    'Improve Customer Service',
  ];

  return items.map((item) => ({
    key: item,
    text: item,
  }));
}

function createMeListDefaultMockDataWithDividers() {
  const items = createMeListDefaultMockData();

  return items.map((item, index) => ({
    ...item,
    hasDivider: index % 3 === 0,
  }));
}

export const meListDefaultMockData = createMeListDefaultMockData();
export const meListDefaultMockDataWithDividers = createMeListDefaultMockDataWithDividers();

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
