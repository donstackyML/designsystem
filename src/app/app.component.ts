import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ItemClickEvent } from 'devextreme/ui/list';
import themes from 'devextreme/ui/themes';
import { ComponentRoutesService } from './service/component-routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  themes: string[] = ['light', 'dark'];

  componentsRoute: string[];
  componentsName: string[];
  currentComponent = '';

  isDropDownBoxOpened = false;
  isDark = false;
  labelClick = new EventEmitter();

  dropDownOptions = {
    contentTemplate: 'popupContent',
  };

  constructor(public router: Router, service: ComponentRoutesService) {
    this.componentsName = service.getComponentsName();
    this.componentsRoute = service.getComponentsRoute();
    this.currentComponent = this.componentsName[0];
  }

  handleThemeChange() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      themes.current('generic.dark');
    } else {
      themes.current('generic.light');
    }
  }

  handleRouteChange(routeIndex: number) {
    this.router.navigate([`/${this.componentsRoute[routeIndex]}`]);
  }

  handleComponentChange(event: ItemClickEvent) {
    this.currentComponent = this.componentsName[event.itemIndex as number];
    this.isDropDownBoxOpened = false;
    this.handleRouteChange(event.itemIndex as number);
  }
}
