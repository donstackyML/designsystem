import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import themes from 'devextreme/ui/themes';

type Icon = {
  [key: string]: string;
};

export const icons: Icon = {
  arrowback: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.875 6.75L7.0625 10.9375L6 12L0 6L6 0L7.0625 1.0625L2.875 5.25H12V6.75H2.875Z" fill="color" />
  </svg>`,
  cancel: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.0625 12L8 9.0625L10.9375 12L12 10.9375L9.0625 8L12 5.0625L10.9375 4L8 6.9375L5.0625 4L4 5.0625L6.9375 8L4 10.9375L5.0625 12ZM8 16C6.90278 16 5.86806 15.7917 4.89583 15.375C3.92361 14.9583 3.07292 14.3854 2.34375 13.6562C1.61458 12.9271 1.04167 12.0764 0.625 11.1042C0.208333 10.1319 0 9.09722 0 8C0 6.88889 0.208333 5.85069 0.625 4.88542C1.04167 3.92014 1.61458 3.07292 2.34375 2.34375C3.07292 1.61458 3.92361 1.04167 4.89583 0.625C5.86806 0.208333 6.90278 0 8 0C9.11111 0 10.1493 0.208333 11.1146 0.625C12.0799 1.04167 12.9271 1.61458 13.6562 2.34375C14.3854 3.07292 14.9583 3.92014 15.375 4.88542C15.7917 5.85069 16 6.88889 16 8C16 9.09722 15.7917 10.1319 15.375 11.1042C14.9583 12.0764 14.3854 12.9271 13.6562 13.6562C12.9271 14.3854 12.0799 14.9583 11.1146 15.375C10.1493 15.7917 9.11111 16 8 16ZM8 14.5C9.80556 14.5 11.3403 13.8681 12.6042 12.6042C13.8681 11.3403 14.5 9.80556 14.5 8C14.5 6.19444 13.8681 4.65972 12.6042 3.39583C11.3403 2.13194 9.80556 1.5 8 1.5C6.19444 1.5 4.65972 2.13194 3.39583 3.39583C2.13194 4.65972 1.5 6.19444 1.5 8C1.5 9.80556 2.13194 11.3403 3.39583 12.6042C4.65972 13.8681 6.19444 14.5 8 14.5Z" fill="color"/>
  </svg>`,
  cached: `<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 12C7.33333 12 5.90625 11.4097 4.71875 10.2292C3.53125 9.04861 2.95833 7.59722 3 5.875L1.8125 7.0625L0.75 6L3.75 3L6.75 6L5.6875 7.0625L4.5 5.875C4.47222 7.18056 4.90278 8.27778 5.79167 9.16667C6.68056 10.0556 7.75 10.5 9 10.5C9.30556 10.5 9.59722 10.4722 9.875 10.4167C10.1528 10.3611 10.4236 10.2778 10.6875 10.1667L11.7917 11.2708C11.375 11.4931 10.934 11.6701 10.4688 11.8021C10.0035 11.934 9.51389 12 9 12ZM14.25 9L11.25 6L12.3125 4.9375L13.5 6.125C13.5278 4.81944 13.0972 3.72222 12.2083 2.83333C11.3194 1.94444 10.25 1.5 9 1.5C8.70833 1.5 8.42014 1.52778 8.13542 1.58333C7.85069 1.63889 7.57639 1.72222 7.3125 1.83333L6.20833 0.729167C6.625 0.506944 7.06944 0.329861 7.54167 0.197917C8.01389 0.0659722 8.5 0 9 0C10.6806 0 12.1111 0.590278 13.2917 1.77083C14.4722 2.95139 15.0417 4.40278 15 6.125L16.1875 4.9375L17.25 6L14.25 9Z" fill="color"/>
  </svg>`,
};

const ICON_DARK_COLOR = '#ffffff';
const ICON_LIGHT_COLOR = '#000000';

@Component({
  selector: 'me-icon',
  templateUrl: './me-icon.component.html',
  styleUrls: ['./me-icon.component.css'],
})
export class MeIconComponent implements OnInit, AfterViewInit, DoCheck {
  @Input() color = '';
  @Input() icon = '';
  @ViewChild('iconName') iconName?: ElementRef;

  currentTheme = themes.current();

  constructor() {}

  ngOnInit(): void {
    console.log('me-icon', this.icon);
  }

  ngAfterViewInit() {
    this.setIconInnerHTML();
  }

  ngDoCheck() {
    this.setIconInnerHTML();
  }

  getIcon() {
    return icons[this.icon].replace(
      'color',
      this.color ? this.color : this.getIconColor()
    );
  }

  getIconColor() {
    return themes.current() === 'generic.light'
      ? ICON_LIGHT_COLOR
      : ICON_DARK_COLOR;
  }

  setIconInnerHTML() {
    if (this.iconName) {
      this.iconName.nativeElement.innerHTML = this.getIcon();
    }
  }

  @HostListener('window:click')
  changeTheme() {
    themes.ready(() => {
      if (
        !this.color ||
        this.color === ICON_DARK_COLOR ||
        this.color === ICON_LIGHT_COLOR
      ) {
        this.color = this.getIconColor();
      }
    });
  }
}
