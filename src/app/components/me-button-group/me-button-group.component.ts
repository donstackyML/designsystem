import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-button-group',
  templateUrl: './me-button-group.component.html',
  styleUrls: ['./me-button-group.component.css'],
})
export class MeButtonGroupComponent implements OnInit {
  icon = 'arrowback';
  iconRight = 'arrowforward';
  iconFile = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_4079_33470" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_4079_33470)">
  <path d="M6.875 10.75L11.0625 14.9375L10 16L4 10L10 4L11.0625 5.0625L6.875 9.25H16V10.75H6.875Z" fill="var(--me-icon-default)"/>
  </g>
  </svg>`;
  iconFile2 = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_4079_33474" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_4079_33474)">
  <path d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z" fill="var(--me-icon-default)"/>
  </g>
  </svg>`;

  itemData = [
    {
      text: 'Пункт 1',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'normal' as const,
    },
    {
      text: 'Пункт 2',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'default' as const,
    },
    {
      text: 'Пункт 3',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'danger' as const,
    },
  ];

  itemDataSvgFromFolder = [
    {
      text: 'Пункт 1',
      leftIcon: this.iconFile,
      rightIcon: this.iconFile2,
    },
    {
      text: 'Пункт 2',
      leftIcon: this.iconFile,
      rightIcon: this.iconFile2,
    },
    {
      text: 'Пункт 3',
      leftIcon: this.iconFile,
      rightIcon: this.iconFile2,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
