import { NgClass, NgForOf, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DxButtonModule, DxDropDownButtonModule } from 'devextreme-angular';
import { ItemClickEvent } from 'devextreme/ui/drop_down_button';
import { MeDropDownButtonModule } from "../../directives/me-drop-down-button/drop-down-button.module";
import {MeSize} from "../../types/types";

@Component({
  selector: 'me-pagination',
  templateUrl: './me-pagination.component.html',
  imports: [
    DxButtonModule,
    NgForOf,
    NgIf,
    NgClass,
    DxDropDownButtonModule,
    MeDropDownButtonModule
  ],
  standalone: true,
})
export class MePaginationComponent implements OnInit, OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Input() maxVisiblePages: number = 7;
  @Input() useButtons: boolean = false;
  @Input() itemsPerPageOptions: number[] = [10, 50, 100];
  @Input() size: MeSize = 'medium';
  @Input() transparentBackground: boolean = false;
  @Input() isDarkTheme: boolean = false;

  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  pages: (number | string)[] = [];
  totalPages: number = 0;
  selectedValue: number;
  dropDownItems: Array<{ value: number; text: string }> = [];
  private defaultOptions: number[] = [10, 50, 100];

  dropDownOptions = {
    wrapperAttr: {
      class: `me-dropdown-button-popup`,
    },
    contentTemplate: (contentElement: any) => {
      contentElement.classList.add(`me-dropdownbutton-list-${this.size}`);
    },

  };

  constructor() {
    this.selectedValue = this.itemsPerPage;
  }

  ngOnInit(): void {
    if (!this.itemsPerPageOptions?.length) {
      this.itemsPerPageOptions = this.defaultOptions;
    }
    this.selectedValue = this.itemsPerPage;
    this.initializeDropDownItems();
    this.calculatePages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['itemsPerPageOptions'] &&
      !changes['itemsPerPageOptions'].currentValue?.length
    ) {
      this.itemsPerPageOptions = this.defaultOptions;
      this.initializeDropDownItems();
    }

    if (changes['itemsPerPage']) {
      this.selectedValue = changes['itemsPerPage'].currentValue;
    }

    if (
      changes['totalItems'] ||
      changes['itemsPerPage'] ||
      changes['currentPage'] ||
      changes['maxVisiblePages']
    ) {
      this.calculatePages();
    }
  }

  private initializeDropDownItems(): void {
    this.dropDownItems = this.itemsPerPageOptions.map(value => ({
      value,
      text: value.toString()
    }));
  }

  calculatePages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    const halfVisible = Math.floor(this.maxVisiblePages / 2);

    let start = Math.max(this.currentPage - halfVisible, 1);
    let end = Math.min(start + this.maxVisiblePages - 1, this.totalPages);

    if (end - start + 1 < this.maxVisiblePages) {
      start = Math.max(end - this.maxVisiblePages + 1, 1);
    }

    this.pages = [];

    if (start > 1) {
      this.pages.push(1);
      if (start > 2) {
        this.pages.push('...');
      }
    }

    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }

    if (end < this.totalPages) {
      if (end < this.totalPages - 1) {
        this.pages.push('...');
      }
      this.pages.push(this.totalPages);
    }

    this.currentPage = Math.min(this.currentPage, this.totalPages);
  }

  trackByFn(index: number, item: number | string): number | string {
    return item;
  }

  changePage(page: number | string): void {
    if (
      typeof page === 'number' &&
      page !== this.currentPage &&
      page >= 1 &&
      page <= this.totalPages
    ) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
      this.calculatePages();
    }
  }

  nextPage(): void {
    this.changePage(this.currentPage + 1);
  }

  prevPage(): void {
    this.changePage(this.currentPage - 1);
  }

  onItemClick(e: ItemClickEvent): void {
    const newValue = e.itemData.value;
    if (typeof newValue === 'number') {
      this.selectedValue = newValue;
      this.itemsPerPage = newValue;
      this.currentPage = 1;
      this.calculatePages();
      this.itemsPerPageChange.emit(this.itemsPerPage);
    }
  }

  changeItemsPerPage(size: number): void {
    this.selectedValue = size;
    this.itemsPerPage = size;
    this.currentPage = 1;
    this.calculatePages();
    this.itemsPerPageChange.emit(this.itemsPerPage);
  }
}
