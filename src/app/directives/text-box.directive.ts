import { Directive, OnInit } from '@angular/core';
import { MeFieldDirective } from './field.directive';

@Directive({
  selector: '[meTextBox]',
})
export class MeTextBoxDirective extends MeFieldDirective implements OnInit {
  ngOnInit(): void {
    this.initMeField();
  }
}
