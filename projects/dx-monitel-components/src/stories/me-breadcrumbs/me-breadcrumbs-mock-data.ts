export const meBreadcrumbsMockData = [
  { text: 'Home', url: '/', },
  { text: 'Products', url: '/products', },
  { text: 'Electronics', url: '/products/electronics', },
  { text: 'Computers', url: '/products/electronics/computers', },
  { text: 'Laptops', url: '/products/electronics/computers/laptops', },
];

export const meBreadcrumbsMockDataWithIcons = [
  { text: 'Home', url: '/', icon: 'home' },
  { text: 'Products', url: '/products', icon: 'shopping_cart' },
  { text: 'Electronics', url: '/products/electronics', icon: 'devices' },
  {
    text: 'Computers',
    url: '/products/electronics/computers',
    icon: 'computer',
  },
  {
    text: 'Laptops',
    url: '/products/electronics/computers/laptops',
    icon: 'laptop_mac',
  },
];

export const meBreadcrumbsMockDataWithIconsOnly = [
  { url: '/', icon: 'home' },
  { url: '/products', icon: 'shopping_cart' },
  { url: '/products/electronics', icon: 'devices' },
  { url: '/products/electronics/computers', icon: 'computer' },
  { url: '/products/electronics/computers/laptops', icon: 'laptop_mac' },
];

export const meBreadcrumbsMockDataWithManyItems = [
  { text: 'Home', url: '/', icon: 'home' },
  { text: 'Category 1', url: '/cat1', icon: 'category' },
  { text: 'Category 2', url: '/cat1/cat2', icon: 'category' },
  { text: 'Category 3', url: '/cat1/cat2/cat3', icon: 'category' },
  { text: 'Category 4', url: '/cat1/cat2/cat3/cat4', icon: 'category' },
  {
    text: 'Category 5',
    url: '/cat1/cat2/cat3/cat4/cat5',
    icon: 'category',
  },
  {
    text: 'Product',
    url: '/cat1/cat2/cat3/cat4/cat5/product',
    icon: 'store',
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

      },
      {
        text: 'Tablets',
        url: '/products/tablets',

      },
      {
        text: 'Accessories',
        url: '/products/accessories',

      },
    ],
  },
  {
    text: 'Laptops',
    url: '/products/laptops',
  },
  {
    text: 'Gaming Laptops',
    url: '/products/laptops/gaming',
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
    icon: 'shopping_cart',
    items: [
      {
        text: 'Laptops',
        url: '/products/laptops',
        icon: 'laptop_mac',
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
    icon: 'laptop_mac',
  },
  {
    text: 'Gaming Laptops',
    url: '/products/laptops/gaming',
    icon: 'sports_esports',
  },
];
