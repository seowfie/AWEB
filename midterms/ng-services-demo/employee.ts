import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  getEmployees() {
    return [
      {
        id: 101,
        firstname: 'Sofia',
        lastname: 'Sarmiento',
        email: 'stsarmiento2@student.hau.edu.ph'
      },
      {
        id: 102,
        firstname: 'Bucky',
        lastname: 'Barnes',
        email: 'thewintersoldier@hau.edu.ph'
      },
      {
        id: 103,
        firstname: 'Kokomi',
        lastname: 'Sangonomiya',
        email: 'watatsumipriestess@hau.edu.ph'
      },
      {
        id: 104,
        firstname: 'Xinlong',
        lastname: 'He',
        email: 'hexinlong.ald1@student.hau.edu.ph'
      },
    ];
  }
}
