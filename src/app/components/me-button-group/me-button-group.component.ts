import { Component } from '@angular/core';
import { MeButtonGroupItem } from '../../types/types';

@Component({
  selector: 'me-button-group',
  templateUrl: './me-button-group.component.html',
  styleUrls: ['./me-button-group.component.css'],
})
export class MeButtonGroupComponent {
  icon = 'arrowback';
  iconRight = 'arrowforward';

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
      icon: this.icon,
      type: 'normal',
    },
    {
      icon: 'arrowforward',
      type: 'default',
    },
    {
      icon: 'cancel',
      type: 'success',
    },
    {
      icon: 'cached',
      warningType: true,
    },
    {
      icon: 'add',
      type: 'danger',
    },
  ];

  constructor() {}
}
