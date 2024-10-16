import { Directive, Input, OnInit } from '@angular/core';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Directive({
  selector: '[meSelectBox]',
  host: {
    '[class.me-selectbox]': 'true',
    '[class.me-selectbox-small]': 'size === "small"',
    '[class.me-selectbox-medium]': 'size === "medium"',
    '[class.me-selectbox-large]': 'size === "large"',
  },
})
export class MeSelectBoxDirective implements OnInit {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() stylingMode: 'outlined' | 'filled' = 'filled';

  constructor(private selectBox: DxSelectBoxComponent) {}

  ngOnInit(): void {
    this.selectBox.instance.option('stylingMode', this.stylingMode);
    this.selectBox.instance.option('labelMode', 'hidden');
  }
}
