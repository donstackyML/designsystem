import { Injectable } from '@angular/core';

import { meIcons, MeIcon } from '@monitel/me-icons';

@Injectable({
  providedIn: 'root',
})
export class MeIconsRegistry {
  private registry = new Map<meIcons, string>();

  public registerIcons(icons: MeIcon[]): void {
    icons.forEach((icon: any) => this.registry.set(icon.name, icon.data));
  }

  public getIconFromString(
    iconName: meIcons,
    color: string = 'var(--Icon-Default)'
  ): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`Иконка с именем ${iconName} не зарегистрирована!`);
    }

    return this.registry.get(iconName)?.replaceAll('color', color);
  }

  public getIcon(
    iconComponent: any,
    color: string = 'var(--Icon-Default)'
  ): string {
    if (!iconComponent.data) {
      console.warn(`Компонент ${iconComponent} не содержит svg строку!`);
    }

    this.registry.set(iconComponent.name, iconComponent.data);

    return iconComponent.data?.replaceAll('color', color) || '';
  }
}
