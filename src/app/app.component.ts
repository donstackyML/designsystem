import { Component } from '@angular/core';
import themes from 'devextreme/ui/themes';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  themes: string[] = ['light', 'dark'];
  components: string[] = [
    'buttons',
    'editors',
    'pivotgrid',
    'datagrid',
    'treelist',
    'scheduler',
    'form',
    'list',
    'filter',
    'overlay',
    'menu',
    'gallery',
    'tabs',
    'progress-bar',
    'tool-bar',
    'fieldset',
  ];
  isDark: boolean = false;

  constructor(public router: Router) {}

  onThemeChanged(event: any) {
    if (event.value === 'light') {
      themes.current('generic.light');
      this.isDark = false;
    } else if (event.value === 'dark') {
      themes.current('generic.dark');
      this.isDark = true;
    }
  }

  onRouteChanged(event: any) {
    this.router.navigate([`/${event.value}`]);
  }
}
