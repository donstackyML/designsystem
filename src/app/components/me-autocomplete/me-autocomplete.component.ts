import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'me-autocomplete',
  templateUrl: './me-autocomplete.component.html',
  styleUrls: ['./me-autocomplete.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeAutocompleteComponent {
  showScrollbar = 'always' as const;
}
