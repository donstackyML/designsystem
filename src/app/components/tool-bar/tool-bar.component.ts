import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
})
export class ToolBarComponent {
  textBoxOptions = {
    placeholder: 'Search...',
    showClearButton: true,
  };

  searchButtonOptions = {
    icon: 'search',
    onClick() {
      showMessage('Search');
    },
  };

  backButtonOptions = {
    icon: 'back',
    onClick() {
      showMessage('Back');
    },
  };

  aboutButtonOptions = {
    icon: 'info',
    text: 'About',
    onClick() {
      showMessage('About');
    },
  };

  profileButtonOptions = {
    icon: 'user',
    text: 'Profile',
    onClick() {
      showMessage('Profile');
    },
  };

  settingsButtonOptions = {
    icon: 'preferences',
    text: 'Settings',
    onClick() {
      showMessage('Settings');
    },
  };
}

function showMessage(name: string) {
  notify(
    {
      message: `${name} button has been clicked!`,
      width: 300,
    },
    'info',
    1000
  );
}
