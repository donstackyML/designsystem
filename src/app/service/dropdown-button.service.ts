import { Injectable } from '@angular/core';

const downloads = [
  'Download Trial For Visual Studio',
  'Download Trial For All Platforms',
  'Package Managers',
];

@Injectable({
  providedIn: 'root',
})
export class DropdownButtonService {
  constructor() {}

  getDownloads(): string[] {
    return downloads;
  }
}
