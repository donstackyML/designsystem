import { Injectable } from '@angular/core';

type Themes = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private _theme: Themes;

  constructor() {
    this._theme =
      (window.localStorage.getItem('monitel.designsystem.theme') as Themes) ||
      'light';
  }

  get theme() {
    return this._theme;
  }

  set theme(value) {
    this._theme = value;
  }
}
