import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeFileUploaderDirective} from "./file-uploader.directive";

@NgModule({
  declarations: [MeFileUploaderDirective],
  imports: [CommonModule],
  exports: [MeFileUploaderDirective],
})
export class MeFileUploaderModule {}
