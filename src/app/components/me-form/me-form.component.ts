import { Component } from '@angular/core';

@Component({
  selector: 'me-form',
  templateUrl: './me-form.component.html',
  styleUrls: ['./me-form.component.css'],
})
export class MeFormComponent {
  formData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    gender: 'male',
    birthDate: new Date(1990, 0, 1),
    occupation: '',
    isSubscribed: false,
    country: 'USA',
  };

  genderOptions = ['male', 'female', 'other'];
  countryOptions = ['USA', 'Canada', 'UK', 'Australia', 'Germany'];
  size = 'medium' as const;
  readOnly = false;
  disabled = false;
}
