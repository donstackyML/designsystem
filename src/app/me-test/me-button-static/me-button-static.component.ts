import { Component, HostListener, Input, OnInit } from '@angular/core';
import themes from 'devextreme/ui/themes';

type MeBtnSize = 'small' | 'normal' | 'large';
type MeBtnType = 'default' | 'normal' | 'success' | 'danger' | 'warning';

@Component({
  selector: 'me-button-static',
  templateUrl: './me-button-static.component.html',
  styleUrls: ['./me-button-static.component.css'],
})
export class MeButtonStaticComponent implements OnInit {
  @Input() size: MeBtnSize = 'normal';
  @Input() type: MeBtnType = 'default';
  @Input() iconColor = '';
  @Input() leftIcon = '';
  @Input() rightIcon = '';
  @Input() icon = '';
  @Input() text = '';
  iconPath = '';
  constructor() {}

  ngOnInit(): void {
    this.iconPath = `assets/images/icons/light/${this.icon}`;
  }

  @HostListener('window:click')
  changeTheme() {
    themes.ready(() => {
      if (themes.current() === 'generic.light') {
        this.iconPath = `assets/images/icons/light/${this.icon}`;
      } else if (themes.current() === 'generic.dark') {
        this.iconPath = `assets/images/icons/dark/${this.icon}`;
      }
    });
  }
}
