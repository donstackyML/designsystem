import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeTabsDirective } from './tabs.directive';

@NgModule({
  declarations: [MeTabsDirective],
  imports: [CommonModule],
  exports: [MeTabsDirective],
})
export class MeTabsModule {}
