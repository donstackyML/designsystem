import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {DxButtonModule, DxSelectBoxModule} from "devextreme-angular";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'me-pagination',
  templateUrl: './me-pagination.component.html',
  styles: [`
    .me-pagination {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: Arial, sans-serif;
    }

    .me-pagination__size-controls {
      display: flex;
      align-items: center;
      margin-right: 16px;
    }

    .me-pagination__size-controls.small .dx-button,
    .me-pagination__size-controls.small .dx-selectbox,
    .me-pagination__controls.small .dx-button {
      height: 28px;
      font-size: 12px;
    }

    .me-pagination__size-controls.medium .dx-button,
    .me-pagination__size-controls.medium .dx-selectbox,
    .me-pagination__controls.medium .dx-button {
      height: 32px;
      font-size: 14px;
    }

    .me-pagination__size-controls.large .dx-button,
    .me-pagination__size-controls.large .dx-selectbox,
    .me-pagination__controls.large .dx-button {
      height: 40px;
      font-size: 16px;
    }

    .me-pagination__info {
      font-size: 14px;
      color: #333;
    }

    .me-pagination__controls {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }

    .me-pagination__ellipsis {
      font-size: 14px;
      color: #333;
      padding: 0 5px;
    }

    .me-pagination__per-page {
      font-size: 14px;
      color: #333;
    }

    .me-pagination .dx-button {
      min-width: 32px;
      height: 32px;
      padding: 0;
      border-radius: 4px;
      margin-right: 8px;
    }
    .dx-button-mode-contained.dx-button-default, .dx-button-default .dx-button-mode-contained {
      background-color: #C4D8FF;
      border-color: #C4D8FF;
      color: #fff;
    }

    .me-pagination .dx-button.dx-state-active {
      background-color: #C4D8FF;
      border-color: #C4D8FF;
    }

    .me-pagination .dx-button.dx-state-active .dx-button-content .dx-button-text {
      color: #333;
    }

    .me-pagination .dx-button-mode-contained.dx-state-active {
      background-color: #C4D8FF;
      border-color: #C4D8FF;
    }

    .me-pagination .dx-button-mode-contained.dx-state-active .dx-button-content .dx-button-text {
      color: #333;
    }

    .me-pagination .dx-button.dx-button-mode-outlined {
      border-color: #e0e0e0;
      background-color: #f5f5f5;
    }

    .me-pagination .dx-button.dx-button-mode-outlined .dx-button-content .dx-button-text {
      color: #333;
    }

    .me-pagination .dx-button.dx-state-hover {
      background-color: #e0e0e0;
    }
    .me-pagination .dx-button.dx-state-active .dx-button-content .dx-button-text {
      color: white;
    }

    .me-pagination .dx-button.dx-button-has-text .dx-button-content {
      padding: 5px 10px;
    }

    .me-pagination .dx-button.dx-button-has-icon .dx-icon {
      width: 18px;
      height: 18px;
      font-size: 18px;
      line-height: 18px;
    }

    .me-pagination .dx-button-mode-contained .dx-button-content .dx-button-text {
      color: white;
    }

  `],
  imports: [
    DxButtonModule,
    NgForOf,
    NgIf,
    DxSelectBoxModule,
    NgClass
  ],
  standalone: true
})
export class MePaginationComponent implements OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Input() maxVisiblePages: number = 7;
  @Input() useButtons: boolean = false;
  @Input() itemsPerPageOptions: number[] = [10, 50, 100];
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Объединенный параметр размера
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  pages: (number | string)[] = [];
  totalPages: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['itemsPerPage'] || changes['currentPage'] || changes['maxVisiblePages']) {
      this.calculatePages();
    }
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
    if (typeof page === 'number' && page !== this.currentPage && page >= 1 && page <= this.totalPages) {
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

  onItemsPerPageChange(e: any): void {
    console.log(e)
    this.itemsPerPage = e.value;
    this.currentPage = 1;
    this.calculatePages();
    this.itemsPerPageChange.emit(this.itemsPerPage);
  }

  changeItemsPerPage(size: number): void {

    this.itemsPerPage = size;
    this.currentPage = 1;
    this.calculatePages();
    this.itemsPerPageChange.emit(this.itemsPerPage);
  }
}
