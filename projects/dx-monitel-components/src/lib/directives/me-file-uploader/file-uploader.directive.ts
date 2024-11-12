import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[meFileUploader]',
  host: {
    '[class.me-file-uploader]': 'true',
    '[class.me-file-uploader-small]': 'size === "small"',
    '[class.me-file-uploader-medium]': 'size === "medium"',
    '[class.me-file-uploader-large]': 'size === "large"',
  }
})
export class MeFileUploaderDirective {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
