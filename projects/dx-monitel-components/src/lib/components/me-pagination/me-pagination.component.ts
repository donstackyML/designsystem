import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {DxButtonModule, DxSelectBoxModule} from "devextreme-angular";
import {NgForOf, NgIf} from "@angular/common";

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

    .me-pagination .dx-button.dx-state-hover .dx-button-content .dx-button-text {
      color: #007bff;
    }

    .me-pagination .dx-button.dx-state-active {
      background-color: #007bff;
      border-color: #007bff;
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

    .me-pagination .dx-button-mode-contained {
      background-color: #007bff;
      border-color: #007bff;
    }

    .me-pagination .dx-button-mode-contained .dx-button-content .dx-button-text {
      color: white;
    }

    .me-pagination .dx-button-mode-contained:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }

    .me-pagination .dx-selectbox .dx-texteditor-input {
      text-align: center;
    }

  `],
  imports: [
    DxButtonModule,
    NgForOf,
    NgIf,
    DxSelectBoxModule
  ],
  standalone: true
})
export class MePaginationComponent implements OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number = 1;
  @Input() maxVisiblePages: number = 7;
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  pages: (number | string)[] = [];
  totalPages: number = 0;
  itemsPerPageOptions: number[] = [10, 20, 50, 100];

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
    this.itemsPerPage = e.value;
    this.currentPage = 1;
    this.calculatePages();
    this.itemsPerPageChange.emit(this.itemsPerPage);
  }
}
