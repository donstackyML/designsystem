import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeAutocompleteDirective } from './me-autocomplete.directive';

@NgModule({
  declarations: [MeAutocompleteDirective],
  imports: [CommonModule],
  exports: [MeAutocompleteDirective],
})
export class MeAutocompleteModule {}
