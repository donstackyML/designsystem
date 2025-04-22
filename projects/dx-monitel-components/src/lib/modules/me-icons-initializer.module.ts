import {
  NgModule,
  ModuleWithProviders,
  APP_INITIALIZER,
  InjectionToken,
} from '@angular/core';
import { MeIconsRegistry } from '@monitel/me-icons-registry';
import { meIconSet } from '@monitel/me-icons';

export const ICONS = new InjectionToken<any[]>('icons');

export function initializeIconsFactory(
  registry: MeIconsRegistry,
  icons: any[]
): () => void {
  return () => registry.registerIcons(icons);
}

@NgModule({
  providers: [
    { provide: ICONS, useValue: meIconSet },
    MeIconsRegistry,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIconsFactory,
      deps: [MeIconsRegistry, ICONS],
      multi: true,
    },
  ],
})
export class MeIconsInitializerModule {
  static forRoot(icons: any[]): ModuleWithProviders<MeIconsInitializerModule> {
    return {
      ngModule: MeIconsInitializerModule,
      providers: [{ provide: ICONS, useValue: icons }],
    };
  }
}
