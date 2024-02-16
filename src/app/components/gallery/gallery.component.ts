import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  galleryDataSource = [
    'https://js.devexpress.com/Content/images/doc/23_2/PhoneJS/person1.png',
    'https://js.devexpress.com/Content/images/doc/23_2/PhoneJS/person2.png',
    'https://js.devexpress.com/Content/images/doc/23_2/PhoneJS/person3.png',
    'https://js.devexpress.com/Content/images/doc/23_2/PhoneJS/person4.png',
  ];
}
