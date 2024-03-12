import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

type MeBtnSize = 'small' | 'normal' | 'large';
type MeBtnType = 'default' | 'normal' | 'success' | 'danger' | 'warning';

@Component({
  selector: 'me-button-child',
  templateUrl: './me-button-child.component.html',
  styleUrls: ['./me-button-child.component.css'],
})
export class MeButtonChildComponent implements OnInit, OnChanges {
  @Input() size: MeBtnSize = 'normal';
  @Input() type: MeBtnType = 'default';
  @ViewChild('btn') dxButton?: ElementRef;

  class = '';

  // meClasses = {
  //   normalSize: this.currentSize === 'normal',
  //   smallSize: this.currentSize === 'small',
  //   largeSize: this.currentSize === 'large',
  // };

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.size);
  }

  ngOnChanges(): void {
    console.log(this.dxButton);

    this.class = this.size;
  }
}
