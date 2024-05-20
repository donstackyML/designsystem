import { Component, OnInit } from '@angular/core';
import { MeButtonGroupItem } from 'src/app/directives/button-group.directive';

@Component({
  selector: 'me-button-group',
  templateUrl: './me-button-group.component.html',
  styleUrls: ['./me-button-group.component.css'],
})
export class MeButtonGroupComponent {
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

  itemDataDefault: MeButtonGroupItem[] = [
    {
      text: 'Пункт 1',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'default',
    },
    {
      text: 'Пункт 2',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'default',
    },
    {
      text: 'Пункт 3',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'default',
    },
  ];

  itemDataNormal: MeButtonGroupItem[] = [
    {
      text: 'Пункт 1',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'normal',
    },
    {
      text: 'Пункт 2',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'normal',
    },
    {
      text: 'Пункт 3',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'normal',
    },
  ];

  itemDataSuccess: MeButtonGroupItem[] = [
    {
      text: 'Пункт 1',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'success',
    },
    {
      text: 'Пункт 2',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'success',
    },
    {
      text: 'Пункт 3',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'success',
    },
  ];

  itemDataWarning: MeButtonGroupItem[] = [
    {
      text: 'Пункт 1',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      warningType: true,
    },
    {
      text: 'Пункт 2',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      warningType: true,
    },
    {
      text: 'Пункт 3',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      warningType: true,
    },
  ];

  itemDataDanger: MeButtonGroupItem[] = [
    {
      text: 'Пункт 1',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'danger',
    },
    {
      text: 'Пункт 2',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'danger',
    },
    {
      text: 'Пункт 3',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'danger',
    },
  ];

  itemData: MeButtonGroupItem[] = [
    {
      text: 'Пункт 1',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'normal',
    },
    {
      text: 'Пункт 2',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'default',
    },
    {
      text: 'Пункт 3',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'success',
    },
    {
      text: 'Пункт 4',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      warningType: true,
    },
    {
      text: 'Пункт 5',
      leftIcon: this.icon,
      rightIcon: this.iconRight,
      type: 'danger',
    },
  ];

  itemDataOnlyText: MeButtonGroupItem[] = [
    {
      text: 'Пункт 1',
      type: 'normal',
    },
    {
      text: 'Пункт 2',
      type: 'default',
    },
    {
      text: 'Пункт 3',
      type: 'success',
    },
    {
      text: 'Пункт 4',
      warningType: true,
    },
    {
      text: 'Пункт 5',
      type: 'danger',
    },
  ];

  itemDataOnlyIcon: MeButtonGroupItem[] = [
    {
      iconOnly: this.icon,
      type: 'normal',
    },
    {
      iconOnly: 'arrowforward',
      type: 'default',
    },
    {
      iconOnly: 'cancel',
      type: 'success',
    },
    {
      iconOnly: 'cached',
      warningType: true,
    },
    {
      iconOnly: 'add',
      type: 'danger',
    },
  ];

  constructor() {}
}
