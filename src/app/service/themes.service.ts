import { Injectable } from '@angular/core';

type Themes = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private _theme: Themes;

  constructor() {
    this._theme =
      <Themes>window.localStorage.getItem('monitel.designsystem.theme') ||
      'light';
  }

  get theme() {
    return this._theme;
  }

  set theme(value) {
    this._theme = value;
  }
}
