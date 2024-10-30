import { meIcons, MeIcon } from '@monitel/me-icons';
import * as i0 from '@angular/core';
export declare class MeIconsRegistry {
  private registry;
  registerIcons(icons: MeIcon[]): void;
  getIconFromString(iconName: meIcons, color?: string): string | undefined;
  getIcon(iconComponent: any, color?: string): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<MeIconsRegistry, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<MeIconsRegistry>;
}
