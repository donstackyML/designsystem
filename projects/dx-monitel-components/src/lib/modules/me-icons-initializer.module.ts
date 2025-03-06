import { NgModule, APP_INITIALIZER } from '@angular/core';
import { MeIconsRegistry } from '@monitel/me-icons-registry';
import { meIconSet } from '@monitel/me-icons';

export function initializeIcons(registry: MeIconsRegistry): () => void {
  return () => registry.registerIcons(meIconSet);
}

@NgModule({
  providers: [
    MeIconsRegistry,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIcons,
      deps: [MeIconsRegistry],
      multi: true
    }
  ]
})
export class MeIconsInitializerModule { }

