import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'me-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css'],
})
export class ContextMenuComponent implements OnInit {
  items: Record<any, unknown>[];

  constructor() {
    this.items = [
      {
        text: 'Share',
        items: [{ text: 'Facebook' }, { text: 'Twitter' }],
      },
      { text: 'Download' },
      { text: 'Comment' },
      { text: 'Favorite' },
    ];
  }

  itemClick({ itemData }: any) {
    if (!itemData.items) {
      notify(`The "${itemData.text}" item was clicked`, 'success', 1500);
    }
  }

  ngOnInit(): void {}
}
