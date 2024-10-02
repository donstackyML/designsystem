import { Directive, Input } from '@angular/core';
import { MeSize } from '../../types/types';

@Directive({
  selector: '[meTreeView]',
  host: {
    '[class.me-tree-view]': 'true',
    '[class.me-tree-view-small]': 'isSizeSmall()',
    '[class.me-tree-view-large]': 'isSizeLarge()',
    '[class.me-tree-view-word-wrap]': 'itemWordWrap',
  },
})
export class MeTreeViewDirective {
  @Input() size: Exclude<MeSize, 'medium'> = 'large';
  @Input() itemWordWrap: boolean = false;

  get isSizeSmall() {
    return this.size === 'small';
  }

  get isSizeLarge() {
    return this.size === 'large';
  }
}
