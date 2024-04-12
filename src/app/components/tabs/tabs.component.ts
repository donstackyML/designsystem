import { Component, ViewChild } from '@angular/core';
import { Tab, TabsService } from 'src/app/service/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  tabsWithText: Tab[];

  tabsWithIconAndText: Tab[];

  width = 'auto';

  showNavButtons = false;

  scrollByContent = false;

  widgetWrapperClasses = {
    'widget-wrapper': true,
    'widget-wrapper-horizontal': true,
    'widget-wrapper-vertical': false,
    'strict-width': false,
  };

  constructor(service: TabsService) {
    this.tabsWithText = service.getTabsWithText();
    this.tabsWithIconAndText = service.getTabsWithIconAndText();
  }
}
