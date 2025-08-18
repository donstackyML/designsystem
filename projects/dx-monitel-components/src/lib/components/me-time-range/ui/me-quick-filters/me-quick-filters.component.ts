import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DxButtonGroupModule, DxSelectBoxModule } from 'devextreme-angular';

import { MeButtonGroupModule, MeSelectBoxModule } from '../../../../directives';

import {
  QuickFilter,
  QuickFilterMode,
  QuickOffFilterPosition,
} from './me-quick-filters.model';
import {
  defaultOffQuickFilter,
  defaultQuickFilters,
} from './me-quick-filters.options';

@Component({
  selector: 'me-quick-filters',
  standalone: true,
  imports: [
    NgIf,
    DxButtonGroupModule,
    MeButtonGroupModule,
    DxSelectBoxModule,
    MeSelectBoxModule,
  ],
  templateUrl: './me-quick-filters.component.html',
  styleUrls: ['./me-quick-filters.component.scss'],
})
export class MeQuickFiltersComponent implements OnInit {
  _filters: Array<QuickFilter> = [];

  _defaultFilterId = '';

  @Input() title = '';

  @Input() offFilter: QuickFilter | null = defaultOffQuickFilter;

  @Input() offFilterPosition: QuickOffFilterPosition = 'left';

  @Input() filters: Array<QuickFilter> = defaultQuickFilters;

  @Input() selectedFilterId?: string | null = null;

  @Input() mode: QuickFilterMode = 'buttons';

  @Output() filtersSelected = new EventEmitter<string>();

  @Output() filtersIsEnabled = new EventEmitter<boolean>();

  @Input() disabled = false;

  ngOnInit(): void {
    if (this.offFilter) {
      if (this.offFilterPosition === 'left') {
        this._filters = [this.offFilter, ...this.filters];
      } else {
        this._filters = [...this.filters, this.offFilter];
      }
    } else {
      this._filters = this.filters;
    }

    if (!this.selectedFilterId && this._filters.length > 0) {
      this.selectedFilterId = this._filters[0].id;
    }

    this._defaultFilterId =
      this.selectedFilterId ||
      (this._filters.length > 0 ? this._filters[0].id : '');

    this.checkAndEmitFilterEnabled();
  }

  onSelectionChanged(e: any) {
    if (e.addedItems && e.addedItems.length > 0) {
      this.selectedFilterId = e.addedItems[0].id;
      this.filtersSelected.emit(this.selectedFilterId as string);
      this.checkAndEmitFilterEnabled();
    }
  }

  onSelectBoxValueChanged(e: any) {
    this.selectedFilterId = e.value;
    this.filtersSelected.emit(this.selectedFilterId as string);
    this.checkAndEmitFilterEnabled();
  }

  private checkAndEmitFilterEnabled(): void {
    const isEnabled = this.offFilter
      ? this.selectedFilterId !== this.offFilter.id
      : true;
    this.filtersIsEnabled.emit(isEnabled);
  }
}
