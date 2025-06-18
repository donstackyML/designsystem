import { MeIconStoreService } from 'src/app/service/icon-store.service';

const iconStore = new MeIconStoreService();

export const mockData = [
  {
    id: '1',
    name: 'Label',
    expanded: true,
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
  },
  {
    id: '1_1',
    categoryId: '1',
    name: 'Label',
    expanded: true,
  },
  {
    id: '1_1_1',
    name: 'Label',
  },
  {
    id: '1_1_1_1',
    categoryId: '1_1_1',
    name: 'Label',
    price: 220,
  },
  {
    id: '1_1_1_2',
    categoryId: '1_1_1',
    name: 'Label',
    price: 270,
  },
  {
    id: '1_1_2',
    categoryId: '1_1',
    name: 'Label',
    expanded: true,
  },
  {
    id: '1_1_2_1',
    categoryId: '1_1_2',
    name: 'Label',
    price: 1200,
  },
  {
    id: '1_1_2_2',
    categoryId: '1_1_2',
    name: 'Label',
    price: 1450,
  },
  {
    id: '1_1_2_3',
    categoryId: '1_1_2',
    name: 'Label',
    price: 1600,
  },
  {
    id: '1_1_2_4',
    categoryId: '1_1_2',
    name: 'Label',
    price: 1750,
  },
  {
    id: '1_1_2_5',
    categoryId: '1_1_2',
    name: 'Label',
    price: 4000,
  },
  {
    id: '1_1_3',
    categoryId: '1_1',
    name: 'Label',
  },
  {
    id: '1_1_3_1',
    categoryId: '1_1_3',
    name: 'Label',
  },
  {
    id: '1_1_3_1_1',
    categoryId: '1_1_3_1',
    name: 'Label',
    price: 160,
  },
  {
    id: '1_1_4',
    categoryId: '1_1',
    name: 'Label',
  },
  {
    id: '1_1_4_1',
    categoryId: '1_1_4',
    name: 'Label',
    price: 550,
  },
  {
    id: '1_1_4_2',
    categoryId: '1_1_4',
    name: 'Label',
    price: 750,
  },
];
