import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemClickEvent } from 'devextreme/ui/list';
import themes from 'devextreme/ui/themes';
import { ComponentRoutesService } from './service/component-routes.service';
import { ThemesService } from './service/themes.service';
import { ButtonClickEvent } from 'devextreme/ui/drop_down_button';
import { ChangeEvent } from 'devextreme/ui/text_box';
import { ValueChangedEvent } from 'devextreme/ui/filter_builder';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  themes: string[] = ['light', 'dark'];
  path: string;
  componentsRoute: string[];
  componentsName: string[];
  currentComponent: string;
  isDark: boolean = false;

  constructor(
    private router: Router,
    private service: ComponentRoutesService,
    private themeService: ThemesService,
    private location: Location
  ) {
    this.componentsName = this.service.getComponentsName();
    this.componentsRoute = this.service.getComponentsRoute();
    this.currentComponent = this.componentsName[0];
    this.path = this.location.path(true).slice(1);
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

  ngDoCheck(): void {
    this.path = this.location.path(true).slice(1);

    const index = this.componentsRoute.indexOf(this.path);

    if (String(index)) {
      this.currentComponent = this.componentsName[index];
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

  handleComponentChange(event: ValueChangedEvent) {
    const index = this.componentsName.indexOf(event.value);

    window.localStorage.setItem('monitel.designsystem.routeIndex', `${index}`);

    this.handleRouteChange(index);
  }
}
