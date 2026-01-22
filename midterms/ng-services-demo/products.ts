import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getProducts() {
    return [
      {
        productid: 'P-101',
        productname: 'Logitech Mouse',
        description: '6 Button Mechanical Mouse',
        price: 899
      },
      {
        productid: 'P-102',
        productname: 'Logitech JBL BT Speaker',
        description: 'Waterproof Radio 360 Surround',
        price: 1099
      },
      {
        productid: 'P-103',
        productname: 'Mechanical KeyBoard',
        description: 'Hot-swappable RGB Backlit',
        price: 2395
      },
      {
        productid: 'P-104',
        productname: 'Oclus Meta',
        description: 'All-in-one Gaming Headset',
        price: 22450
      },
    ];
  }
}
