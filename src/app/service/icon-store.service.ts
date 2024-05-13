import { Injectable } from '@angular/core';

const icons = {
  arrowback: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_56_9938" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_56_9938)">
  <path d="M6.875 10.75L11.0625 14.9375L10 16L4 10L10 4L11.0625 5.0625L6.875 9.25H16V10.75H6.875Z" fill="color"/>
  </g>
  </svg>`,
  arrowforward: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_56_9944" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_56_9944)">
  <path d="M13.125 10.75H4V9.25H13.125L8.9375 5.0625L10 4L16 10L10 16L8.9375 14.9375L13.125 10.75Z" fill="color"/>
  </g>
  </svg>`,
  cancel: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_457_8" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
  <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_457_8)">
  <path d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="color"/>
  </g>
  </svg>`,
  cached: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_470_21" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_470_21)">
  <path d="M10 16C8.33333 16 6.90625 15.4097 5.71875 14.2292C4.53125 13.0486 3.95833 11.5972 4 9.875L2.8125 11.0625L1.75 10L4.75 7L7.75 10L6.6875 11.0625L5.5 9.875C5.47222 11.1806 5.90278 12.2778 6.79167 13.1667C7.68056 14.0556 8.75 14.5 10 14.5C10.3056 14.5 10.5972 14.4722 10.875 14.4167C11.1528 14.3611 11.4236 14.2778 11.6875 14.1667L12.7917 15.2708C12.375 15.4931 11.934 15.6701 11.4688 15.8021C11.0035 15.934 10.5139 16 10 16ZM15.25 13L12.25 10L13.3125 8.9375L14.5 10.125C14.5278 8.81944 14.0972 7.72222 13.2083 6.83333C12.3194 5.94444 11.25 5.5 10 5.5C9.70833 5.5 9.42014 5.52778 9.13542 5.58333C8.85069 5.63889 8.57639 5.72222 8.3125 5.83333L7.20833 4.72917C7.625 4.50694 8.06944 4.32986 8.54167 4.19792C9.01389 4.06597 9.5 4 10 4C11.6806 4 13.1111 4.59028 14.2917 5.77083C15.4722 6.95139 16.0417 8.40278 16 10.125L17.1875 8.9375L18.25 10L15.25 13Z" fill="color"/>
  </g>
  </svg>`,
  add: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_56_9932" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_56_9932)">
  <path d="M9.25 10.75H5V9.25H9.25V5H10.75V9.25H15V10.75H10.75V15H9.25V10.75Z" fill="color"/>
  </g>
  </svg>`,
  overflow: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_7_525" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
  <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_7_525)">
  <path d="M12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8Z" fill="color"/>
  </g>
  </svg>`,
  public: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_3983_20849" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
  <rect width="24" height="24" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_3983_20849)">
  <path d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM11 19.95V18C10.45 18 9.97917 17.8042 9.5875 17.4125C9.19583 17.0208 9 16.55 9 16V15L4.2 10.2C4.15 10.5 4.10417 10.8 4.0625 11.1C4.02083 11.4 4 11.7 4 12C4 14.0167 4.6625 15.7833 5.9875 17.3C7.3125 18.8167 8.98333 19.7 11 19.95ZM17.9 17.4C18.2333 17.0333 18.5333 16.6375 18.8 16.2125C19.0667 15.7875 19.2875 15.3458 19.4625 14.8875C19.6375 14.4292 19.7708 13.9583 19.8625 13.475C19.9542 12.9917 20 12.5 20 12C20 10.3667 19.5458 8.875 18.6375 7.525C17.7292 6.175 16.5167 5.2 15 4.6V5C15 5.55 14.8042 6.02083 14.4125 6.4125C14.0208 6.80417 13.55 7 13 7H11V9C11 9.28333 10.9042 9.52083 10.7125 9.7125C10.5208 9.90417 10.2833 10 10 10H8V12H14C14.2833 12 14.5208 12.0958 14.7125 12.2875C14.9042 12.4792 15 12.7167 15 13V16H16C16.4333 16 16.825 16.1292 17.175 16.3875C17.525 16.6458 17.7667 16.9833 17.9 17.4Z" fill="color"/>
  </g>
  </svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_312_428" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_312_428)">
  <path d="M6.0625 15L5 13.9375L8.9375 10L5 6.0625L6.0625 5L10 8.9375L13.9375 5L15 6.0625L11.0625 10L15 13.9375L13.9375 15L10 11.0625L6.0625 15Z" fill="color"/>
  </g>
  </svg>`,
  undo: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_3976_11320" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_3976_11320)">
  <path d="M6 16V14.5H12C12.6944 14.5 13.2847 14.2569 13.7708 13.7708C14.2569 13.2847 14.5 12.6944 14.5 12C14.5 11.3056 14.2569 10.7153 13.7708 10.2292C13.2847 9.74306 12.6944 9.5 12 9.5H6.875L8.8125 11.4375L7.75 12.5L4 8.75L7.75 5L8.8125 6.0625L6.875 8H12C13.1111 8 14.0556 8.38889 14.8333 9.16667C15.6111 9.94444 16 10.8889 16 12C16 13.1111 15.6111 14.0556 14.8333 14.8333C14.0556 15.6111 13.1111 16 12 16H6Z" fill="color"/>
  </g>
  </svg>`,
  redo: `<svg xmlns="http://www.w3.org/2000/svg" width="iconSize" height="iconSize" viewBox="0 0 20 20" fill="none">
  <mask id="mask0_3976_11297" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <rect width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_3976_11297)">
  <path d="M8 16C6.88889 16 5.94444 15.6111 5.16667 14.8333C4.38889 14.0556 4 13.1111 4 12C4 10.8889 4.38889 9.94444 5.16667 9.16667C5.94444 8.38889 6.88889 8 8 8H13.125L11.1875 6.0625L12.25 5L16 8.75L12.25 12.5L11.1875 11.4375L13.125 9.5H8C7.30556 9.5 6.71528 9.74306 6.22917 10.2292C5.74306 10.7153 5.5 11.3056 5.5 12C5.5 12.6944 5.74306 13.2847 6.22917 13.7708C6.71528 14.2569 7.30556 14.5 8 14.5H14V16H8Z" fill="color"/>
  </g>
  </svg>`,
};
const DEFAULT_ICON_SIZE = '20';
const DEFAULT_ICON_COLOR = 'var(--me-icon-default)';

export type MeIcon = typeof icons;

@Injectable({
  providedIn: 'root',
})
export class IconStoreService {
  icons = icons;

  getIcons(customizable: boolean = false) {
    if (customizable) return icons;

    return icons;
  }

  getIcon(
    icon: string,
    iconColor = DEFAULT_ICON_COLOR,
    iconSize = DEFAULT_ICON_SIZE
  ) {
    if (!icon) return '';

    console.log(iconColor);
    console.log(iconSize);

    if (this.icons.hasOwnProperty(icon)) {
      const iconName = <keyof MeIcon>icon;

      return this.icons[iconName]
        .replaceAll('color', iconColor)
        .replaceAll('iconSize', iconSize);
    } else {
      return icon
        .replaceAll('color', iconColor)
        .replaceAll('iconSize', iconSize);
    }
  }
}
