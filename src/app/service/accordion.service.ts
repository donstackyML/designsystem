import { Injectable } from '@angular/core';

export interface Employee {
  ID: number | undefined;
  FirstName: string | undefined;
  LastName: string | undefined;
  Prefix: string | undefined;
  Position: string | undefined;
  BirthDate: string | undefined;
  State: string | undefined;
}

const employees: Employee[] = [{
  ID: 1,
  Prefix: 'Mr.',
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  State: 'California',
  BirthDate: '1964/03/16',
},
{
  ID: 2,
  Prefix: 'Mrs.',
  FirstName: 'Olivia',
  LastName: 'Peyton',
  Position: 'Sales Assistant',
  State: 'California',
  BirthDate: '1981/06/03',
},
{
  ID: 3,
  Prefix: 'Mr.',
  FirstName: 'Robert',
  LastName: 'Reagan',
  Position: 'CMO',
  State: 'Arkansas',
  BirthDate: '1974/09/07',
},
{
  ID: 4,
  Prefix: 'Ms.',
  FirstName: 'Greta',
  LastName: 'Sims',
  Position: 'HR Manager',
  State: 'Georgia',
  BirthDate: '1977/11/22',
}];

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  getEmployees() {
    return employees;
  }
}
