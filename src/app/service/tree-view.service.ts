import { Injectable } from '@angular/core';
// import icon from '../../assets/bundles/icons/dxicons.ttf';

export interface Product {
  id: string;
  text: string;
  expanded?: boolean;
  items?: Product[];
  price?: number;
  image?: string;
  icon?: string;
}

const products: Product[] = [
  {
    id: '1',
    text: 'Stores',
    expanded: true,
    icon: 'folder',
    items: [
      {
        id: '1_1',
        text: 'Super Mart of the West',
        expanded: true,
        icon: 'folder',
        items: [
          {
            id: '1_1_1',
            text: 'Video Players',
            icon: 'folder',
            items: [
              {
                id: '1_1_1_1',
                text: 'HD Video Player',
                price: 220,
                image: 'images/products/1.png',
                icon: 'file',
              },
              {
                id: '1_1_1_2',
                text: 'SuperHD Video Player',
                image: 'images/products/2.png',
                price: 270,
                icon: 'file',
              },
            ],
          },
          {
            id: '1_1_2',
            text: 'Televisions',
            expanded: true,
            icon: 'folder',
            items: [
              {
                id: '1_1_2_1',
                text: 'SuperLCD 42',
                image: 'images/products/7.png',
                price: 1200,
                icon: 'file',
              },
              {
                id: '1_1_2_2',
                text: 'SuperLED 42',
                image: 'images/products/5.png',
                icon: 'file',
                price: 1450,
              },
              {
                id: '1_1_2_3',
                text: 'SuperLED 50',
                image: 'images/products/4.png',
                icon: 'file',
                price: 1600,
              },
              {
                id: '1_1_2_4',
                text: 'SuperLCD 55',
                image: 'images/products/6.png',
                icon: 'file',
                price: 1350,
              },
              {
                id: '1_1_2_5',
                text: 'SuperLCD 70',
                image: 'images/products/9.png',
                icon: 'file',
                price: 4000,
              },
            ],
          },
          {
            id: '1_1_3',
            text: 'Monitors',
            expanded: true,
            icon: 'folder',
            items: [
              {
                id: '1_1_3_1',
                text: '19"',
                expanded: true,
                icon: 'folder',
                items: [
                  {
                    id: '1_1_3_1_1',
                    text: 'DesktopLCD 19',
                    image: 'images/products/10.png',
                    icon: 'file',
                    price: 160,
                  },
                ],
              },
              {
                id: '1_1_3_2',
                text: '21"',
                icon: 'folder',
                items: [
                  {
                    id: '1_1_3_2_1',
                    text: 'DesktopLCD 21',
                    image: 'images/products/12.png',
                    icon: 'file',
                    price: 170,
                  },
                  {
                    id: '1_1_3_2_2',
                    text: 'DesktopLED 21',
                    image: 'images/products/13.png',
                    icon: 'file',
                    price: 175,
                  },
                ],
              },
            ],
          },
          {
            id: '1_1_4',
            text: 'Projectors',
            icon: 'folder',
            items: [
              {
                id: '1_1_4_1',
                text: 'Projector Plus',
                image: 'images/products/14.png',
                icon: 'file',
                price: 550,
              },
              {
                id: '1_1_4_2',
                text: 'Projector PlusHD',
                image: 'images/products/15.png',
                icon: 'file',
                price: 750,
              },
            ],
          },
        ],
      },
      {
        id: '1_2',
        text: 'Braeburn',
        icon: 'folder',
        items: [
          {
            id: '1_2_1',
            text: 'Video Players',
            items: [
              {
                id: '1_2_1_1',
                text: 'HD Video Player',
                image: 'images/products/1.png',
                icon: 'file',
                price: 240,
              },
              {
                id: '1_2_1_2',
                text: 'SuperHD Video Player',
                image: 'images/products/2.png',
                icon: 'file',
                price: 300,
              },
            ],
          },
          {
            id: '1_2_2',
            text: 'Televisions',
            items: [
              {
                id: '1_2_2_1',
                text: 'SuperPlasma 50',
                image: 'images/products/3.png',
                icon: 'file',
                price: 1800,
              },
              {
                id: '1_2_2_2',
                text: 'SuperPlasma 65',
                image: 'images/products/8.png',
                icon: 'file',
                price: 3500,
              },
            ],
          },
          {
            id: '1_2_3',
            text: 'Monitors',
            icon: 'folder',
            items: [
              {
                id: '1_2_3_1',
                text: '19"',
                icon: 'folder',
                items: [
                  {
                    id: '1_2_3_1_1',
                    text: 'DesktopLCD 19',
                    image: 'images/products/10.png',
                    icon: 'file',
                    price: 170,
                  },
                ],
              },
              {
                id: '1_2_3_2',
                text: '21"',
                icon: 'folder',
                items: [
                  {
                    id: '1_2_3_2_1',
                    text: 'DesktopLCD 21',
                    image: 'images/products/12.png',
                    icon: 'file',
                    price: 180,
                  },
                  {
                    id: '1_2_3_2_2',
                    text: 'DesktopLED 21',
                    image: 'images/products/13.png',
                    icon: 'file',
                    price: 190,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1_3',
        text: 'E-Mart',
        icon: 'folder',
        items: [
          {
            id: '1_3_1',
            text: 'Video Players',
            icon: 'folder',
            items: [
              {
                id: '1_3_1_1',
                text: 'HD Video Player',
                image: 'images/products/1.png',
                icon: 'file',
                price: 220,
              },
              {
                id: '1_3_1_2',
                text: 'SuperHD Video Player',
                image: 'images/products/2.png',
                icon: 'file',
                price: 275,
              },
            ],
          },
          {
            id: '1_3_3',
            text: 'Monitors',
            icon: 'folder',
            items: [
              {
                id: '1_3_3_1',
                text: '19"',
                icon: 'folder',
                items: [
                  {
                    id: '1_3_3_1_1',
                    text: 'DesktopLCD 19',
                    image: 'images/products/10.png',
                    icon: 'file',
                    price: 165,
                  },
                ],
              },
              {
                id: '1_3_3_2',
                text: '21"',
                icon: 'folder',
                items: [
                  {
                    id: '1_3_3_2_1',
                    text: 'DesktopLCD 21',
                    image: 'images/products/12.png',
                    icon: 'file',
                    price: 175,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1_4',
        text: 'Walters',
        icon: 'folder',
        items: [
          {
            id: '1_4_1',
            text: 'Video Players',
            icon: 'folder',
            items: [
              {
                id: '1_4_1_1',
                text: 'HD Video Player',
                image: 'images/products/1.png',
                icon: 'file',
                price: 210,
              },
              {
                id: '1_4_1_2',
                text: 'SuperHD Video Player',
                image: 'images/products/2.png',
                icon: 'file',
                price: 250,
              },
            ],
          },
          {
            id: '1_4_2',
            text: 'Televisions',
            icon: 'folder',
            items: [
              {
                id: '1_4_2_1',
                text: 'SuperLCD 42',
                image: 'images/products/7.png',
                icon: 'file',
                price: 1100,
              },
              {
                id: '1_4_2_2',
                text: 'SuperLED 42',
                image: 'images/products/5.png',
                icon: 'file',
                price: 1400,
              },
              {
                id: '1_4_2_3',
                text: 'SuperLED 50',
                image: 'images/products/4.png',
                icon: 'file',
                price: 1500,
              },
              {
                id: '1_4_2_4',
                text: 'SuperLCD 55',
                image: 'images/products/6.png',
                icon: 'file',
                price: 1300,
              },
              {
                id: '1_4_2_5',
                text: 'SuperLCD 70',
                image: 'images/products/9.png',
                icon: 'file',
                price: 4000,
              },
              {
                id: '1_4_2_6',
                text: 'SuperPlasma 50',
                image: 'images/products/3.png',
                icon: 'file',
                price: 1700,
              },
            ],
          },
          {
            id: '1_4_3',
            text: 'Monitors',
            icon: 'folder',
            items: [
              {
                id: '1_4_3_1',
                text: '19"',
                icon: 'folder',
                items: [
                  {
                    id: '1_4_3_1_1',
                    text: 'DesktopLCD 19',
                    image: 'images/products/10.png',
                    icon: 'file',
                    price: 160,
                  },
                ],
              },
              {
                id: '1_4_3_2',
                text: '21"',
                icon: 'folder',
                items: [
                  {
                    id: '1_4_3_2_1',
                    text: 'DesktopLCD 21',
                    image: 'images/products/12.png',
                    icon: 'file',
                    price: 170,
                  },
                  {
                    id: '1_4_3_2_2',
                    text: 'DesktopLED 21',
                    image: 'images/products/13.png',
                    icon: 'file',
                    price: 180,
                  },
                ],
              },
            ],
          },
          {
            id: '1_4_4',
            text: 'Projectors',
            icon: 'folder',
            items: [
              {
                id: '1_4_4_1',
                text: 'Projector Plus',
                image: 'images/products/14.png',
                icon: 'file',
                price: 550,
              },
              {
                id: '1_4_4_2',
                text: 'Projector PlusHD',
                image: 'images/products/15.png',
                icon: 'file',
                price: 750,
              },
            ],
          },
        ],
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class TreeViewService {
  getProducts(): Product[] {
    return products;
  }
}
