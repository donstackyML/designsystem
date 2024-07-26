import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'me-loading-indicator',
  templateUrl: './me-loading-indicator.component.html',
  styleUrls: ['./me-loading-indicator.component.css'],
})
export class MeLoadingIndicatorComponent {
  constructor() {}

  onContentReady(event: any) {
    console.log('Content Ready:', event);
  }

  onDisposing(event: any) {
    console.log('Disposing:', event);
  }

  onInitialized(event: any) {
    console.log('Initialized:', event);
  }

  onOptionChanged(event: any) {
    console.log('Option Changed:', event);
  }
}
