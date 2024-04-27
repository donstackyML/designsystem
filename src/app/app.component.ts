import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemClickEvent } from 'devextreme/ui/list';
import themes from 'devextreme/ui/themes';
import { ComponentRoutesService } from './service/component-routes.service';
import { ThemesService } from './service/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

  constructor(
    public router: Router,
    service: ComponentRoutesService,
    private themeService: ThemesService
  ) {
    this.componentsName = service.getComponentsName();
    this.componentsRoute = service.getComponentsRoute();
    this.currentComponent = this.componentsName[0];
  }

  ngOnInit(): void {
    if (window.localStorage.getItem('monitel.designsystem.theme') === 'dark') {
      themes.current('generic.dark');
      this.isDark = true;
    } else {
      themes.current('generic.light');
      this.isDark = false;
    }
  }

  handleThemeChange() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      themes.current('generic.dark');
      this.themeService.theme = 'dark';
      window.localStorage.setItem('monitel.designsystem.theme', 'dark');
    } else {
      themes.current('generic.light');
      this.themeService.theme = 'light';
      window.localStorage.setItem('monitel.designsystem.theme', 'light');
    }
  }

  handleRouteChange(routeIndex: number) {
    this.router.navigate([`/${this.componentsRoute[routeIndex]}`]);
  }

  handleComponentChange(event: ItemClickEvent) {
    const index = <number>event.itemIndex;

    this.currentComponent = this.componentsName[index];
    this.isDropDownBoxOpened = false;
    this.handleRouteChange(index);
  }
}
