export const meBreadcrumbsMockData = [
  { text: 'Home', url: '/', },
  { text: 'Products', url: '/products', },
  { text: 'Electronics', url: '/products/electronics', },
  { text: 'Computers', url: '/products/electronics/computers', },
  { text: 'Laptops', url: '/products/electronics/computers/laptops', },
];

export const meBreadcrumbsMockDataWithIcons = [
  {
    text: 'Home',
    url: '/',
    icon: 'home'
  },
  {
    text: 'Products',
    url: '/products',
    icon: 'cart'
  },
  {
    text: 'Electronics',
    url: '/products/electronics',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAJElEQVQoz2P8z4AfsDAwJELVzGfExmIiYAAD5QoYRx1JL0cCAJeiFh8Qq9chAAAAAElFTkSuQmCC'
  },
  {
    text: 'Computers',
    url: '/products/electronics/computers',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M1 17v-1.5h18V17zm2.5-2.5q-.62 0-1.06-.44A1.45 1.45 0 0 1 2 13V4.5q0-.618.44-1.06Q2.883 3 3.5 3h13q.62 0 1.06.44.44.442.44 1.06V13q0 .619-.44 1.06-.44.44-1.06.44zm0-1.5h13V4.5h-13z"></path></svg>',
  },
  {
    text: 'Keyboards',
    url: '/products/electronics/computers/keyboards',
    icon: 'keyboard_x20',
  },
];

export const meBreadcrumbsMockDataWithIconsOnly = [
  {
    url: '/',
    icon: 'home'
  },
  {

    url: '/products',
    icon: 'cart'
  },
  {
    url: '/products/electronics',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAJElEQVQoz2P8z4AfsDAwJELVzGfExmIiYAAD5QoYRx1JL0cCAJeiFh8Qq9chAAAAAElFTkSuQmCC'
  },
  {

    url: '/products/electronics/computers',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M1 17v-1.5h18V17zm2.5-2.5q-.62 0-1.06-.44A1.45 1.45 0 0 1 2 13V4.5q0-.618.44-1.06Q2.883 3 3.5 3h13q.62 0 1.06.44.44.442.44 1.06V13q0 .619-.44 1.06-.44.44-1.06.44zm0-1.5h13V4.5h-13z"></path></svg>',
  },
  {
    url: '/products/electronics/computers/keyboards',
    icon: 'keyboard_x20',
  },
];

export const meBreadcrumbsMockDataWithManyItems = [
  { text: 'Home', url: '/', icon: 'home' },
  { text: 'Category 1', url: '/cat1', icon: 'repeat' },
  { text: 'Category 2', url: '/cat1/cat2', icon: 'repeat' },
  { text: 'Category 3', url: '/cat1/cat2/cat3', icon: 'repeat' },
  { text: 'Category 4', url: '/cat1/cat2/cat3/cat4', icon: 'repeat' },
  {
    text: 'Category 5',
    url: '/cat1/cat2/cat3/cat4/cat5',
    icon: 'repeat',
  },
  {
    text: 'Product',
    url: '/cat1/cat2/cat3/cat4/cat5/product',
    icon: 'like',
  },
];

export const meBreadcrumbsMockDataWithNestedItems = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Products',
    items: [
      {
        text: 'Laptops',
        url: '/products/laptops',
        items: [
          {
            text: 'Gaming Laptops',
            url: '/products/laptops/gaming',
            items: [
              {
                text: 'High Performance',
                url: '/products/laptops/gaming/high-performance',
                items: [
                  {
                    text: 'Ultra Settings',
                    url: '/products/laptops/gaming/high-performance/ultra-settings',
                  },
                  {
                    text: 'Ray Tracing',
                    url: '/products/laptops/gaming/high-performance/ray-tracing',
                  },
                ],
              },
              {
                text: 'Budget Friendly',
                url: '/products/laptops/gaming/budget',
              },
            ],
          },
          {
            text: 'Business Laptops',
            url: '/products/laptops/business',
          },
        ],
      },
      {
        text: 'Tablets',
        url: '/products/tablets',
        items: [
          {
            text: 'Android Tablets',
            url: '/products/tablets/android',
          },
          {
            text: 'iPads',
            url: '/products/tablets/ipads',
          },
        ],
      },
      {
        text: 'Accessories',
        url: '/products/accessories',
        items: [
          {
            text: 'Keyboards',
            url: '/products/accessories/keyboards',
          },
          {
            text: 'Mice',
            url: '/products/accessories/mice',
          },
        ],
      },
    ],
  },
];

export const meBreadcrumbsMockDataWithNestedItemsAndIcons = [
  {
    text: 'Home',
    url: '/',
    icon: 'home',
  },
  {
    text: 'Products',
    icon: 'public_x20',
    items: [
      {
        text: 'Laptops',
        url: '/products/laptops',
        icon: 'computer_x20',
      },
      {
        text: 'Tablets',
        url: '/products/tablets',
        icon: 'tablet_mac',
      },
      {
        text: 'Accessories',
        url: '/products/accessories',
        icon: 'headset',
      },
    ],
  },
  {
    text: 'Laptops',
    url: '/products/laptops',
    icon: 'computer_x20',
  },
  {
    text: 'Gaming Laptops',
    url: '/products/laptops/gaming',
    icon: 'computer_x20',
  },
];
