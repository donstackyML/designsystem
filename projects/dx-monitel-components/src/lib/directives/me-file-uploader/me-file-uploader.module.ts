import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeFileUploaderDirective } from './me-file-uploader.directive';

@NgModule({
  declarations: [MeFileUploaderDirective],
  imports: [CommonModule],
  exports: [MeFileUploaderDirective],
})
export class MeFileUploaderModule { }
