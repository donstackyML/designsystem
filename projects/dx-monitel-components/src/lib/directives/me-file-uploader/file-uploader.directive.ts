import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { DxFileUploaderComponent } from 'devextreme-angular';

const UPLOADER_BORDER_COLOR = '#888';
const UPLOADER_BACKGROUND_COLOR = '#f9f9f9';
const UPLOADER_PADDING = '20px';
const UPLOADER_BORDER_RADIUS = '5px';
const UPLOADER_TEXT_ALIGN = 'center';

@Directive({
  selector: '[meFileUploader]',
})
export class MeFileUploaderDirective implements AfterViewInit {
  @Input() borderColor: string = UPLOADER_BORDER_COLOR;
  @Input() backgroundColor: string = UPLOADER_BACKGROUND_COLOR;
  @Input() padding: string = UPLOADER_PADDING;
  @Input() borderRadius: string = UPLOADER_BORDER_RADIUS;
  @Input() textAlign: string = UPLOADER_TEXT_ALIGN;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @ViewChild(DxFileUploaderComponent) fileUploader?: DxFileUploaderComponent;

  ngAfterViewInit(): void {
    this.applyStyles();
  }

  private applyStyles() {
    const fileUploaderElement = this.element.nativeElement.querySelector('.dx-fileuploader');
    if (fileUploaderElement) {
      this.renderer.setStyle(fileUploaderElement, 'border', `2px dashed ${this.borderColor}`);
      this.renderer.setStyle(fileUploaderElement, 'background-color', this.backgroundColor);
      this.renderer.setStyle(fileUploaderElement, 'padding', this.padding);
      this.renderer.setStyle(fileUploaderElement, 'border-radius', this.borderRadius);
      this.renderer.setStyle(fileUploaderElement, 'text-align', this.textAlign);
    }
  }
}
