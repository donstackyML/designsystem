import { Component, ViewChild, OnInit } from '@angular/core';
import { DxAccordionComponent } from 'devextreme-angular';

export interface Company {
  ID: number;
  CompanyName: string;
  Description: string;
  Address: string;
  City: string;
  State: string;
  Zipcode: number;
  Phone: string;
  Fax: string;
  Website: string;
}

@Component({
  selector: 'me-accordion',
  templateUrl: './me-accordion.component.html',
  styleUrls: ['./me-accordion.component.css'],
})
export class MeAccordionComponent implements OnInit {
  @ViewChild('accordion') accordion!: DxAccordionComponent;

  companies: Company[] = [
    {
      ID: 1,
      CompanyName: 'Super Mart of the West',
      Description: 'Описание',
      Address: '702 SW 8th Street',
      City: 'Bentonville',
      State: 'Arkansas',
      Zipcode: 72716,
      Phone: '(800) 555-2797',
      Fax: '(800) 555-2171',
      Website: 'http://www.nowebsitesupermart.com',
    },
    {
      ID: 2,
      CompanyName: 'Electronics Depot',
      Description: 'Описание',
      Address: '2455 Paces Ferry Road NW',
      City: 'Atlanta',
      State: 'Georgia',
      Zipcode: 30339,
      Phone: '(800) 595-3232',
      Fax: '(800) 595-3231',
      Website: 'http://www.nowebsitedepot.com',
    },
    {
      ID: 3,
      CompanyName: 'K&S Music',
      Description: 'Описание',
      Address: '1000 Nicllet Mall',
      City: 'Minneapolis',
      State: 'Minnesota',
      Zipcode: 55403,
      Phone: '(612) 304-6073',
      Fax: '(612) 304-6074',
      Website: 'http://www.nowebsitemusic.com',
    },
    {
      ID: 4,
      CompanyName: "Tom's Club",
      Description: 'Описание',
      Address: '999 Lake Drive',
      City: 'Issaquah',
      State: 'Washington',
      Zipcode: 98027,
      Phone: '(800) 955-2292',
      Fax: '(800) 955-2293',
      Website: 'http://www.nowebsitetomsclub.dx',
    },
  ];

  // Переменные для хранения значений
  isMultiple: any = false;
  isCollapsible: any = false;
  animationDuration: number = 300;
  selectedItems: Company[] = [this.companies[0]];

  constructor() {}

  ngOnInit() {
    // Инициализация, если необходимо
  }

  onMultipleChanged(value: boolean) {
    this.isMultiple = value;
  }

  onCollapsibleChanged(value: boolean) {
    this.isCollapsible = value;
  }

  onAnimationDurationChanged(value: number) {
    this.animationDuration = value;
  }

  onSelectedItemsChanged(selectedItems: Company[]) {
    this.selectedItems = selectedItems;
  }

  // Методы для управления аккордеоном
  expandItem(index: number) {
    if (this.accordion) {
      this.accordion.instance.expandItem(index);
    }
  }

  collapseItem(index: number) {
    if (this.accordion) {
      this.accordion.instance.collapseItem(index);
    }
  }

  updateDimensions() {
    if (this.accordion) {
      this.accordion.instance.updateDimensions();
    }
  }

  // Обработчики событий
  onItemClick(e: any) {
    console.log('Clicked item:', e.itemData);
  }

  onItemRendered(e: any) {
    console.log('Item rendered:', e.itemData);
  }

  onSelectionChanged(e: any) {
    console.log('Selection changed:', e.addedItems, e.removedItems);
  }

  // Метод для добавления новой компании
  addCompany(company: Company) {
    this.companies.push(company);
    if (this.accordion) {
      this.accordion.instance.option('dataSource', this.companies);
    }
  }

  // Метод для удаления компании
  removeCompany(id: number) {
    this.companies = this.companies.filter((company) => company.ID !== id);
    if (this.accordion) {
      this.accordion.instance.option('dataSource', this.companies);
    }
  }
}
