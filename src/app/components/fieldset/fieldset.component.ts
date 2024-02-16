import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css'],
})
export class FieldsetComponent {
  isDrawerOpen: boolean = false;
  buttonOptions: any = {
    icon: 'menu',
    onClick: () => {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  };
}
