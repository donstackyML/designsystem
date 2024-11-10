import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeIconComponent } from './me-icons.component';

@NgModule({
  declarations: [MeIconComponent],
  exports: [MeIconComponent],
  imports: [CommonModule],
})
export class MeIconsModule {}
