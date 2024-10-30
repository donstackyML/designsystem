import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'me-load-panel',
  templateUrl: './me-load-panel.component.html',
  styleUrls: ['./me-load-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeLoadPanelComponent {
  loadingVisible = false;
  message = 'Loading...';

  showLoadPanel() {
    this.loadingVisible = true;
  }
}
